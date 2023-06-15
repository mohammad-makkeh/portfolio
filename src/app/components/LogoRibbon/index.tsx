"use client"
import * as React from "react";
import styles from "./logoRibbon.module.css";
import { useInView } from "framer-motion"

export interface ILogoRibbonProps {}

export default function LogoRibbon(props: ILogoRibbonProps) {

    return (
        <section className={`${styles["logo-ribbon-wrapper"]} block-padding`}>
            <div className={`${styles["logo-ribbon"]} inline-padding`}>
                <h1 className={`${styles["logo-ribbon__title"]}`}>
                    {" "}
                    They Trust Me With Their Businesses{" "}
                </h1>
                <div className={`${styles["logo-ribbon__logos"]}`}>
                    <div className={`${styles["logo"]}`}></div>
                    <div className={`${styles["logo"]}`}></div>
                    <div className={`${styles["logo"]}`}></div>
                </div>
            </div>
        </section>
    );
}
