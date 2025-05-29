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
import { BsFileEarmarkPdf } from "react-icons/bs";

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
    dark: '#ffffff',
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
    <main className="relative">
      <section
        style={{ backgroundColor: colors.bg[theme] }}

        className="relative min-h-screen w-full overflow-hidden flex flex-col"
      >

        <section

          className="absolute mt-28 inset-0 z-0 w-full flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 md:p-8 gap-4 lg:gap-10 xl:gap-14"
        >
     
          <div className="absolute inset-0 -z-10">
            <LinesBG />
          </div>

          <div className="relative w-full max-w-xs  lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0">
            <Image
              width={500}
              height={500}
              alt='image'
              src='/face.jpg'
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          <p
            style={{
              color: colors.text[theme],
            }}
            className="relative tracking-wide text-center font-semibold lg:text-left  sm:text-lg lg:text-2xl max-w-md lg:max-w-lg xl:max-w-2xl sm:leading-relaxed"
          >
            Hi there, this is Atta a frontend developer, graduated from Al-azhar University in 2019,
            a full-time React/Next.js frontend developer since 2022, with a Proven track record of collaborating with cross-functional teams in fast-paced
            Scrum/Agile environments familiar with latest technologies and Web3/Blockchain development.
          </p>
        </section>

        <div className="absolute inset-0 z-10">
          <Boxes theme={theme} /> {/* Assuming Boxes handles its own hover transparency */}
        </div>


        <div
          className="relative z-20 flex flex-col sm:flex-row sm:justify-between items-center p-4 pb-0 sm:p-6 md:p-8 gap-4"
        >

          <div
            style={{
              color: colors.text[theme],
              backgroundColor: colors.bg[theme],
              boxShadow: ` 0px 0px 10px ${colors.bg[theme]} `
            }}
            className="flex items-center justify-center p-3 sm:p-4 md:p-6 rounded-lg font-semibold w-auto"
          >
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <FaFaceSmileBeam className="text-3xl sm:text-4xl md:text-5xl" />
              <motion.div
                animate={{
                  rotate: [0, -15, 10, -5, 0],
                  transition: { duration: 1, repeat: 3, repeatType: "loop", ease: "easeInOut" }
                }}
                style={{ display: 'inline-block', transformOrigin: 'bottom left' }}
                className="text-3xl sm:text-4xl md:text-5xl"
              >
                <MdWavingHand />
              </motion.div>
            </div>
            <pre
              style={{ color: colors.text[theme] }}
              className="hidden md:block text-center font-semibold ml-2 text-sm lg:text-base xl:text-lg 2xl:text-xl"
            >
              Hi there!, hover on the screen!
            </pre>
          </div>

          <ul
            style={{
              color: colors.text[theme],
              backgroundColor: colors.bg[theme],
              boxShadow: ` 0px 0px 10px ${colors.bg[theme]} `
            }}
            className="flex items-center justify-evenly gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 shadow-sm rounded-lg font-semibold"
          >
            <motion.div
              className="mr-1 sm:mr-2 text-2xl sm:text-3xl md:text-4xl"
              animate={!boxClicked ? { x: [0, 0, 10, 0, 15, 0] } : {}}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
              <FaHandPointRight />
            </motion.div>
            <LiaBoxSolid
              className="cursor-pointer text-3xl sm:text-4xl md:text-5xl"
              onClick={() => { showProjects(true); setBoxClicked(true); }}
            />
            <li
              onClick={() => setTheme('light')}
              className={` ${theme === 'light' ? 'shadow-yellow-500 shadow-sm ' : ''} rounded cursor-pointer text-3xl sm:text-4xl md:text-5xl`}
            >
              <CiLight className=' hover:rotate-12 duration-300 ' />
            </li>
            <li
              onClick={() => setTheme('dark')}
              className={` ${theme === 'dark' ? 'shadow-yellow-500 shadow-sm ' : ''} rounded cursor-pointer text-3xl sm:text-4xl md:text-5xl`}
            >
              <CiDark className=' hover:rotate-12 duration-300 ' />
            </li>
          </ul>
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: colors.text[theme],
              backgroundColor: colors.bg[theme],
              boxShadow: `0px 0px 10px ${colors.bg[theme]}`
            }}
            className="fixed flex -z-10 flex-col items-center w-16 h-16 sm:w-24 sm:h-24  justify-center bottom-2 md:bottom-6 right-7 z-50 p-4 rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300"
            title="View Resume"
          >
            <BsFileEarmarkPdf className="text-xl md:text-4xl" />
            <p className="text-xs font-semibold mt-1 md:mt-2">Resume</p>
          </a>
        </div>
        
        <p
          style={{ color: colors.text[theme] }}
          className="relative z-20 md:hidden text-center tracking-widest font-semibold text-sm sm:text-base p-2"
        >
          Hi there! Hover the screen!
        </p>
      </section>
      <section
        style={{
          transition: 'transform 0.5s ease, opacity 0.5s ease',
          transform: projects ? 'rotateX(0deg)' : 'rotateX(90deg)',
          opacity: projects ? 1 : 0,
          pointerEvents: projects ? 'auto' : 'none',
          backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)',
        }}
        className='fixed inset-0 z-30 p-6 sm:p-8 md:p-12 overflow-y-auto'
      >
        <Projects colors={colors} theme={theme} showProjects={showProjects} />
      </section>


    </main>
  )
}