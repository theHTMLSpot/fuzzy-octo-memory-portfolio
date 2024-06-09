"use client";

import Head from "next/head";
import { useState, useEffect, useRef, useCallback } from "react";

function Heading() {
    const headingText = 'THIS IS MY WORK';
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [title, setTitle] = useState(headingText);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const currentLetterRef = useRef(0); // Using ref to keep track of currentLetter

    const animateTitle = useCallback((speed: number) => {
        currentLetterRef.current = 0; // Reset the reference

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setTitle(prevTitle =>
                prevTitle
                    .split("")
                    .map((letter, index) =>
                        index < currentLetterRef.current
                            ? headingText[index]
                            : letters[Math.floor(Math.random() * 26)]
                    )
                    .join("")
            );

            currentLetterRef.current += 1;

            if (currentLetterRef.current > headingText.length) {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
                setTitle(headingText); // Ensure final state is the original text
            }
        }, speed);
    }, [headingText, letters]);

    useEffect(() => {
        animateTitle(100); // Run 10 times a second initially

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [animateTitle]); // Only run on mount

    const handleHover = () => {
        animateTitle(30); // Run 30 times a second on hover
    };

    return (
        <h2 onMouseEnter={handleHover} onTouchStart={handleHover}>{title}</h2>
    );
}

export default Heading;