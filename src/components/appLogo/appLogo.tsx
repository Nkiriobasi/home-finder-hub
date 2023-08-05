"use client"

import Image from "next/image"
import { useTheme } from "next-themes"

import logoDarkBlue from '../../../public/logo-dark-blue.svg'
import logoLightBlue from '../../../public/logo-light-blue.svg'


const AppLogo = () => {
    const { theme } = useTheme();

  return (
    <>
        <Image 
            src={theme == "dark" ? logoLightBlue : logoDarkBlue} 
            alt="App Logo" 
            priority
        />
    </>
  )
}

export default AppLogo