

interface ButtonPropsType {
  text: string
  styles?: string
}

const Button:React.FC<ButtonPropsType> = ({ text, styles }) => {
  return (
    <button 
      type="submit"
      className={`flex items-center justify-center rounded-lg 
      transition-all duration-100 hover:dark:opacity-60 hover:opacity-80 ${styles}`}
    >
      <span className="inline-block font-bold sm:text-sm text-xs">{text}</span>
    </button>
  )
}

export default Button