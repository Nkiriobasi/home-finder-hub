"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import Link from "next/link"

import logoDarkBlue from '../../../public/logo-dark-blue.svg'
import logoLightBlue from '../../../public/logo-light-blue.svg'


const AppLogo = () => {
  const { theme } = useTheme();

  return (
    <>
      <Link href="/">
        <Image 
          src={theme == "dark" ? logoLightBlue : logoDarkBlue} 
          alt="App Logo" 
          priority
        />
      </Link>
    </>
  )
}

export default AppLogo