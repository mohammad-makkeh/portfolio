/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "./hero.module.css";
import * as React from "react";
import { motion, useInView } from "framer-motion";
import Glow from "@/components/Glow";
// import useIsPageScrolled from "@/hooks/useIsPageScrolled";

export interface IHeroProps {}

const GATEWAY_LAYERS_COUNT: number = 20;
const GATEWAY_LAYERS_BASE_HUE: number = 267;
const GATEWAY_LAYERS_SPACING: number = 1.25;

function GateWayLayer({ i }: { i: number }) {
    // const { scrollY } = useIsPageScrolled();
    const scrollY = 0;
    // const gatewayLayerRef = React.useRef(null);

    const hue = GATEWAY_LAYERS_BASE_HUE + i * 2;
    const lightness = 50 + (i + 1) * Math.ceil(50 / GATEWAY_LAYERS_COUNT);

    const iInverse = GATEWAY_LAYERS_COUNT - i;
    const scaleFactor = (GATEWAY_LAYERS_COUNT - 1) * 400 - i * 400;
    const scrollScale =
        1 + (scrollY * iInverse * 0.09 * scaleFactor) / 19000000;
    const translateScale = scrollY * i * 0.01;

    const scale = Math.min(scrollScale, 2.5);
    const yTranslate = Math.min(translateScale, 400);

    return (
        <div
            // key={i}
            // ref={gatewayLayerRef}
            className={`${styles["gateway-layer"]}`}
            style={
                {
                    "--i": i,
                    transform: `translate3d(0, ${yTranslate}%, 0) scale(${scale}, ${scale})`,
                    backgroundColor: `hsl(${hue}, 100%, ${lightness}%)`,
                    // backgroundColor: "purple",
                    // border: "1px solid black",
                    top: `${i * GATEWAY_LAYERS_SPACING}vw`,
                    left: `${i * GATEWAY_LAYERS_SPACING}vw`,
                    right: `${i * GATEWAY_LAYERS_SPACING}vw`,
                } as React.CSSProperties
            }
        ></div>
    );
}

export function Hero(props: IHeroProps) {
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


            <h1
                style={{
                    fontSize: "5rem",
                    marginTop: '6rem'
                }}
            >
                Hi, I'm Mohammad Makkeh
            </h1>


            {/* <motion.div
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
                style={{ height: `${GATEWAY_LAYERS_COUNT * 30}px` }}
            >
                {new Array(GATEWAY_LAYERS_COUNT).fill(0).map((_, i) => (
                    <GateWayLayer key={i} i={i} />
                ))}
            </motion.div> */}

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
