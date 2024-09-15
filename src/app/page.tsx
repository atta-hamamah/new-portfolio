'use client'
import Boxes from "@/components/BoxesBg"
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react"
import { CiLight, CiDark } from "react-icons/ci";
import Projects from "@/components/Projects";
import LinesBG from "@/components/LinesBG";
import { FaHandPointRight } from "react-icons/fa";
import { LiaBoxSolid } from "react-icons/lia";
import { MdWavingHand } from "react-icons/md";
import { FaFaceSmileBeam } from "react-icons/fa6";



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
    dark: '#EAEAEA',
    light: '#3A3B3E',
  },
  bg: {
    dark: '#3A3B3E',
    light: '#FAFAFA',
  }
}

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [projects, showProjects] = useState(false)
  const [boxClicked, setBoxClicked] = useState(false)


  return (
    <main className="">
      <section
        style={{ backgroundColor: colors.bg[theme] }}
        className=" -z-0 relative h-screen w-full overflow-hidden">
        <Boxes theme={theme} />

        <div
          style={{
            color: colors.text[theme],
            backgroundColor: colors.bg[theme],
            boxShadow: ` 0px 0px 10px ${colors.bg[theme]} `
          }}
          className="  text-5xl h-[112px] hidden sm:flex  items-center justify-center p-8 m-8 rounded-lg font-semibold w-fit "
        >
          <div className=" flex items-center justify-center gap-2 ">
            <FaFaceSmileBeam />
            <motion.div
              animate={{
                rotate: [0, -15, 10, -5, 0],
                transition: {
                  duration: 1,
                  repeat: 3,
                  repeatType: "loop",
                  ease: "easeInOut"
                }
              }}
              style={{
                display: 'inline-block',
                fontSize: '48px',
                transformOrigin: 'bottom left'
              }}
            >
              <MdWavingHand />
            </motion.div>
          </div>
          <pre
            style={{ color: colors.text[theme] }}
            className=" hidden xl:block text-center font-semibold ml-2 text-4xl 2xl:text-5xl ">
            Hi there!This Atta a front-end developer
          </pre>
        </div>

        <ul
          style={{
            color: colors.text[theme],
            backgroundColor: colors.bg[theme],
            boxShadow: ` 0px 0px 10px ${colors.bg[theme]} `
          }}
          className=" h-[112px] sm:absolute  right-0 top-0 p-8 m-8 shadow-sm rounded-lg font-semibold text-5xl  flex items-center justify-evenly gap-4">
          <motion.div
            className="mr-2 text-4xl"
            animate={!boxClicked ? { x: [0, 0, 20, 0] } : ''}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
            }}>
            <FaHandPointRight />
          </motion.div>
          <LiaBoxSolid
            className="cursor-pointer "
            onClick={() => { showProjects(true), setBoxClicked(true) }}
          />

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
              rounded text-5xl cursor-pointer `
            }>
            <CiDark className=' hover:rotate-12  duration-300 ' />
          </li>
        </ul>
        <pre
          style={{ color: colors.text[theme] }}
          className=" xl:hidden text-center font-semibold text-lg md:text-2xl ">
          Hi there!This Atta a front-end developer
        </pre>

        <section className="  h-[calc(100vh-230px)] w-full relative -z-20 flex items-center justify-center p-8 gap-2 lg:gap-14  ">
          <LinesBG />
          <div className=" relative w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 xl:w-56 xl:h-56 ">
            <Image
              width={999}
              height={999}
              alt='image'
              src='/face.png'
              className=" w-full h-full rounded-xl"
            />
          </div>
          <pre
            style={{
              color: colors.text[theme],
              transform: 'scaleY(3.5) ',
            }}
            className=" tracking-widest text-lg sm:text-xl md:text-3xl lg:text-4xl 2xl:text-6xl">
            Web Development Is Awesome.
          </pre>
        </section>
      </section>
      <section
        style={{
          transition: 'transform 0.5s ease',
          transform: projects ? 'rotateX(0deg) ' : 'rotateX(90deg)',
        }}
        className='  duration-300 top-0 left-0 absolute h-full w-full bg-black/30 p-16 '>
        <Projects colors={colors} theme={theme} showProjects={showProjects} />
      </section>
    </main>)
}
