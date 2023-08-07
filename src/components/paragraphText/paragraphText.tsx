

interface ParagraphTextPropsType {
  styles: string
  children: React.ReactNode
}

const ParagraphText:React.FC<ParagraphTextPropsType> = ({ styles, children }) => {
  return (
    <p className={styles}>{children}</p>
  )
}

export default ParagraphText