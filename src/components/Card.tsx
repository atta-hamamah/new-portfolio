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
        <main className=' '>
            <Link
                target='blank'
                href={link}
                className=' p-4 flex flex-wrap items-center justify-center'>
                <div
                    style={{
                        backgroundColor: color,
                        boxShadow: ` 0px 0px 10px ${color} `,
                    }}
                    className=' text-[#EAEAEA] rounded-xl hover:scale-[1.15] duration-300 p-4 text-8xl lg:text-[150px]'>

                    {icon}
                </div>
            </Link>
            <pre
                className=' mx-auto w-fit rounded-full text-base sm:text-lg font-semibold mt-4'>
                {`<${name}>`}
            </pre>
        </main >
    )
}
