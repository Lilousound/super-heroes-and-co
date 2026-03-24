'use client'
import { useContext } from 'react'
import { useSurvey } from '../context/SurveyContext'
import { superheroProfiles } from '../data/heroes'
import Card from '../components/Card'

function Results() {
  const { tags } = useSurvey()

  // Filtre les héros en fonction des tags de l'utilisateur
  const filteredHeroes = superheroProfiles
    .map((hero) => {
      // Compte le nombre de tags en commun
      const matchScore = hero.tags.filter((tag) => tags.includes(tag)).length
      return { ...hero, matchScore }
    })
    .sort((a, b) => b.matchScore - a.matchScore) // Trie par pertinence
    .slice(0, 3) // Prend uniquement les 3 premiers héros

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center my-8">
          The Super Hero you need:
        </h1>
        <div className="grid grid-cols-1 gap-6 mt-4">
          {filteredHeroes.map((hero, index) => (
            <div
              key={`${hero.name}-${index}`}
              className="mx-auto w-full max-w-md"
            >
              <Card
                name={hero.name}
                heroName={hero.heroName}
                jobTitle={hero.jobTitle}
                avatar={hero.avatar}
                matchScore={hero.matchScore} // Passe le score de correspondance
                totalTags={hero.tags.length} // Passe le nombre total de tags
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Results
