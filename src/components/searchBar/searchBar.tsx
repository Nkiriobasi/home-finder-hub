import React from 'react'
import LocationSearchInput from './locationSearchInput'
import Button from '../button/button'


const SearchBar = () => {
  return (
    <div className='max-w-full w-full bg-[#dddddd] dark:bg-[#1e1e1e] lg:p-5 sm:p-4 p-3 rounded-lg flex-auto flex items-center sm:space-x-5 space-x-3'>
      <LocationSearchInput />

      <span className="max-w-[150px] inline-block">
        <Button text="Search" styles="sm:p-[14px] p-[12px] max-w-full" />
      </span>
    </div>
  )
}

export default SearchBar