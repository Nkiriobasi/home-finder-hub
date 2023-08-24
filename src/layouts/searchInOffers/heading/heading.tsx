import HeadingText from '@/components/headingText/headingText'
import ParagraphText from '@/components/paragraphText/paragraphText'

const Heading = () => {
  return (
    <section className='w-full max-w-full flex'>
        <div 
            className="max-w-[1287px] mx-auto w-full md:pt-[80px] pt-[50px] 
            pb-[50px] sm:px-5 px-[14px] flex flex-col"
        >
            <div className="flex flex-col items-center justify-start w-full">
                <span className="inline-block text-center">
                    <HeadingText 
                        styles="text-[#141B2D] mb-4 lg:text-[44px] 
                        md:text-[34px] text-[24px] tracking-tight"
                    >
                        Search for an offer
                    </HeadingText>
                </span>

                <span className="inline-block text-center">
                    <ParagraphText styles="lg:text-[22px] sm:text-[16px] text-sm tracking-tight">
                        Choose from the most advantageous offers
                    </ParagraphText>
                </span>
            </div>
        </div>
    </section>
  )
}

export default Heading