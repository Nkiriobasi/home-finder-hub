import Image from "next/image"

import HeadingText from "../headingText/headingText"
import DavisCarder from '../../../public/davis-carder.svg'
import ParagraphText from "../paragraphText/paragraphText"

interface TeamCardPropsType {
    img?: any
}

const TeamCard:React.FC<TeamCardPropsType> = ({ img }) => {
  return (
    <div className="max-w-[350px] block bg-white dark:bg-[#1e1e1e] rounded-xl shadow cursor-pointer">
        <div className="w-full relative flex flex-col items-center p-6">
            <div className="max-w-[200px] flex items-center justify-center">
                <Image src={DavisCarder} alt='team member' className="w-full rounded-full" priority />
            </div>

            <div className="mt-[10px] flex flex-col text-center">
                <span className="inline-block">
                    <HeadingText styles="lg:text-[20px] sm:text-[16px] text-sm mb-1 text-[#141B2D] dark:text-white">
                        Davis Carder
                    </HeadingText>
                </span>

                <span className="inline-block">
                    <ParagraphText styles="md:text-base text-sm text-[#141B2D] dark:text-white">
                        Super duper position
                    </ParagraphText>
                </span>
            </div>
        </div>
    </div>
  )
}

export default TeamCard