"use client";
import styles from "./hero.module.css";
import * as React from "react";
import { motion, useInView } from "framer-motion";
import Glow from "@/components/Glow";
import useIsPageScrolled from "@/hooks/useIsPageScrolled";

export interface IHeroProps {}

const GATEWAY_LAYERS_COUNT: number = 40;
const GATEWAY_LAYERS_BASE_HUE: number = 267;
const GATEWAY_MIN_LAYER_SCALE: number = GATEWAY_LAYERS_COUNT / 100;

function GateWayLayer({ i }: { i: number }) {
    const gatewayLayerRef = React.useRef(null);
    const inView = useInView(gatewayLayerRef, {
        margin: "0px 0px -400px 0px",
    });

    const scaleY =
        1 -
        (i + 1) * ((1 - GATEWAY_MIN_LAYER_SCALE) / GATEWAY_LAYERS_COUNT) +
        scrollY * 0.0007;
    const scaleX =
        1 - (i + 1) * (1.4 / GATEWAY_LAYERS_COUNT) + scrollY * 0.0027;
    const hue = GATEWAY_LAYERS_BASE_HUE + i * 2;
    const lightness = 50 + (i + 1) * Math.ceil(50 / GATEWAY_LAYERS_COUNT);

    return (
        <motion.div
            key={i}
            ref={gatewayLayerRef}
            className={`${styles["gateway-layer"]}`}
            style={
                {
                    "--gateway-layer-scale": `${scaleX < 0 ? 0 : scaleX} ${
                        scaleY < 0 ? 0 : scaleY
                    }`,
                    "--gateway-layer-color": `hsl(${hue}, 100%, ${lightness}%)`,
                } as React.CSSProperties
            }
            initial={{
                y: 80
            }}
            animate={{
                y: 0,
            }}
            transition={{
                delay: 0.3 + (i + 1) * 0.07,
                type: "spring",
                stiffness: 200,
                damping: 10,
            }}
        ></motion.div>
    );
}

export function Hero(props: IHeroProps) {
    const { scrollY } = useIsPageScrolled();

    return (
        <section className={`${styles.hero} inline-padding`}>
            <div className={`${styles.headline}`}>
                <motion.h1
                    initial={{
                        y: 100,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                        },
                    }}
                >
                    From{" "}
                    <span className={`${styles["text-pixelated"]}`}>
                        Pixels
                        <span
                            className={`${styles.pixel}`}
                            style={
                                {
                                    top: "14px",
                                    left: "5px",
                                    "--delay": "0s",
                                } as React.CSSProperties
                            }
                        ></span>
                        <span
                            className={`${styles.pixel}`}
                            style={
                                {
                                    top: "40px",
                                    left: "5px",
                                    "--delay": ".8s",
                                } as React.CSSProperties
                            }
                        ></span>
                        <span
                            className={`${styles.pixel}`}
                            style={
                                {
                                    top: "45px",
                                    left: "51px",
                                    "--delay": ".8s",
                                } as React.CSSProperties
                            }
                        ></span>
                        <span
                            className={`${styles.pixel}`}
                            style={
                                {
                                    top: "38px",
                                    left: "83px",
                                    "--delay": "1.4s",
                                } as React.CSSProperties
                            }
                        ></span>
                        <span
                            className={`${styles.pixel}`}
                            style={
                                {
                                    top: "51px",
                                    left: "118px",
                                    "--delay": "0s",
                                } as React.CSSProperties
                            }
                        ></span>
                        <span
                            className={`${styles.pixel}`}
                            style={
                                {
                                    top: "25px",
                                    left: "118px",
                                    "--delay": ".8s",
                                } as React.CSSProperties
                            }
                        ></span>
                        <span
                            className={`${styles.pixel}`}
                            style={
                                {
                                    top: "33px",
                                    left: "147px",
                                    "--delay": "1.4s",
                                } as React.CSSProperties
                            }
                        ></span>
                        <span
                            className={`${styles.pixel}`}
                            style={
                                {
                                    top: "25px",
                                    left: "184px",
                                    "--delay": ".8s",
                                } as React.CSSProperties
                            }
                        ></span>
                    </span>{" "}
                    to <span className="text-gradient-primary">Perfection</span>
                </motion.h1>
                <motion.h2
                    initial={{
                        y: 100,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                            delay: 0.2,
                        },
                    }}
                >
                    Elevating{" "}
                    <motion.span
                        initial={{ rotate: 0 }}
                        animate={{
                            rotate: 3,
                            transformOrigin: "right",
                            transition: {
                                delay: 0.8,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 200,
                                damping: 5,
                            },
                        }}
                        className={`${styles["text-highlighted"]}`}
                    >
                        User Experience
                    </motion.span>{" "}
                    Through Intuitive Design and Flawless Frontend
                </motion.h2>
            </div>

            <motion.div
                initial={{
                    y: 100,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.4,
                        delay: 0.3,
                    },
                }}
                className={`${styles["gateway"]}`}
                style={{ height: `${GATEWAY_LAYERS_COUNT * 50}px` }}
            >
                {new Array(GATEWAY_LAYERS_COUNT).fill(0).map((_, i) => (
                    <GateWayLayer key={i} i={i} />
                ))}
            </motion.div>

            {/* glows */}
            <Glow
                top="-200px"
                left="-118px"
                size="large"
                intensity="medium"
                color="lightblue"
            />
            <Glow
                top="90px"
                left="-120px"
                size="medium"
                intensity="low"
                color="purple"
            />
            <Glow
                top="-240px"
                right="200px"
                size="large"
                intensity="low"
                color="red"
            />
            <Glow
                bottom="-200px"
                right="-180px"
                size="large"
                intensity="medium"
                color="lightblue"
            />
        </section>
    );
}
