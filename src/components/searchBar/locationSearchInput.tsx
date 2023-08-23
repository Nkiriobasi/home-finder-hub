import Image from "next/image"

import LocationIcon from '../../../public/location-icon.svg'


const LocationSearchInput = () => {
  return (
    <div className="flex-auto w-full bg-white rounded-lg flex">
      <span className="sm:p-[14px] p-[10px] pl-2 flex items-center">
        <Image src={LocationIcon} alt='location' priority />
      </span>

      <form className="w-full flex items-center flex-auto">
        <input 
          type="text" 
          id="search"
          name="search"
          className="w-full sm:p-[14px] p-[10px] pl-0 rounded-r-lg bg-inherit outline-none border-none 
          placeholder:lg:text-base placeholder:text-sm lg:text-base text-sm text-black" 
          placeholder="Search of location" 
        />
      </form>
    </div>
  )
}

export default LocationSearchInput