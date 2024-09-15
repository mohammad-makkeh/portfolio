import React, { useState, useEffect } from "react";

interface WordsTypewriterProps {
    words?: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    className?: string;
}

export default function WordsTypewriter({
    words = [],
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseDuration = 1000,
    className = "",
}: WordsTypewriterProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (words.length === 0) return;

        let timeout: NodeJS.Timeout;

        const animateText = () => {
            const currentWord = words[currentWordIndex];

            if (!isDeleting && currentText === currentWord) {
                // Pause before starting to delete
                timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && currentText === "") {
                // Move to the next word
                setIsDeleting(false);
                setCurrentWordIndex(
                    (prevIndex) => (prevIndex + 1) % words.length
                );
            } else {
                // Typing or deleting
                const adjustedSpeed = isDeleting ? deletingSpeed : typingSpeed;
                timeout = setTimeout(() => {
                    setCurrentText((prevText) =>
                        isDeleting
                            ? prevText.slice(0, -1)
                            : currentWord.slice(0, prevText.length + 1)
                    );
                }, adjustedSpeed);
            }
        };

        animateText();

        return () => clearTimeout(timeout);
    }, [
        currentWordIndex,
        currentText,
        isDeleting,
        words,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
    ]);

    return (
        <span className={`inline-block`} aria-label={words.join(", ")}>
            <span className={className}>{currentText}</span>
            <span className="animate-blink font-light inline-block -translate-y-1">
                |
            </span>
        </span>
    );
}
