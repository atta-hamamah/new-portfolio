'use client'
import Boxes from "@/components/BoxesBg"
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react"
import { CiLight, CiDark } from "react-icons/ci";
import Projects from "@/components/Projects";

interface Colors {
  text: {
    dark: string,
    light: string,
  },
  bg: {
    dark: string,
    light: string,
  }
}
const colors: Colors = {
  text: {
    dark: '#EAEAEA',//light 
    light: '#3A3B3E',//dark
  },
  bg: {
    dark: '#3A3B3E',
    light: '#EAEAEA',
  }
}

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [projects, showProjects] = useState(false)


  return (
    <main className="">
      <section
        style={{ backgroundColor: colors.bg[theme] }}
        className=" -z-0 relative h-screen w-full overflow-hidden">
        <Boxes theme={theme} />
        <pre
          style={{
            color: colors.text[theme],
            backgroundColor: colors.bg[theme],
            boxShadow: ` 0px 0px 10px ${colors.bg[theme]} `
          }}
          className=" p-8 m-8 shadow-sm rounded-lg font-semibold text-5xl ">
          Hi there!
          <motion.div
            animate={{
              rotate: [0, 10, -10, 5, 0],
              transition: {
                duration: 1,
                repeat: 1,
                repeatType: "loop",
                ease: "easeInOut"
              }
            }}
            style={{
              display: 'inline-block',
              fontSize: '48px',
              transformOrigin: 'bottom right'
            }}
          >
            👋
          </motion.div>
          🙂
          This Atta a front-end developer
        </pre>
        <ul
          style={{
            color: colors.text[theme],
            backgroundColor: colors.bg[theme],
            boxShadow: ` 0px 0px 10px ${colors.bg[theme]} `
          }}
          className=" absolute right-0 top-0 p-8 m-8 shadow-sm rounded-lg font-semibold text-5xl  flex items-center gap-4">
          <li
            onClick={() => showProjects(true)}
            className=" cursor-pointer w-20 h-20 bg-red-400 ">

          </li>
          <li
            onClick={() => setTheme('light')}
            className={
              ` ${theme === 'light' ? 'shadow-yellow-500 shadow-sm ' : ''}
              rounded  text-5xl cursor-pointer `
            }>
            <CiLight className=' hover:rotate-12  duration-300 ' />
          </li>

          <li
            onClick={() => setTheme('dark')}
            className={
              ` ${theme === 'dark' ? 'shadow-yellow-500 shadow-sm ' : ''}
              rounded  text-5xl cursor-pointer `
            }>
            <CiDark className=' hover:rotate-12  duration-300 ' />
          </li>

        </ul>
        <div className=" relative w-[550px] h-[550px] mx-auto -z-20">
          <Image
            width={999}
            height={999}
            alt='image'
            src='/face.jpg'
            className=" w-full h-full rounded-full"
          />
        </div>
      </section>
      <main
        style={{
          transition: 'transform 0.5s ease',
          transform: projects ? 'rotateX(0deg) ' : 'rotateX(90deg)',
        }}
        className={`  duration-300 top-0 left-0 absolute h-full w-full bg-black/70 p-16 `}>
        <Projects showProjects={showProjects} />
      </main>
    </main>)
}
