"use client"

import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"


const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    
    return (
        <button
            onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
            className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all 
            duration-100 text-white dark:text-gray-800 p-2 sm:text-sm text-xs rounded-lg'
        >
            Mode
        </button>
    )
}

export default ThemeSwitcher