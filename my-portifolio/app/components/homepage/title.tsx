"use client";

import { useState, useEffect } from "react";

function Title() {
    const [title, setTitle] = useState("");
    const Heading = "Hi, my name is Ethan Lagden!";

    function animateTitle(speed: number){
        let i = 0;
        const intervalId = setInterval(() => {
            setTitle(Heading.substring(0, i + 1)); // Set the title directly
            i++;
            if (i >= Heading.length) {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }

    useEffect(() => {
        const intervalCleanup = animateTitle(100);

        return intervalCleanup;
    }, []);

    return (
        <h2 style={{ fontWeight: 700 }} onMouseEnter={(e) => {animateTitle(20)}} onTouchStart={(e) => {animateTitle(20)}}>{title}</h2>
    );
}

export default Title;