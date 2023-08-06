"use client"

import HeaderLink from "../headerLink/headerLink"
import { HeaderLinkItems } from "./headerLinks.constant"

const HeaderLinks = () => {
    // const pathname = usePathname();

  return (
    <>
        {HeaderLinkItems.map((item: string) => {
            // const isActive = pathname.startsWith(href)
                   
            return (
                <HeaderLink key={item} text={item} />
            )
        })}
    </>
  )
}

export default HeaderLinks