import { useEffect, useState } from "react";

export default function useIsPageScrolled(): {
    isScrolled: boolean;
    scrollY: number;
} {
    // const [isScrolled, setIsScrolled] = useState(false);
    // const [scrollY, setScrollY] = useState(() => window.pageYOffset);

    // useEffect(() => {
    //     try {
    //         const handleScroll = () => {
    //             const scrollTop =
    //                 window.pageYOffset || document.documentElement.scrollTop;
    //             if (scrollTop !== 0) setIsScrolled(true);
    //             else setIsScrolled(false);
    //             setScrollY(window.pageYOffset);
    //         };

    //         window.addEventListener("scroll", handleScroll);
    //         return () => {
    //             window.removeEventListener("scroll", handleScroll);
    //         };
    //     } catch (e) {}
    // }, []);

    // return {
    //     isScrolled,
    //     scrollY,
    // };
    return {
        isScrolled: false, 
        scrollY: 0
    };
}
