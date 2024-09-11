"use client";
import React from "react";
import { motion } from "framer-motion";

export const BoxesCore = () => {
    const rows = new Array(150).fill(1);
    const cols = new Array(100).fill(1);
    const colors = [
        '#B89B77', // Champagne Gold
        '#C4C4C4', // Platinum
        '#A89F91', // Warm Taupe
        '#6E6E6E', // Charcoal Gray
        '#D5A6A7', // Rose Quartz
        '#4B4F6C', // Slate Blue
        '#8C8C8C', // Graphite
        '#EAEAEA', // Off-White
        '#B0A59F', // Soft Mocha
        '#3A3B3E', // Deep Charcoal
    ];

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <main className=" absolute left-0 top-0 w-full h-full ">
            <div
                style={{
                    transform: `skewY(14deg)  skewX(-48deg)   `,
                }}
                className={" absolute -top-[1000px] -left-[1000px]  flex w-[3000px] h-[3000px] z-0 "
                }
            >
                {rows.map((_, i) => (
                    <motion.div
                        key={`row` + i}
                        className="w-16 h-8  border-l  border-slate-700 relative"
                    >
                        {cols.map((_, j) => (
                            <motion.div
                                whileHover={{
                                    backgroundColor: `var(${getRandomColor()})`,
                                    boxShadow: "5px 5px 5px rgba(255, 255, 255, 0.6)",
                                    scale: 1.10,
                                }}
                                key={`col` + j}
                                className="w-16 h-8  border-r border-t border-slate-700 relative"
                            >
                            </motion.div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </main>

    );
};
const Boxes = React.memo(BoxesCore);
export default Boxes
