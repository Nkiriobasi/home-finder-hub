import Image from "next/image"

import HeadingText from "../headingText/headingText"
import ParagraphText from "../paragraphText/paragraphText"

interface TeamCardPropsType {
    imgSrc: any;
    name: string;
    position: string;
}

const TeamCard:React.FC<TeamCardPropsType> = ({ imgSrc, name, position }) => {
  return (
    <div className="max-w-full block bg-white dark:bg-[#1e1e1e] rounded-xl shadow">
        <div className="w-full relative flex flex-col items-center p-6">
            <div className="max-w-[200px] flex items-center justify-center">
                <Image 
                    src={imgSrc} 
                    alt='team member' 
                    className="w-full rounded-full" 
                    priority 
                />
            </div>

            <div className="mt-[10px] flex flex-col text-center">
                <span className="inline-block">
                    <HeadingText styles="lg:text-[20px] sm:text-[18px] text-base mb-1 text-[#141B2D] dark:text-white">
                        {name}
                    </HeadingText>
                </span>

                <span className="inline-block">
                    <ParagraphText styles="text-sm text-[#141B2D] dark:text-white">
                        {position}
                    </ParagraphText>
                </span>
            </div>
        </div>
    </div>
  )
}

export default TeamCard