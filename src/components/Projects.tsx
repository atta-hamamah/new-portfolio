import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import { FaRegWindowClose } from "react-icons/fa";
import { FaWpforms, FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6"
import { SiGmail } from "react-icons/si";

import { BsFillPersonLinesFill } from "react-icons/bs";
import Card from './Card';
import { BsShop } from "react-icons/bs";
import Link from 'next/link';

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
interface Props {
    colors: Colors,
    theme: 'dark' | 'light',
    showProjects: Dispatch<SetStateAction<boolean>>
}
interface Proj {
    name: string
    link: string
    icon: ReactNode
    color: string
}
interface Contact {
    icon: ReactNode
    color: string,
    link: string,
}
const projects: Proj[] = [
    {
        name: 'E-Commerce',
        link: 'https://newecomm.netlify.app/',
        icon: <BsShop />,
        color: '#4B4F6C',
    },
    {
        name: 'Form Designer',
        link: 'https://formdes-2024.netlify.app/',
        icon: <FaWpforms />,
        color: '#e67e22',
    },
    {
        name: 'Old Portfolio/Projects',
        link: 'https://old-port-up.netlify.app/',
        icon: <BsFillPersonLinesFill />,
        color: '#8e44ad',
    },
]

const contacts: Contact[] = [
    {
        icon: <FaLinkedin />,
        color: '#e67e22',
        link: 'https://www.linkedin.com/in/atta-hamamah-1407b1181/',
    },
    {
        icon: <FaSquareGithub />,
        color: '#4B4F6C',
        link: 'https://github.com/atta-hamamah',
    },
    {
        icon: <FaSquareXTwitter />,
        color: '#8e44ad',
        link: 'https://x.com/Atta_Hamama',
    },
]

export default function Projects({ showProjects, theme, colors }: Props) {
    return (
        <main
            style={{
                color: colors.text[theme],
                backgroundColor: colors.bg[theme],
                boxShadow: ` 0px 0px 10px #EAEAEA `
            }}
            className=' px-8 py-4 rotate origin-center tot text-4xl w-full h-full rounded-lg relative'>
            <span className=' absolute top-4 right-4 cursor-pointer hover:text-gray-400 duration-300'>
                <FaRegWindowClose
                    onClick={() => showProjects(false)}
                />
            </span>
            <section className=' w-full h-full'>
                <pre
                    style={{ color: colors.text[theme] }}
                    className=' py-6  font-semibold text-xl'>Work Samples:
                </pre>
                <div className=' border-b-2 border-gray-500 grid grid-cols-1 md:grid-cols-3 h-[67%] gap-4 overflow-y-auto items-center justify-evenly pb-4 '>
                    {
                        projects.map(proj => (
                            <Card
                                key={proj.name}
                                {...proj}
                            />
                        ))
                    }
                </div>
                <pre
                    style={{ color: colors.text[theme] }}
                    className=' font-semibold text-xl mt-4'>Contacts:
                </pre>
                    <div className=' flex w-full items-center flex-wrap justify-center gap-6 mt-8 pb-6 px-4'>
                        {
                            contacts.map(cont => (
                                <main
                                    className=' text-4xl rounded-md duration-200 '
                                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0px 0px 20px ${cont.color}`)}
                                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = ``)}
                                    key={cont.color} >
                                    <Link
                                        target='blank'
                                        href={cont.link}
                                    >
                                        {cont.icon}
                                    </Link>
                                </main>

                            ))
                        }
                        <div
                            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0px 0px 20px #B89B77 `)}
                            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = ``)}
                            className='  px-2 flex items-center justify-center gap-2 duration-200 rounded'>
                            <SiGmail className='  text-4xl flex items-center justify-center' />
                            <p className=' text-base sm:text-2xl font-semibold'>7atta3@gamil.com</p>
                        </div>
                    </div>
            </section>
        </main>
    )
}
