

interface HeadingTextPropsType {
  styles: string
  children: React.ReactNode
}

const HeadingText:React.FC<HeadingTextPropsType> = ({ styles, children }) => {
  return (
    <h3 className={`font-bold leading-[1.2] dark:text-white text-[#091638] ${styles}`}>{children}</h3>
  )
}

export default HeadingText