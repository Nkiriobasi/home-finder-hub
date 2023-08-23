import React from 'react'
import ParagraphText from '../paragraphText/paragraphText'
import HeadingText from '../headingText/headingText';


interface ReferencesCardPropsType {
    name: string;
    address: string;
}


const ReferencesCard:React.FC<ReferencesCardPropsType> = ({ name, address }) => {
  return (
    <div className='max-w-full block bg-[#F3F3FA] dark:bg-[#1e1e1e]'>
        <div className="w-full relative flex flex-col items-start justify-start p-[18px] pt-6">
            <span className="flex items-start w-full">
                <span 
                    className="md:text-[65px] sm:text-[55px] text-[45px] 
                    text-[#091638] dark:text-white mt-[-24px] flex"
                >
                    “
                </span>

                <ParagraphText styles="lg:text-base text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Tristique in pellentesque ultrices et massa neque, convallis 
                    lorem. Erat proin in posuere dui accumsan lorem. Diam nunc 
                    scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst 
                    nunc placerat ultricies pretium.
                </ParagraphText>
            </span>
            
            <span className="inline-block">
                <HeadingText 
                    styles="lg:text-[20px] sm:text-[18px] text-base 
                    mb-1 text-[#141B2D] dark:text-white"
                >
                    {name}
                </HeadingText>
            </span>

            <span className="inline-block">
                <ParagraphText styles="md:text-sm text-[12px] text-[#141B2D] dark:text-white">
                    {address}
                </ParagraphText>
            </span>
        </div>
    </div>
  )
}

export default ReferencesCard