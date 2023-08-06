import { ReactNode } from "react"


interface ButtonPropsType {
    icon?: ReactNode
    text: string
}

const Button:React.FC<ButtonPropsType> = ({ text, icon }) => {
  return (
    <button 
        className="dark:bg-[#F3F3FA] bg-[#1C3988] py-2 px-4 flex items-center justify-center rounded-lg 
        transition-all duration-100 dark:text-[#1C3988] text-[#F3F3FA] hover:dark:opacity-60 hover:opacity-80"
    >
        {icon && <span className="inline-block mr-2">{icon}</span>}
        <span className="inline-block font-bold sm:text-sm text-xs">{text}</span>
    </button>
  )
}

export default Button