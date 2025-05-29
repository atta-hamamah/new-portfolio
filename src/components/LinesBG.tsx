import React from 'react'

export default function LinesBG() {
    const lines = [
        { color: '#B89B77', height: 'h-1/2' },
        { color: '#C4C4C4', height: 'h-full' },
        { color: '#34a853', height: 'h-1/2' },
        { color: '#6E6E6E', height: 'h-full' },
        { color: '#D5A6A7', height: 'h-1/2' },
        { color: '#4B4F6C', height: 'h-full' },
        { color: '#8C8C8C', height: 'h-1/2' },
        { color: '#e67e22', height: 'h-full' },
        { color: '#B0A59F', height: 'h-1/2' },
        { color: '#6E6E6E', height: 'h-full' },
        { color: '#1a73e8', height: 'h-1/2' },
        { color: '#8e44ad', height: 'h-full' },
        { color: '#f39c12', height: 'h-1/2' }
    ]

    return (
        <ul className="flex items-center justify-evenly absolute top-0 left-0 w-full h-full px-2 sm:px-4">
            {lines.map((line, index) => (
                <li
                    key={index}
                    style={{
                        boxShadow: `0px 5px 20px ${line.color}`,
                        backgroundColor: line.color
                    }}
                    className={`w-2 sm:w-3 md:w-4 ${line.height} rounded-md transition-all duration-300`}
                />
            ))}
        </ul>
    )
}