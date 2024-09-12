import React, { Dispatch, SetStateAction } from 'react'
import { FaRegWindowClose } from "react-icons/fa";

export default function Projects({ showProjects }: { showProjects: Dispatch<SetStateAction<boolean>> }) {
    return (
        <section className=' rotate origin-center tot text-6xl w-full h-full bg-gray-50 rounded-lg relative' >
            <span className=' absolute top-0 right-0'>
                <FaRegWindowClose
                    onClick={() => showProjects(false)}
                />
            </span>
            ddd
        </section>
    )
}
