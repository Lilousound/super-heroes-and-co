'use client' // Obligatoire car on utilise des hooks
import { useParams } from 'next/navigation' // Permet de récupérer les paramètres de l'URL
import { ButtonLink } from '../../components/ButtonLink'

function Survey() {
  const { questionNumber } = useParams() // Récupère le numéro de la question depuis l'URL (ex: /survey/1 => questionNumber = 1)
  const questionNumberInt = parseInt(questionNumber) // Convertit le numéro de la question en entier pour pouvoir faire des calculs
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1 // Si on est à la première question, le numéro de la question précédente reste 1, sinon on soustrait 1
  const nextQuestionNumber = questionNumberInt + 1 // Le numéro de la question suivante est toujours le numéro actuel + 1

  return (
    <div className="h-screen mt-40">
      <h1 className="text-center font-bold text-2xl">📝 Survey Page 📄</h1>
      <h2 className="text-center font-bold text-xl mt-5">
        Question {questionNumber}
      </h2>
      <div className="flex items-center justify-center gap-10 mt-10">
        <ButtonLink href={`/survey/${prevQuestionNumber}`}>Previous</ButtonLink>
        {questionNumberInt === 10 ? (
          <ButtonLink href="/results">Results</ButtonLink>
        ) : (
          <ButtonLink href={`/survey/${nextQuestionNumber}`}>Next</ButtonLink>
        )}
      </div>
    </div>
  )
}

export default Survey
