export default function Button({ children, className = '' }) {
  const baseClasses = 'px-5 py-2 rounded-md transition-all focus:outline-none'
  const variantClasses =
    'bg-violet-600 text-white shadow-lg hover:bg-violet-700 hover:shadow-xl'
  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  )
}
