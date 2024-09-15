"use client";
import styles from "./hero.module.css";
import * as React from "react";
import { motion } from "framer-motion";
import Glow from "@/components/Glow";


export function Hero() {

    return (
        <section className={`min-h-screen pt-[100px] flex flex-col gap-8 items-center text-center relative inline-padding z-50 pointer-events-none`}>
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
                    <img src="/img/pixelsFlicker.gif" alt="logo" className="inline-block h-[52px] mb-5"/>
                    {" "}
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
                            rotate: 4,
                            transformOrigin: "right",
                            transition: {
                                delay: 3,
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
                top="-350px"
                right="200px"
                size="huge"
                intensity="high"
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
