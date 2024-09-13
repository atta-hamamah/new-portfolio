import React, { Dispatch, SetStateAction } from 'react'
import { FaRegWindowClose } from "react-icons/fa";
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

export default function Projects({ showProjects, theme, colors }: Props) {
    return (
        <main
            style={{
                color: colors.text[theme],
                backgroundColor: colors.bg[theme],
                boxShadow: ` 0px 0px 10px #EAEAEA `
            }}
            className=' rotate origin-center tot text-4xl w-full h-full rounded-lg relative'>
            <span className=' absolute top-4 right-4 cursor-pointer hover:text-gray-400 duration-300'>
                <FaRegWindowClose
                    onClick={() => showProjects(false)}
                />
            </span>
        </main>
    )
}
