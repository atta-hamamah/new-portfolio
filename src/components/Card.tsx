import Link from 'next/link'
import React, { ReactNode } from 'react'

interface Props {
    name: string
    link: string
    icon: ReactNode
    color: string
}

export default function Card({ name, link, icon, color }: Props) {
    return (
        <main className="w-full max-w-xs mx-auto">
            <Link
                target="_blank"
                href={link}
                className="block p-2 sm:p-4 transition-all duration-300 hover:scale-40"
            >
                <div
                    style={{
                        backgroundColor: color,
                        boxShadow: `0px 0px 10px ${color}`,
                    }}
                    className="
                        text-[#EAEAEA] 
                        rounded-xl 
                        hover:scale-105 
                        active:scale-95
                        duration-300 
                        p-3 sm:p-4 md:p-6
                        text-9xl  md:text-7xl lg:text-8xl xl:text-9xl
                        flex items-center justify-center
                        aspect-square
                        min-h-[80px]
                        transition-all
                    "
                >
                    {icon}
                </div>
            </Link>
            <div className="mx-auto w-fit rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold mt-2 sm:mt-4 px-2 text-center">
                {`<${name}>`}
            </div>
        </main>
    )
}