'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import { useTheme } from '../../context/ThemeContext'
import ThemeToggleButton from '../ThemeToggleButton'

function Header() {
  const { theme } = useTheme()

  return (
    <div
      className={`flex items-center justify-between p-4 border-b border-red-600 border-solid pb-2 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <Link href="/home" className="pl-[20px] text-lg text-red-500">
        <Image src={logo} alt="Logo" width={120} height={120} />
      </Link>
      <h1 className="text-5xl font-bold text-red-600">SuperHeroes and Co.</h1>
      <div className="flex items-center justify-center gap-3">
        <nav className="p-8 flex items-center justify-center gap-3">
          <Link
            href="/home"
            className="pl-[20px] text-xl text-red-600 hover:text-orange-400  hover:scale-110"
          >
            Home
          </Link>
          <Link
            href="/survey/1"
            className="pl-[20px] text-xl text-red-600 hover:text-orange-400 hover:scale-110 "
          >
            Survey
          </Link>
          <Link
            href="/heroes"
            className="pl-[20px] text-xl text-red-600 hover:text-orange-400 hover:scale-110"
          >
            Heroes
          </Link>
        </nav>
        <ThemeToggleButton />
      </div>
    </div>
  )
}

export default Header
