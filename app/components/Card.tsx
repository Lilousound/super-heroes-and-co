import Image from 'next/image'

interface CardProps {
  label: string
  title: string
  avatar: string
}

function Card({ label, title, avatar }: CardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6  rounded-xl">
      <div className="flex flex-col items-center p-6 rounded-xl shadow-md transform transition hover:scale-105 hover:shadow-lg bg-[#fff5f5] w-[300px] h-[300px]">
        <span className="inline-block px-3 py-1 mb-3 text-xl font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
          {title}
        </span>
        <div className="p-1 mb-4 border-2 border-orange-100 rounded-full shadow-sm">
          <Image
            src={avatar}
            alt="Hero's Avatar"
            height={80}
            width={80}
            className="rounded-full object-cover"
          />
        </div>
        <span className="mt-2 text-m font-semibold text-gray-800">{label}</span>
      </div>
    </div>
  )
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: '',
}

export default Card
