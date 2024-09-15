"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Text } from "@react-three/drei";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend } from "@react-three/fiber";

extend({ TextGeometry });

const HexagonalFloor = () => {
    const gridSize = 10;
    const hexSize = 3;
    const wallHeight = 10; // Height of the walls

    const createHexagonShape = (size: number) => {
        const shape = new THREE.Shape();
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = size * Math.cos(angle);
            const y = size * Math.sin(angle);
            if (i === 0) shape.moveTo(x, y);
            else shape.lineTo(x, y);
        }
        shape.closePath();
        return shape;
    };

    const hexGeometry = new THREE.ShapeGeometry(createHexagonShape(hexSize));
    const hexMaterial = new THREE.LineBasicMaterial({
        color: 0x444444,
        linewidth: 2,
    });

    const FlickeringMaterial = ({ offset }: { offset: number }) => {
        const uniforms = useMemo(
            () => ({
                time: { value: 0 },
                color: { value: new THREE.Color(0x5b406d) },
                offset: { value: offset },
            }),
            [offset]
        );

        useFrame(({ clock }) => {
            uniforms.time.value = clock.getElapsedTime();
        });

        return (
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={`
                    void main() {
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `}
                fragmentShader={`
                    uniform float time;
                    uniform vec3 color;
                    uniform float offset;
                    void main() {
                        float adjustedTime = time + offset;
                        float flicker = step(0.5, fract(adjustedTime * 0.5));
                        float randomFlicker = step(0.7, fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453));
                        float finalFlicker = min(flicker, randomFlicker);
                        gl_FragColor = vec4(color, finalFlicker);
                    }
                `}
                transparent={true}
                side={THREE.DoubleSide}
            />
        );
    };

    const highlightedPositions = useMemo(() => {
        const positions = [];
        const totalCells = (2 * gridSize + 1) * (2 * gridSize + 1);
        const highlightProbability = 100 / totalCells;

        for (let x = -gridSize - 20; x <= gridSize - 10; x++) {
            for (let z = -gridSize; z <= gridSize; z++) {
                if (
                    Math.random() < highlightProbability &&
                    positions.length < 100
                ) {
                    positions.push([x, z, Math.random() * 10]); // Add random offset
                }
            }
        }

        // If we didn't get 20 positions, add more randomly
        for (let i = positions.length; i > 0; i--) {
            const x = Math.floor(Math.random() * (2 * gridSize + 1)) - gridSize;
            const z = Math.floor(Math.random() * (2 * gridSize + 1)) - gridSize;
            if (!positions.some((pos) => pos[0] === x && pos[1] === z)) {
                positions.push([x, z, Math.random() * 10]); // Add random offset
            }
        }

        return positions;
    }, [gridSize]);

    const hexagons = [];
    for (let x = -gridSize; x <= gridSize; x++) {
        for (let z = -gridSize; z <= gridSize; z++) {
            const xPos = x * 1.5 * hexSize;
            const zPos =
                z * Math.sqrt(3) * hexSize +
                (x % 2 ? (Math.sqrt(3) / 2) * hexSize : 0);

            const highlightedPosition = highlightedPositions.find(
                (pos) => pos[0] === x && pos[1] === z
            );
            const isHighlighted = !!highlightedPosition;

            const fillMaterial = isHighlighted ? (
                <FlickeringMaterial offset={highlightedPosition[2]} />
            ) : (
                <meshBasicMaterial color={0x000000} transparent opacity={0} />
            );

            hexagons.push(
                <group
                    key={`${x}-${z}`}
                    position={[xPos, 0, zPos]}
                    rotation={[-Math.PI / 2, 0, 0]}
                >
                    <mesh>
                        <shapeGeometry args={[createHexagonShape(hexSize)]} />
                        {fillMaterial}
                    </mesh>
                    <lineSegments>
                        <edgesGeometry args={[hexGeometry]} />
                        <primitive object={hexMaterial} />
                    </lineSegments>
                </group>
            );
        }
    }

    // Create walls
    const walls = [];
    const wallThickness = 1;

    // Calculate the dimensions of the grid
    const gridWidth = (2 * gridSize + 1) * 1.5 * hexSize;
    const gridHeight = (2 * gridSize + 1) * Math.sqrt(3) * hexSize;

    // Load the textures using useLoader
    const colorMap = useLoader(
        THREE.TextureLoader,
        "/3d/textures/brick_wall.png"
    );
    // const normalMap = useLoader(
    //     THREE.TextureLoader,
    //     "/3d/textures/brick_wall_normal.png"
    // );

    // Set wrapping and repeating
    colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
    // normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
    colorMap.repeat.set(1, 1);
    // normalMap.repeat.set(10, 5);

    // Create four walls with the texture
    walls.push(
        <mesh
            key="wall-north"
            position={[0, wallHeight / 2, -gridHeight / 2 - wallThickness / 2]}
        >
            <boxGeometry
                args={[
                    gridWidth + wallThickness * 2,
                    wallHeight,
                    wallThickness,
                ]}
            />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    );
    walls.push(
        <mesh
            key="wall-south"
            position={[0, wallHeight / 2, gridHeight / 2 + wallThickness / 2]}
        >
            <boxGeometry
                args={[
                    gridWidth + wallThickness * 2,
                    wallHeight,
                    wallThickness,
                ]}
            />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    );

    walls.push(
        <group
            key="wall-east"
            position={[gridWidth / 2 + wallThickness / 2, wallHeight / 2, 0]}
        >
            <mesh>
                <boxGeometry
                    args={[
                        wallThickness,
                        wallHeight,
                        gridHeight + wallThickness * 2,
                    ]}
                />
                <meshStandardMaterial map={colorMap}/>
            </mesh>
            <Text
                position={[-10, 0, 0]}
                fontSize={wallHeight / 2}
                anchorX="center"
                anchorY="middle"
                rotation={[0, -Math.PI / 2, 0]}
                // font="/fonts/hexgon-font/Hexgon3D-vWoA.otf"
                font="/fonts/hexgon-font/HexgonStaggered-erR3.otf"
                characters="PROJECTS"
            >
                PROJECTS
                <meshPhongMaterial
                    attach="material"
                    color={0x800080}
                    emissive={0x400040}
                    specular={0xffffff}
                    shininess={100}
                />
            </Text>
        </group>
    );

    return (
        <>
            {hexagons}
            {walls}
        </>
    );
};

const GlassHexagon = ({ position, delay }: any) => {
    const [thickness, setThickness] = useState(0);
    const meshRef = useRef<THREE.Mesh>(null);
    const lightRef = useRef<THREE.PointLight>(null);

    const createHexagonShape = (size: number) => {
        const shape = new THREE.Shape();
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = size * Math.cos(angle);
            const y = size * Math.sin(angle);
            if (i === 0) shape.moveTo(x, y);
            else shape.lineTo(x, y);
        }
        shape.closePath();
        return shape;
    };
    const maxThickness = 4;
    useFrame(({ clock }) => {
        const time = Math.max(0, clock.getElapsedTime() - delay);
        if (thickness < maxThickness) {
            setThickness(Math.min(time * 2, maxThickness));
        }
        if (lightRef.current) {
            lightRef.current.intensity = Math.min(time * 2, 1) * 0.5;
        }
    });

    const hexShape = createHexagonShape(3);
    const geometry = new THREE.ExtrudeGeometry(hexShape, {
        depth: thickness,
        bevelEnabled: false,
        // bevelThickness: 0.1,
        // bevelSize: 0.1,
        // bevelSegments: 3
    });

    return (
        <group
            position={[position[0], position[1], position[2]]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh ref={meshRef}>
                <primitive object={geometry} />
                <meshPhysicalMaterial
                    color={0xffffff}
                    metalness={0.2}
                    roughness={0.2}
                    transmission={0.8}
                    thickness={0.1}
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                />
            </mesh>
            <lineSegments>
                <edgesGeometry args={[geometry]} />
                <lineBasicMaterial color={0xffffff} linewidth={2} />
            </lineSegments>
            {/* <pointLight
                ref={lightRef}
                distance={5}
                intensity={0}
                color={0x61DBFB}
            /> */}
        </group>
    );
};

const ReactLogo = ({ position, delay }: any) => {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF("/3d/react-logo/scene.gltf");

    const clonedScene = useMemo(() => scene.clone(), [scene]);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.02; // Rotation speed along y-axis
            groupRef.current.rotation.z += 0.01; // Rotation speed along z-axis
            groupRef.current.rotation.x += 0.01; // Rotation speed along z-axis
        }
    });

    return (
        <group
            ref={groupRef}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.7, 0.7, 0.7]}
            position={[position[0], position[1] + 2, position[2]]}
        >
            {/* React Logo Object */}
            <primitive object={clonedScene} />

            {/* Material with emissive glow */}
            <meshPhysicalMaterial
                color={0xffffff} // Base color
                emissive={new THREE.Color(0x61dbfb)} // Glow color
                emissiveIntensity={0.6} // Adjust glow intensity
                metalness={0.5}
                roughness={0.2}
                transmission={0.8} // For glassy/translucent effect
                thickness={0.5}
            />

            {/* Point light for subtle glow */}
            <pointLight
                color={0x61dbfb}
                intensity={30}
                distance={90} // Adjust glow reach
                decay={1}
                position={[0, 0, 0]} // Light at the center of the logo
            />
        </group>
    );
};

const Scene = () => {
    const { camera } = useThree();

    const centerHexPos = useMemo(() => [-31.5, 0, 2.6], []);

    useEffect(() => {
        const [x, y, z] = centerHexPos;
        camera.position.set(x - 20, 15, 2.6);
        camera.lookAt(x, y, z);
    }, [camera, centerHexPos]);

    function moveBy(hexPos: Array<number>, by: { cols: number; rows: number }) {
        const [x, y, z] = hexPos;
        const multiplierX = by.cols % 2 === 0 ? 1 : 2;
        const multiplierY = by.rows % 2 === 0 ? 1 : 2;
        return [
            x + 4.5 * multiplierX * by.cols,
            y,
            z + 2.6 * multiplierY * by.rows,
        ];
    }

    const hexagonPositions = [
        centerHexPos,
        moveBy(centerHexPos, {
            cols: 2,
            rows: 3,
        }),
        moveBy(centerHexPos, {
            cols: -2,
            rows: 6,
        }),
    ];

    return (
        <>
            <ambientLight intensity={0.1} />
            <directionalLight position={[5, 10, 5]} intensity={0.8} />
            <directionalLight position={[5, 10, 5]} intensity={0.8} />
            <HexagonalFloor />
            {hexagonPositions.map((position, index) => (
                <React.Fragment key={index}>
                    <GlassHexagon position={position} delay={index * 0.2} />
                    <ReactLogo position={position} delay={index * 0.2} />
                </React.Fragment>
            ))}
            {/* <OrbitControls enableDamping dampingFactor={0.1} /> */}
        </>
    );
};

export default function ShinyGlassHexagonsWithLogo() {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <Canvas>
                <Scene />
            </Canvas>
        </div>
    );
}
