import Image from "next/image"

import AboutUsImg from '../../../../public/about-us-img.svg'
import HeadingText from "@/components/headingText/headingText"
import ParagraphText from "@/components/paragraphText/paragraphText"

const AboutUs = () => {
  return (
    <section className='w-full max-w-full flex'>
        <div className="w-full flex items-start">
            <div className="max-w-[1287px] mx-auto w-full md:pb-[80px] pb-[50px] lg:pt-[120px] sm:pt-[80px] pt-[50px] sm:px-5 px-[14px] flex flex-col">
                <div className="w-full flex md:flex-row flex-col items-center gap-8">
                    <div className="lg:w-[55%] md:w-[45%] w-full flex items-center">
                        <Image src={AboutUsImg} alt='/' className="w-full" priority />
                    </div>
                    <div className="lg:w-[45%] md:w-[55%] w-full">
                        <span className="block w-full">
                            <HeadingText styles="mb-5 lg:text-[44px] md:text-[34px] text-[24px]">About us</HeadingText>
                        </span>
                        <span className="block w-full">
                            <ParagraphText styles="lg:text-base text-sm">
                                We are a company that connects the world of real estate and finance. We provide a complete 
                                service for the sale, purchase or rental of real estate. Our advantage is more than 15 years 
                                of experience and soil in attractive locations in Slovakia with branches in Bratislava and Košice. 
                                We have a connection to all banks on the Slovak market, so we can solve everything under one roof. 
                                By constantly innovating our business activities, we move forward and we are able to offer truly 
                                above-standard services that set us apart from the competition.
                            </ParagraphText>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs