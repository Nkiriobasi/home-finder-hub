

interface ButtonPropsType {
  text: string
  styles?: string
}

const Button:React.FC<ButtonPropsType> = ({ text, styles }) => {
  return (
    <button 
      className={`bg-[#1C3988] flex items-center justify-center rounded-lg 
      transition-all duration-100 text-[#F3F3FA] hover:dark:opacity-60 hover:opacity-80 ${styles}`}
    >
      <span className="inline-block font-bold sm:text-sm text-xs">{text}</span>
    </button>
  )
}

export default Button