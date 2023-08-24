import HeadingText from "@/components/headingText/headingText"
import ParagraphText from "@/components/paragraphText/paragraphText"
import ReferencesCard from "@/components/referencesCard/referencesCard"


const References = () => {
  return (
    <section className="w-full max-w-full flex">
        <div 
            className="max-w-[1287px] mx-auto w-full md:pb-[80px] pb-[50px] 
            pt-[25px] sm:px-5 px-[14px] flex flex-col"
        >
                <div>
                    <span className="inline-block w-full">
                        <HeadingText styles="mb-5 lg:text-[44px] md:text-[34px] text-[24px]">
                            References
                        </HeadingText>
                    </span>

                    <span className="w-full inline-block max-w-[611px]">
                        <ParagraphText styles="lg:text-[18px] md:text-[16px] text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Purus rutrum donec ultricies cras id ac.
                        </ParagraphText>
                    </span>

                    <div className="mt-7 w-full flex sm:flex-row flex-col items-center justify-center gap-5">
                        <ReferencesCard 
                            name="Emerson Aminoff" 
                            address="3 bedroom apartmentt in Madrid" 
                        />
                        <ReferencesCard 
                            name="Jocelyn Stanton" 
                            address="2 bedroom apartmentt in Barcelona" 
                        />
                    </div>
                </div>
            </div>
    </section>
  )
}

export default References