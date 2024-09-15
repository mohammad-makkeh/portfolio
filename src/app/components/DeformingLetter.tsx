import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import {motion} from "framer-motion"

export interface IDeformingLetterProps {
    letter: string;
    className?: string;
}

export default function DeformingLetter({ letter, className }: IDeformingLetterProps) {
    const [displayedLetter, setDisplayedLetter] = useState(letter);
    const [isAnimating, setIsAnimating] = useState(false);

    const getRandomLetter = () => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    };

    const animate = useCallback(() => {
        setIsAnimating(true);
        let animationFrames = 0;
        const totalFrames = 60;

        const changeLetterRandomly = () => {
            if (animationFrames < totalFrames) {
                setDisplayedLetter(getRandomLetter());
                animationFrames++;
                requestAnimationFrame(changeLetterRandomly);
            } else {
                setDisplayedLetter(letter);
                setIsAnimating(false);
            }
        };

        changeLetterRandomly();
    }, [letter]);

    const handleMouseEnter = () => {
        if (!isAnimating) {
            animate();
        }
    };

    return (
        <motion.span
            initial={{ opacity: 1, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            onViewportEnter={animate}
            transition={{ duration: 5 }}
            className={className}
            onMouseEnter={handleMouseEnter}
        >
            {displayedLetter}
        </motion.span>
    );
}
