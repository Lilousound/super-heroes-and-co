'use client'

import { useTheme } from '../context/ThemeContext'
import Image from 'next/image'

interface CardProps {
  name: string
  heroName: string
  jobTitle: string
  avatar: string
  matchScore?: number // Prop optionnelle
  totalTags?: number // Prop optionnelle
}

function Card({
  name,
  heroName,
  jobTitle,
  avatar,
  matchScore,
  totalTags,
}: CardProps) {
  const { theme } = useTheme()
  const bgColor = theme === 'light' ? 'bg-[#fff5f5]' : 'bg-[#212B43]'
  const jobColor = theme === 'light' ? 'text-gray-600' : 'text-gray-400'
  const borderColor =
    theme === 'light' ? 'border-orange-100' : 'border-gray-700'

  return (
    <div className="grid grid-cols-1 gap-6 p-4">
      <div className="flex justify-center">
        <div
          className={`flex flex-col items-center p-6 rounded-xl shadow-md transform transition hover:scale-105 hover:shadow-lg  ${bgColor} w-full max-w-[340px] h-[320px] mx-auto`}
        >
          <span className="inline-block px-3 py-1 mb-3 text-xl font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
            {name}
          </span>

          <div
            className={`p-1 mb-4 border-2 ${borderColor} rounded-full shadow-sm`}
          >
            <Image
              src={avatar}
              alt={`${heroName}'s Avatar`}
              height={80}
              width={80}
              className="rounded-full object-cover"
            />
          </div>
          <p className="font-bold">{heroName}</p>
          <span className={`mt-2 text-base font-medium ${jobColor} italic`}>
            {jobTitle}
          </span>

          {/* Affichage conditionnel du match score */}
          {matchScore !== undefined && totalTags !== undefined && (
            <p className="mt-4 text-sm">
              <span className="text-gray-400 italic">Match: </span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-xl ">
                {Math.round((matchScore / totalTags) * 100)}%
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = {
  name: '',
  jobTitle: '',
  picture: '',
}

export default Card
