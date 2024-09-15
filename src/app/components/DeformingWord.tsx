import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export interface IDeformingWordProps {
    word: string;
    className?: string;
}

export default function DeformingWord({
    word,
    className,
}: IDeformingWordProps) {
    const [displayedWord, setDisplayedWord] = useState(word);
    const [isAnimating, setIsAnimating] = useState(false);
    const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);

    const getRandomLetter = () => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    };

    const animate = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);

        const animationDurations = word
            .split("")
            .map((_, index) => (index + 1) * 0.1);
        const maxDuration = Math.max(...animationDurations);

        const animateLetters = () => {
            const startTime = performance.now();

            const updateFrame = (currentTime: number) => {
                const elapsedTime = (currentTime - startTime) / 1000; // Convert to seconds

                const newWord = word
                    .split("")
                    .map((letter, index) => {
                        if (elapsedTime < animationDurations[index]) {
                            return getRandomLetter();
                        }
                        return letter;
                    })
                    .join("");

                setDisplayedWord(newWord);

                if (elapsedTime < maxDuration) {
                    requestAnimationFrame(updateFrame);
                } else {
                    setDisplayedWord(word);
                    setIsAnimating(false);
                    setHasAnimatedOnce(true);
                }
            };

            requestAnimationFrame(updateFrame);
        };

        animateLetters();
    }, [word, isAnimating]);

    const handleMouseEnter = () => {
        if (!isAnimating) {
            animate();
        }
    };

    return (
        <motion.div
            className={className}
            onMouseEnter={handleMouseEnter}
            onViewportEnter={animate}
        >
            {displayedWord.split("").map((letter, index) => (
                <span key={index}>{letter}</span>
            ))}
        </motion.div>
    );
}
