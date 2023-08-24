"use client"

import { usePathname } from "next/navigation";
import HeaderLink from "../headerLink/headerLink"
import { HeaderLinkItems } from "./headerLinks.constant"

const HeaderLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {HeaderLinkItems.map(({name, href}, index) => {
        const isActive = pathname.startsWith(href)
                   
        return (
          <HeaderLink 
            key={index} 
            name={name} 
            href={href}
            classNames={`${isActive 
              ? 'text-[#1C3988]' 
              : 'hover:text-[#1C3988]'}`}
          />
        )
      })}
    </>
  )
}

export default HeaderLinks