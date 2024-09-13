"use client";
import React from "react";
import { motion } from "framer-motion";

export const BoxesCore = ({ theme }: { theme: string }) => {
    const rows = new Array(150).fill(1);
    const cols = new Array(100).fill(1);
    const colors = theme === 'dark' ? [
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
    ] : [
        "#1a73e8", // royal blue
        "#34a853", // emerald green
        "#fbbc05", // golden yellow
        "#ea4335", // bright red
        "#00bfae", // teal
        "#8e44ad", // rich purple
        "#f39c12", // warm amber
        "#d35400", // burnt orange
        "#2980b9", // strong blue
        "#e67e22"  // deep tangerine
    ]

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <main className=" -z-10  absolute left-0 top-0 w-full h-full ">
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
                        className="w-24 h-12 "
                    >
                        {cols.map((_, j) => (
                            <div
                                key={`col` + j}
                                className='w-24 h-12  duration-500  relative'
                                style={{
                                    backgroundColor: '#A89F91',
                                    transition: 'background-color 0.5s'
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = getRandomColor())}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                            >
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </main>

    );
};
const Boxes = React.memo(BoxesCore);
export default Boxes
