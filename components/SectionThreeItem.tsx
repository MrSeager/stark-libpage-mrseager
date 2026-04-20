"use client";
import { useState } from "react";

interface SectionThreeItemProps{
    bgImg: string;
    bg: string;
    text: string;
}

export default function SectionThreeItem({ bgImg, bg, text }: SectionThreeItemProps) {
    const [transform, setTransform] = useState("scale(1)");

    function handleMove(e: React.MouseEvent<HTMLDivElement>) {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const midX = rect.width / 2;
        const midY = rect.height / 2;

        const rotateX = ((y - midY) / midY) * 10;   // reversed
        const rotateY = ((x - midX) / midX) * -10;  // reversed

        setTransform(`scale(1.03) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);

        // glare position
        el.style.setProperty("--glare-x", `${x}px`);
        el.style.setProperty("--glare-y", `${y}px`);

        // stronger glare intensity
        const intensity = Math.abs(rotateX) + Math.abs(rotateY);
        const opacity = Math.min(intensity / 20, 0.75); // stronger cap
        el.style.setProperty("--glare-opacity", opacity.toString());
    }

    function handleLeave(e: React.MouseEvent<HTMLDivElement>) {
        const el = e.currentTarget;
        setTransform("scale(1) rotateX(0deg) rotateY(0deg)");
        el.style.setProperty("--glare-opacity", "0");
    }
    
    return(
        <div 
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ transform }}
            className={`tilt-card ${bgImg} ${bg} border border-transparent bg-no-repeat bg-bottom aspect-7/8
                        px-9 pt-10 rounded-[15px]
                        transition-transform duration-300 ease-out
                        hover:border-[#7b7b7c]`}
        >
            <h4 className="font-bold text-[34px] text-base/8">{text}</h4>
        </div>
    );
}