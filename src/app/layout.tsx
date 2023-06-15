import { Header } from "@/components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: "Full-Stack Web Developer | Frontend, Design, UX, 3D | Mohammad Makkeh",
    description:
        "Full-stack web developer specializing in frontend, design (UI), user experience (UX). With a passion for creating exceptional user experiences, I deliver high-quality results that drive engagement and conversions.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={montserrat.className} lang="en">
            <body>
                <div className="wrapper" style={{overflow:'hidden'}}>
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
