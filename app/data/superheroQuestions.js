export const superheroQuestions = [
  {
    id: 1,
    question: 'What is the main challenge you need help with?',
    type: 'radio',
    options: [
      {
        id: 1,
        label: 'Saving the city from a villain',
        tags: ['combat', 'urgent'],
      },
      { id: 2, label: 'Finding a lost or hidden object', tags: ['stealth'] },
      { id: 3, label: 'Motivating a team', tags: ['leadership', 'teamwork'] },
      { id: 4, label: 'Solving a complex puzzle', tags: ['technology'] },
      { id: 5, label: 'Protecting someone', tags: ['combat', 'support'] },
      { id: 6, label: 'Other', tags: [] },
    ],
  },
  {
    id: 2,
    question: 'Which superpower is most important for your mission?',
    type: 'radio',
    options: [
      { id: 1, label: 'Super strength', tags: ['combat'] },
      { id: 2, label: 'Flight', tags: ['speed'] },
      { id: 3, label: 'Invisibility', tags: ['stealth'] },
      { id: 4, label: 'Telepathy', tags: ['support'] },
      { id: 5, label: 'Super speed', tags: ['speed'] },
      { id: 6, label: 'Healing', tags: ['support'] },
    ],
  },
  {
    id: 3,
    question: 'Do you need a hero with combat skills?',
    type: 'radio',
    options: [
      { id: 1, label: 'Yes', tags: ['combat'] },
      { id: 2, label: 'No', tags: ['support'] },
    ],
  },
  {
    id: 4,
    question: 'What kind of personality should your hero have?',
    type: 'radio',
    options: [
      { id: 1, label: 'Charismatic leader', tags: ['leadership', 'teamwork'] },
      { id: 2, label: 'Quiet and strategic', tags: ['stealth'] },
      { id: 3, label: 'Energetic and enthusiastic', tags: ['speed'] },
      { id: 4, label: 'Calm and wise', tags: ['experienced'] },
      { id: 5, label: 'Rebellious and bold', tags: ['solo'] },
    ],
  },
  {
    id: 5,
    question: 'Is teamwork important for your mission?',
    type: 'radio',
    options: [
      {
        id: 1,
        label: 'Yes, I need a hero who works well with others',
        tags: ['teamwork'],
      },
      { id: 2, label: 'No, a lone hero is fine', tags: ['solo'] },
    ],
  },
  {
    id: 6,
    question: 'What is your preferred hero experience level?',
    type: 'radio',
    options: [
      { id: 1, label: 'Rookie (new but eager)', tags: [] }, // Pas de tag spécifique
      {
        id: 2,
        label: 'Experienced (proven track record)',
        tags: ['experienced'],
      },
      {
        id: 3,
        label: 'Legendary (iconic and reliable)',
        tags: ['experienced'],
      },
    ],
  },
  {
    id: 7,
    question: 'Do you need a hero with technological skills?',
    type: 'radio',
    options: [
      { id: 1, label: 'Yes', tags: ['technology'] },
      { id: 2, label: 'No', tags: [] },
    ],
  },
  {
    id: 8,
    question: 'What is the urgency level of your mission?',
    type: 'radio',
    options: [
      { id: 1, label: 'Low (can wait a few days)', tags: [] },
      { id: 2, label: 'Medium (within 24 hours)', tags: [] },
      { id: 3, label: 'High (immediate action required)', tags: ['urgent'] },
    ],
  },
  {
    id: 9,
    question:
      'Do you prefer a hero with a secret identity or one who is publicly known?',
    type: 'radio',
    options: [
      { id: 1, label: 'Secret identity (discreet)', tags: ['stealth'] },
      { id: 2, label: 'Publicly known (inspiring)', tags: ['leadership'] },
      { id: 3, label: 'No preference', tags: [] },
    ],
  },
  {
    id: 10,
    question: 'How do you want to contact your hero?',
    type: 'radio',
    options: [
      { id: 1, label: 'By signal in the sky', tags: ['leadership'] }, // Public
      { id: 2, label: 'By encrypted message', tags: ['stealth'] }, // Discret
      { id: 3, label: 'In person at HQ', tags: ['teamwork'] }, // Collaboration
      { id: 4, label: 'Via a sidekick', tags: ['support'] }, // Soutien
      { id: 5, label: 'Other', tags: [] },
    ],
  },
]
