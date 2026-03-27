import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from './components/Header'
import { ThemeProvider } from './context/ThemeContext'
import { SurveyProvider } from './context/SurveyContext'
import Footer from './components/Footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'SuperHeroes and Co.',
  description:
    "Discover your inner superhero with our interactive quiz! Answer fun questions and receive a personalized analysis of your superhero profile, along with hero recommendations and tips to unlock your heroic potential. Whether you're a fan of Marvel, DC, or other universes, our quiz is designed to reveal the unique traits that make you a true superhero. Ready to find out who you really are? Start the quiz and embark on a heroic adventure now!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <ThemeProvider>
          <Header />
          <SurveyProvider>{children}</SurveyProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
