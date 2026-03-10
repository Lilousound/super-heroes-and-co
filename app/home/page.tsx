'use client'
import { ButtonLink } from '../components/ButtonLink'
import heroSurvey from '../assets/hero-survey.png'
import Image from 'next/image'
import { useTheme } from '../context/ThemeContext'

function HomePage() {
  const { theme } = useTheme()

  return (
    <div
      className={`container mx-auto h-screen mt-9 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
      } border-b border-gray-300 dark:border-gray-700 border-solid pb-2 rounded-lg flex items-start justify-around pt-24`}
    >
      {/* Bloc gauche : texte + bouton */}
      <div className="flex flex-col items-center max-w-2xl gap-4 mt-6">
        <p
          className={`text-left font-bold text-xl md:text-3xl ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}
        >
          Find the perfect superhero for any challenge! Super Heroes & Co
          matches you with the hero who has the powers, skills, and spirit to
          save the day!
        </p>
        <ButtonLink href="/survey/1" className=" text-xl mt-5">
          Survey
        </ButtonLink>
      </div>

      {/* Bloc droit : image */}
      <div>
        <Image
          src={heroSurvey}
          alt="Logo"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default HomePage
