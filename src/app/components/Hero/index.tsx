"use client";
import styles from "./hero.module.css";
import * as React from "react";
import { motion } from "framer-motion";
import Glow from "@/components/Glow";


export function Hero() {

    return (
        <section className={`min-h-screen pt-[100px] flex py-9 flex-col gap-8 items-center text-center relative inline-padding z-50 pointer-events-none`}>
            <div>
                <motion.h1
                    className="text-6xl font-bold"
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
                    <span className={"relative"}>
                        Pixels
                        <span
                            className={`absolute bg-primary z-[2] w-3 h-3 animate-flicker-pixel`}
                            style={
                                {
                                    top: "14px",
                                    left: "4px",
                                    "--delay": "0s",
                                } as React.CSSProperties
                            }
                        ></span>
                        <span
                            className={`absolute bg-primary z-[2] w-3 h-3 animate-flicker-pixel`}
                            style={
                                {
                                    top: "40px",
                                    left: "4px",
                                    "--delay": ".8s",
                                } as React.CSSProperties
                            }
                        ></span>
                        <span
                            className={`absolute bg-primary z-[2] w-3 h-3 animate-flicker-pixel`}
                            style={
                                {
                                    top: "45px",
                                    left: "48px",
                                    "--delay": ".8s",
                                } as React.CSSProperties
                            }
                        ></span>
                        <span
                            className={`absolute bg-primary z-[2] w-3 h-3 animate-flicker-pixel`}
                            style={
                                {
                                    top: "38px",
                                    left: "80px",
                                    "--delay": "1.4s",
                                } as React.CSSProperties
                            }
                        ></span>
                        <span
                            className={`absolute bg-primary z-[2] w-3 h-3 animate-flicker-pixel`}
                            style={
                                {
                                    top: "48px",
                                    left: "120px",
                                    "--delay": "0s",
                                } as React.CSSProperties
                            }
                        ></span>
                        <span
                            className={`absolute bg-primary z-[2] w-3 h-3 animate-flicker-pixel`}
                            style={
                                {
                                    top: "25px",
                                    left: "110px",
                                    "--delay": ".8s",
                                } as React.CSSProperties
                            }
                        ></span>
                        <span
                            className={`absolute bg-primary z-[2] w-3 h-3 animate-flicker-pixel`}
                            style={
                                {
                                    top: "33px",
                                    left: "137px",
                                    "--delay": "1.4s",
                                } as React.CSSProperties
                            }
                        ></span>
                        <span
                            className={`absolute bg-primary z-[2] w-3 h-3 animate-flicker-pixel`}
                            style={
                                {
                                    top: "25px",
                                    left: "171px",
                                    "--delay": ".8s",
                                } as React.CSSProperties
                            }
                        ></span>
                    </span>{" "}
                    to <span className="text-gradient-primary">Perfection</span>
                </motion.h1>
                <motion.h2
                    className="text-xl mt-2"
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
                        className={"bg-blue-600 inline-block"}
                    >
                        User Experience
                    </motion.span>{" "}
                    Through Intuitive Design and Flawless Frontend
                </motion.h2>
            </div>


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
