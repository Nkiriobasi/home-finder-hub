"use client"

import Link from "next/link"

interface HeaderLinkPropsType {
  name: string
  href: string
  classNames: string
}

const HeaderLink:React.FC<HeaderLinkPropsType> = ({ name, href, classNames }) => {
  return (
    <li className="py-2 px-4 mr-2">
      <Link 
        href={href} 
        className={`dark:text-[header-text-dark-mode-color] text-[header-text-light-mode-color] 
        font-normal text-sm hover:opacity-60 ${classNames ? classNames : ''}`}
      >
        {name}
      </Link>
    </li>
  )
}

export default HeaderLink