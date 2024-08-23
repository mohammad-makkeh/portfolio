import Image from "next/image";
import styles from "./home.module.css";
import { Hero } from "./components/Hero";
import BackCanvas from "./components/BackgroundCanvas";
import LogoRibbon from "./components/LogoRibbon";
import HexagonalBackground from "./components/HexagonalBackground";

export default function Home() {
    return (
        <>
            <main
                className={
                    "min-h-[calc(100vh-var(--header-height))] relative z-50"
                }
            >
                <HexagonalBackground />
                <Hero />
                {/* <LogoRibbon/> */}
                <br />
                <br />
                <br />
                <br />
                <br />
            </main>
        </>
    );
}
