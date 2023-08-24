import Button from "@/components/button/button"
import DropDown from "@/components/dropDown/dropDown"


const SearchFilters = () => {
  return (
    <section className='w-full max-w-full flex bg-[#F3F3FA] dark:bg-inherit'>
        <div 
            className="max-w-[1287px] mx-auto w-full md:pt-[50px] pt-[34px] 
            pb-[50px] sm:px-5 px-[14px] flex flex-col"
        >
            <div className="w-full flex flex-col items-center justify-start border-b-2 border-[#DADAEE] border-solid">
                <div className="max-w-[544px] mx-auto mb-6 w-full">
                    <form className="w-full flex items-center flex-auto gap-3">
                        <input 
                            type="text"
                            id='keywordSearch'
                            name='keywordSearch' 
                            autoComplete='keywordSearch'
                            placeholder="Enter a keyword" 
                            className="w-[75%] block border-2 border-[#DDDDDD] bg-inherit outline-none
                            placeholder:lg:text-base placeholder:text-sm sm:text-base text-sm text-black bg-white
                            py-[11px] sm:px-[14px] px-[11px] rounded-lg focus:outline-none focus:border-[#1C3988] 
                            focus:ring-[#1C3988]" 
                        />

                        <Button 
                            text="Search" 
                            styles="py-[13px] sm:px-[20px] px-[13px] max-w-full border-2 border-solid flex-auto 
                            border-[#1C3988] bg-[#1C3988] text-white" 
                        />
                    </form>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-start">
                <div className="flex items-center gap-4 max-w-[1120px] mx-auto my-6 w-full">
                    <DropDown defaultValue={"Sale"} />
                    <DropDown defaultValue={"Select room flat"} />
                    <DropDown defaultValue={"Select location"} />
                    <DropDown defaultValue={"Most expensive"} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default SearchFilters