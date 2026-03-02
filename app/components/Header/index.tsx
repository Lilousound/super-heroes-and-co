import Link from 'next/link'

function Header() {
  return (
    <nav>
      <Link href="/home" className="pl-[20px] text-lg text-indigo-500">
        Home
      </Link>
      <Link href="/survey/1" className="pl-[20px] text-lg text-violet-600">
        Survey
      </Link>
      <Link href="/heroes" className="pl-[20px] text-lg text-purple-700">
        Heroes
      </Link>
    </nav>
  )
}

export default Header
