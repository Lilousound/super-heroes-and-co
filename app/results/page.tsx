'use client'
import { useContext } from 'react'
import { SurveyContext } from '../context/SurveyContext'

function Results() {
  const { answers, saveAnswers } = useContext(SurveyContext)
  console.log(answers)
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <p className="text-center font-bold text-2xl">📊 Results Page 📋</p>
      <p className="text-center w-32">
        {Object.entries(answers).map(([question, answer]) => (
          <div key={question}>
            <strong>{question}:</strong> {answer.toString()}
          </div>
        ))}
      </p>
    </div>
  )
}

export default Results
