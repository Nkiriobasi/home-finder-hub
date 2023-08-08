import Image from "next/image"

import cardImg from '../../../public/card-img.svg'
import HeadingText from "../headingText/headingText"


const Card = () => {
  return (
    <div className="max-w-[350px] block relative bg-white dark:bg-[#1e1e1e] rounded shadow cursor-pointer">
        <div className="w-full">
            <Image src={cardImg} alt='/' className="w-full" priority />
        </div>

        <div className="mt-[10px] pt-[10px] p-5 flex flex-col">
            <span className="inline-block">
                <HeadingText styles="lg:text-[20px] sm:text-[16px] text-sm leading-[1.4] font-bold mb-6 text-[#141B2D] dark:text-white">
                    Large 4-room apartment with a beautiful terrace
                </HeadingText>
            </span>

            <span className="inline-block">
                <span className="font-bold inline-block md:text-[17px] text-sm text-[#1C3988] dark:text-white mb-2">320 000€</span>
            </span>

            <span className="inline-block">
                <span className="font-normal inline-block md:text-[17px] text-sm text-[#141B2D] dark:text-white">Barcelona IX.</span>
            </span>
        </div>
    </div>
  )
}

export default Card