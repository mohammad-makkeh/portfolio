import Image from 'next/image'
import styles from './home.module.css'
import { Hero } from './components/Hero'
import BackCanvas from './components/BackgroundCanvas'
import LogoRibbon from './components/LogoRibbon'


export default function Home() {
  return (
    <main className={styles.main}>
        <BackCanvas/>
        <Hero/>
        <LogoRibbon/>
        <br />
        <br />
        <br />
        <br />
        <br />
    </main>
  )
}
