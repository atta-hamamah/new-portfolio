import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atta Hamamah - Resume',
  description: 'Frontend Developer Resume - React/Next.js and Web3 Development',
}

export default function ResumePage() {
  return (
    <iframe
      src="/atta new cv.pdf"
      className="w-full h-screen"
      title="Atta Hamamah - Resume"
    />
  )
} 