import React, { useState } from "react";


const DropDown = () => {
    const [dropdown, setdropdown] = useState(0);
    const dropdownList = ["Tesla", "Volvo", "Mercedes"];

    const dropdownListClick = (index: React.SetStateAction<number>) => {
        setdropdown(index);
    };
  
  return(
  
    <>
        {/* <div className="max-w-[205px] bg-white">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                {dropdownList[dropdown]}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {dropdownList.map((value, index) => {
                    return (
                        <>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={() => dropdownListClick(index)}
                                key={index}
                            >
                                {value}
                            </a>
                        </>
                    );
                })}
            </div>
        </div> */}
        
        <div className="max-w-[205px] bg-white rounded-lg">
            <button 
                id="dropdownHoverButton" 
                data-dropdown-toggle="dropdownHover" 
                data-dropdown-trigger="hover"  
                type="button"
                className="font-medium rounded-lg text-sm p-[14px] text-center inline-flex items-center justify-between w-full bg-inherit text-black"
            >
                Property type <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg>
            </button>
       
            <div id="dropdownHover" className="w-full z-10 bg-white hidden divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
  
}

export default DropDown;