'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const BoxesCore = ({ theme }: { theme: string }) => {
  const rows = new Array(50).fill(1);
  const cols = new Array(50).fill(1);
  const colors = theme === 'dark' ? ['#B89B77', '#C4C4C4', '#A89F91', '#6E6E6E', '#D5A6A7', '#4B4F6C', '#8C8C8C', '#EAEAEA', '#B0A59F', '#3A3B3E'] : ['#1a73e8', '#34a853', '#fbbc05', '#ea4335', '#00bfae', '#8e44ad', '#f39c12', '#d35400', '#2980b9', '#e67e22'];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <main className=" -z-10  absolute left-0 top-0 w-full h-full ">
      <div
        style={{
          transform: `skewY(14deg)  skewX(-48deg)   `,
        }}
        className={' absolute -top-[1000px] -left-[1000px]  flex w-[3000px] h-[3000px] z-0 '}>
        {rows.map((_, i) => (
          <motion.div
            key={`row` + i}
            className="w-64 h-44 ">
            {cols.map((_, j) => (
              <div
                key={`col` + j}
                className="w-64 h-44  duration-500  relative"
                style={{
                  backgroundColor: '#A89F91',
                  transition: 'background-color 0.5s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = getRandomColor())}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}></div>
            ))}
          </motion.div>
        ))}
      </div>
    </main>
  );
};
const Boxes = React.memo(BoxesCore);
export default Boxes;
