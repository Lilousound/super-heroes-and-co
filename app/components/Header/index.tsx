import Link from 'next/link'

function Header() {
  return (
    <nav>
      <Link href="/pages/home">Accueil </Link>
      <Link href="/pages/survey">Questionnaire</Link>
    </nav>
  )
}

export default Header
