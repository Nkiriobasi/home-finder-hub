

interface HeadingTextPropsType {
  styles: string
  children: React.ReactNode
}

const HeadingText:React.FC<HeadingTextPropsType> = ({ styles, children }) => {
  return (
    <h3 className={styles}>{children}</h3>
  )
}

export default HeadingText