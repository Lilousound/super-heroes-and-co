import Image, { StaticImageData } from 'next/image'
import DefaultPicture from '../assets/hero.jpg'

interface CardProps {
  label: string
  title: string
  picture: StaticImageData
}

function Card({ label, title, picture }: CardProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <span className="font-bold">{label}</span>
      <Image src={picture} alt="freelance" height={80} width={80} />
      <span>{title}</span>
    </div>
  )
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Card
