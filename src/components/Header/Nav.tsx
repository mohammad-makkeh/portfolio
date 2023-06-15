import styles from "./header.module.css";
import Link from "next/link";

export interface INavProps {}

export default function Nav(props: INavProps) {
    return (
        <nav className={`${styles.nav}`}>
            <ul>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
