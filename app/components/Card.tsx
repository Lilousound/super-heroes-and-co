import Image, { StaticImageData } from 'next/image'
import DefaultPicture from '../assets/hero.png'

interface CardProps {
  label: string
  title: string
  picture: StaticImageData
}

function Card({ label, title, picture }: CardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6  rounded-xl">
      <div className="flex flex-col items-center p-6 rounded-xl shadow-md transform transition hover:scale-105 hover:shadow-lg bg-[#fff5f5] w-[300px] h-[300px]">
        <span className="inline-block px-3 py-1 mb-3 text-sm font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
          {label}
        </span>
        <div className="p-1 mb-4 border-2 border-orange-100 rounded-full shadow-sm">
          <Image
            src={picture}
            alt="freelance"
            height={80}
            width={80}
            className="rounded-full object-cover"
          />
        </div>
        <span className="mt-2 text-xl font-semibold text-gray-800">
          {title}
        </span>
      </div>
    </div>
  )
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Card
