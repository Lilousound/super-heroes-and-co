'use client'
import { createContext, useState } from 'react'

type SurveyContextType = {
  answers: Record<string, unknown>
  saveAnswers: (newAnswers: Record<string, unknown>) => void
}

export const SurveyContext = createContext<SurveyContextType | null>(null)

export const SurveyProvider = ({ children }: { children: React.ReactNode }) => {
  const [answers, setAnswers] = useState({})
  const saveAnswers = (newAnswers: Record<string, unknown>) => {
    setAnswers({ ...answers, ...newAnswers })
  }

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  )
}
