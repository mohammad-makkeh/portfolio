import { useEffect, useRef } from "react";

export default function useSmoothCursor() {
    const hexaCursorRef = useRef<HTMLDivElement>(null);
    const mainCursorRef = useRef<HTMLDivElement>(null);
    const mousePosition = useRef({ x: 0, y: 0 });
    const cursorPosition = useRef({ x: 0, y: 0 });
    const animationFrame = useRef<number>();

    const EASING_FACTOR = 0.06;

    useEffect(() => {
        function followCursor(e: MouseEvent) {
            mousePosition.current = { x: e.clientX, y: e.clientY };
            if (mainCursorRef.current) {
                mainCursorRef.current.style.top = e.clientY - 11 + "px";
                mainCursorRef.current.style.left = e.clientX - 6 + "px";
            }
        }

        function updateCursor() {
            if (hexaCursorRef.current) {
                // Lerp (Linear Interpolation) for smooth transition
                cursorPosition.current.x +=
                    (mousePosition.current.x - cursorPosition.current.x) *
                    EASING_FACTOR;
                cursorPosition.current.y +=
                    (mousePosition.current.y - cursorPosition.current.y) *
                    EASING_FACTOR;

                hexaCursorRef.current.style.top =
                    cursorPosition.current.y - 11 + "px";
                hexaCursorRef.current.style.left =
                    cursorPosition.current.x - 6 + "px";
            }

            // Continue the animation loop
            animationFrame.current = requestAnimationFrame(updateCursor);
        }

        document.addEventListener("mousemove", followCursor);
        animationFrame.current = requestAnimationFrame(updateCursor);

        return () => {
            document.removeEventListener("mousemove", followCursor);
            cancelAnimationFrame(animationFrame.current!);
        };
    }, []);

    return {hexaCursorRef, mainCursorRef};
}
