'use client'
import { createContext, useContext, useState } from 'react'
import { superheroQuestions } from '../data/superheroQuestions'

type SurveyContextType = {
  answers: Record<number, string> // { questionId: answer }
  tags: string[] // Liste des tags accumulés
  saveAnswers: (newAnswers: Record<number, string>) => void
}

const SurveyContext = createContext<SurveyContextType | undefined>(undefined)

export function SurveyProvider({ children }: { children: React.ReactNode }) {
  const [answers, setAnswers] = useState<Record<number, string>>({}) // initialise les réponses comme un objet vide
  const [tags, setTags] = useState<string[]>([]) // initialise les tags comme un tableau vide

  const saveAnswers = (newAnswers: Record<number, string>) => {
    // la fonction pour sauvegarder les réponses
    setAnswers((prev) => ({ ...prev, ...newAnswers })) // met à jour les réponses en fusionnant les nouvelles réponses avec les anciennes

    // Récupère les tags associés aux nouvelles réponses
    const newTags: string[] = []
    for (const questionId in newAnswers) {
      const question = superheroQuestions.find(
        (q) => q.id === parseInt(questionId),
      )
      const option = question?.options.find(
        (opt) => opt.label === newAnswers[questionId],
      )
      if (option?.tags) {
        newTags.push(...option.tags)
      }
    }

    // Met à jour les tags (sans doublons)
    setTags((prevTags) => {
      const updatedTags = [...prevTags, ...newTags]
      return [...new Set(updatedTags)] // Supprime les doublons
    })
  }

  return (
    <SurveyContext.Provider value={{ answers, tags, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  )
}

export function useSurvey() {
  const context = useContext(SurveyContext)
  if (!context)
    throw new Error('useSurvey doit être utilisé dans un SurveyProvider')
  return context
}
