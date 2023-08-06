"use client"

import Link from "next/link"

interface HeaderLinkPropsType {
  text: string
}

const HeaderLink:React.FC<HeaderLinkPropsType> = ({ text }) => {
  return (
    <li className="py-2 px-4 mr-2">
      <Link 
        href="#" 
        className="dark:text-[header-text-dark-mode-color] text-[header-text-light-mode-color] 
        font-normal text-sm hover:opacity-60"
      >
        {text}
      </Link>
    </li>
  )
}

export default HeaderLink