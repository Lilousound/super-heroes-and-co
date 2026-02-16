import Link from 'next/link'

function Header() {
  return (
    <nav>
      <Link href="/pages/home" className="pl-[20px] text-lg text-indigo-500">
        Home
      </Link>
      <Link href="/pages/survey" className="pl-[20px] text-lg text-violet-600">
        Survey
      </Link>
      <Link href="/pages/heroes" className="pl-[20px] text-lg text-purple-700">
        Heroes
      </Link>
    </nav>
  )
}

export default Header
