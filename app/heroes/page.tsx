import Card from '../components/Card'

const superheroProfiles = [
  {
    name: 'Tony Stark',
    jobTitle: 'Iron Man / Engineer and Playboy Philanthropist',
  },
  {
    name: 'Peter Parker',
    jobTitle: 'Spider-Man / Friendly Neighborhood Hero',
  },
  {
    name: 'Diana Prince',
    jobTitle: 'Wonder Woman / Amazonian Warrior and Diplomat',
  },
]

function Heroes() {
  return (
    <div className="items-center justify-center h-screen mt-9">
      <h1 className="text-center font-bold text-2xl">Heroes 🦸🏻‍♀️ - 🦸🏼 - 🦸‍♂️</h1>
      {superheroProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          title={profile.name}
        />
      ))}
    </div>
  )
}

export default Heroes
