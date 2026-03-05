import Link from 'next/link' // Permet de créer des liens entre les pages sans recharger la page (client-side navigation)
import React, { ReactNode } from 'react' // Import de React et du type ReactNode pour typer les enfants du composant

interface ButtonLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function ButtonLink({
  href,
  children,
  className = '',
}: ButtonLinkProps) {
  const baseClasses = 'px-7 py-2 rounded-md transition-all focus:outline-none'
  const variantClasses =
    'bg-orange-600 text-white shadow-lg hover:bg-orange-500 hover:shadow-xl'
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </Link>
  )
}
