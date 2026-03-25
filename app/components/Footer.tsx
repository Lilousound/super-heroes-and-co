'use client'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4">
        {/* Partie supérieure */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* Liens de navigation */}
          <div className="flex gap-6 mb-4 md:mb-0">
            <a
              href="/"
              className="font-semibold hover:text-orange-500 transition-colors"
            >
              SuperHeroes and Co.
            </a>
            <div className="group relative inline-block">
              <a href="" className="hover:text-orange-500 transition-colors">
                About
              </a>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                I created this app to practice React, Next.js, TypeScript, and
                Tailwind CSS.
              </span>
            </div>
            <a
              href="/heroes"
              className="hover:text-orange-500 transition-colors"
            >
              Heroes
            </a>
          </div>

          {/* Réseaux sociaux avec tooltips */}
          <div className="flex gap-4">
            <div className="group relative">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src="/socials/herobook.png"
                  alt="HeroBook"
                  width={40}
                  height={40}
                />
              </a>

              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                HeroBook
              </span>
            </div>

            <div className="group relative">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src="/socials/instahero.png"
                  alt="InstaHero"
                  width={40}
                  height={40}
                />
              </a>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                InstaHero
              </span>
            </div>
          </div>
        </div>

        {/* Partie inférieure */}
        <div className="text-center  text-sm border-t border-gray-200 dark:border-gray-700 pt-4">
          <p>
            Created by{' '}
            <a
              href="https://aurelieraout.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              Aurélie Raout
            </a>{' '}
            • Inspired by Marvel/DC
          </p>
          <p className="mt-1">
            &copy; {currentYear} SuperHeroes and Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
