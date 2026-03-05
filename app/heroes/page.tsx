import Card from '../components/Card'

const superheroProfiles = [
  {
    name: 'Tony Stark',
    jobTitle: 'Iron Man - Engineer and Playboy Philanthropist',
  },
  {
    name: 'Peter Parker',
    jobTitle: 'Spider-Man - Friendly Neighborhood Hero',
  },
  {
    name: 'Diana Prince',
    jobTitle: 'Wonder Woman - Amazonian Warrior and Diplomat',
  },
]

function Heroes() {
  return (
    <div className="items-center justify-center h-screen mt-9">
      <h1 className="text-center font-bold text-3xl">
        Find your perfect SuperHero
      </h1>
      <h4 className="text-center text-gray-600 mb-6 mt-6">
        At Super Heroes & Co, we bring together the best profiles for you.
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 p-4 justify-center mx-auto max-w-4xl">
        {superheroProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Heroes
