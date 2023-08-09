

interface ParagraphTextPropsType {
  styles: string
  children: React.ReactNode
}

const ParagraphText:React.FC<ParagraphTextPropsType> = ({ styles, children }) => {
  return (
    <p className={`font-normal leading-[1.5] dark:text-white text-[#091638] ${styles}`}>{children}</p>
  )
}

export default ParagraphText