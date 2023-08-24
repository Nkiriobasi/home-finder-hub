import Image from "next/image"

import HeadingText from "@/components/headingText/headingText"
import ParagraphText from "@/components/paragraphText/paragraphText"

import View1Image2 from '../../../../public/view1-image2.svg'
import SearchBar from "@/components/searchBar/searchBar"

const  Heading = () => {
  
  return (
    <section className="w-full max-w-full flex">
      <div className="w-full flex items-center">
        <div className="max-w-[1287px] mx-auto w-full md:pb-[100px] pb-[50px] pt-[50px] sm:px-5 px-[14px] flex">
          <div className="relative w-full flex md:flex-row flex-col-reverse items-center justify-center md:space-x-4 space-x-0">
            <div className="md:w-[50%] w-full block">
              <div className="w-full flex flex-col md:max-w-[545px] max-w-full">
                <div className="w-full relative mb-5 flex">
                  <HeadingText styles="xl:text-[64px] lg:text-[54px] md:text-[44px] text-[34px]">Modern living for everyone</HeadingText>
                </div>
                        
                <div className="w-full relative mb-5 flex">
                  <ParagraphText styles="lg:text-[22px] sm:text-[16px] text-sm">
                    We provide a complete service for the sale, purchase or rental of real estate. 
                    We have been operating in Madrid and Barcelona more than 15 years.
                  </ParagraphText>
                </div>
              </div>

              <SearchBar />
            </div>

            <div className="md:w-[50%] w-full block md:mb-0 mb-5">
              <div className="w-full flex flex-col">
                <Image src={View1Image2} alt='/' className="w-full" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Heading