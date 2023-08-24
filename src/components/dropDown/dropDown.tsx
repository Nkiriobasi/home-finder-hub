"use client"

import React, { useState } from "react";

interface IMyProps {
    defaultValue: string
} 

const DropDown: React.FC<IMyProps> = ({defaultValue}) => {
    const [dropdown, setdropdown] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownList = ["Tesla", "Volvo", "Mercedes", "Toyota"];

    const dropdownListClick = (index: React.SetStateAction<number>) => {
        setdropdown(index);
    };
  
  return(
  
    <>        
        <div className="max-w-[262px] w-full relative">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                id="dropdownMenuButton" 
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                type="button"
                className={`font-medium text-sm p-[14px] text-center 
                inline-flex rounded-lg bg-white items-center justify-between 
                w-full bg-inherit text-gray-700 dark:text-black border-2 border-solid 
                ${isOpen ? 'border-[#1C3988]' : 'border-[#DDDDDD]'}`}
            >
                {/* {dropdownList[dropdown]} */}
                {defaultValue} <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg>
            </button>
       
            <div 
                id="dropdownHover" 
                className={`w-full z-10 bg-white ${isOpen ? 'block' : 'hidden'}
                divide-y divide-gray-100 rounded-lg shadow absolute top-[52px]`}
            >
                <ul 
                    className="py-2 text-sm text-gray-700 dark:text-black rounded-lg" 
                    aria-labelledby="dropdownMenuButton"
                >
                    {dropdownList.map((value, index) => {
                        return (
                            <>
                                <a
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    href="#"
                                    onClick={() => dropdownListClick(index)}
                                    key={index}
                                >
                                    {value}
                                </a>
                            </>
                        );
                    })}
                </ul>
            </div>
        </div>
    </>
  )
  
}

export default DropDown;