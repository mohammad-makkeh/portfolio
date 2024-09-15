"use client"
import Link from "next/link";
import styles from "./header.module.css";
import Nav from "./Nav";
// import useIsPageScrolled from "@/hooks/useIsPageScrolled";



export function Header() {

    // const {isScrolled} = useIsPageScrolled();
    const isScrolled = false;

    return (
        <header className={`${styles.header} inline-padding  ${isScrolled ? styles['header-blur'] : ''}`}>
            <Link href="/" className={`${styles.branding}`}>
                <div> &lt;MohammadMakkeh /&gt;</div>
            </Link>
            <Nav />
        </header>
    );
}
