'use client' // Obligatoire car on utilise des hooks
import { useState, useContext } from 'react'
import { useParams } from 'next/navigation' // Permet de récupérer les paramètres de l'URL
import { ButtonLink } from '../../components/ButtonLink'
import { superheroQuestions } from '../../data/superheroQuestions'
import { useSurvey } from '../../context/SurveyContext'

function Survey() {
  const { questionNumber } = useParams() // Récupère le numéro de la question depuis l'URL (ex: /survey/1 => questionNumber = 1)
  const questionNumberInt = parseInt(questionNumber) // Convertit le numéro de la question en entier pour pouvoir faire des calculs
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1 // Si on est à la première question, le numéro de la question précédente reste 1, sinon on soustrait 1
  const nextQuestionNumber = questionNumberInt + 1 // Le numéro de la question suivante est toujours le numéro actuel + 1
  const currentQuestion = superheroQuestions.find(
    (q) => q.id === questionNumberInt,
  ) // Trouve la question actuelle dans le tableau des questions en fonction de son ID

  const [answered, setAnswered] = useState({}) // State pour stocker les réponses de l'utilisateur, initialisé à un objet vide
  const [isAnswered, setIsAnswered] = useState(false) // State pour stocker les réponses de l'utilisateur et savoir si la question a été répondue
  const { answers, saveAnswers } = useSurvey()

  const handleAnswerChange = (questionId, value) => {
    setAnswered({ ...answered, [questionId]: value })
    setIsAnswered(true)
  } // Fonction pour mettre à jour les réponses de l'utilisateur, en paramètre l'ID de la question et la valeur de la réponse, et met à jour le state en créant un nouvel objet avec les réponses précédentes et la nouvelle réponse

  function saveReply(questionId, answer) {
    saveAnswers({ [questionId]: answer })
  }

  return (
    <div className="h-screen mt-10 px-4">
      <h1 className="text-center font-bold text-2xl">
        🦸 Super Heroes & Co Survey 🦹
      </h1>
      <h2 className="text-center font-bold text-xl mt-5">
        Question {questionNumberInt}: {currentQuestion?.question}
      </h2>
      <div className="flex flex-col items-center justify-center mt-10">
        {currentQuestion?.options.map((option) => (
          <label
            key={option.id}
            className="flex items-center gap-2 my-2 p-2 border border-gray-300 rounded-lg hover:bg-orange-50 cursor-pointer w-64 transition-colors"
          >
            <input
              type="radio"
              name={`question-${currentQuestion.id}`}
              value={option.label}
              checked={answered[currentQuestion.id] === option.label}
              onChange={() =>
                handleAnswerChange(currentQuestion.id, option.label)
              }
              className="h-4 w-4 accent-orange-600 focus:ring-orange-500"
              onClick={() => saveReply(currentQuestion.id, option.label)}
            />
            {option.label}
          </label>
        ))}
      </div>
      <div className="flex items-center justify-center gap-10 mt-10">
        <ButtonLink href={`/survey/${prevQuestionNumber}`}>Previous</ButtonLink>
        {questionNumberInt === 10 ? (
          <ButtonLink href="/results">Results</ButtonLink>
        ) : (
          <ButtonLink
            href={`/survey/${nextQuestionNumber}`}
            disabled={!isAnswered}
            className={
              isAnswered
                ? 'bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded'
                : 'bg-gray-300 text-gray-500 px-4 py-2 rounded cursor-not-allowed'
            }
          >
            Next
          </ButtonLink>
        )}
      </div>
    </div>
  )
}

export default Survey
