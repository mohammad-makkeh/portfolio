"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import localImageLoader from "@/helpers/localImageLoader";
import Nav from "./Nav";
// import useIsPageScrolled from "@/hooks/useIsPageScrolled";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {

    // const {isScrolled} = useIsPageScrolled();
    const isScrolled = false;

    return (
        <header className={`${styles.header} inline-padding ${isScrolled ? styles['header-blur'] : ''}`}>
            <Link href="/" className={`${styles.branding}`}>
                <div className={`${styles.logo}`}>
                    <Image
                        fill
                        alt="m-logo"
                        src={"m-logo-dark-fill.svg"}
                        loader={localImageLoader}
                    />
                </div>
                <div> &lt;MohammadMakkeh /&gt;</div>
            </Link>
            <Nav />
        </header>
    );
}
