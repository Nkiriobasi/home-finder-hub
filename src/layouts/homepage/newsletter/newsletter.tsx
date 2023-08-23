import Image from 'next/image'
import NewsletterImg from '../../../../public/newsletter-img.svg'
import HeadingText from '@/components/headingText/headingText'
import ParagraphText from '@/components/paragraphText/paragraphText'
import Button from '@/components/button/button'

const Newsletter = () => {
  return (
    <section className='w-full max-w-full flex bg-[#F3F3FA] dark:bg-inherit'>
        <div 
            className="max-w-[1287px] mx-auto w-full md:py-[80px] py-[50px] 
            sm:px-5 px-[14px] lg:pl-[50px] flex flex-col"
        >
            <div className="flex sm:flex-row flex-col items-center sm:justify-start justify-center gap-6 mx-auto">
                <div className="w-[30%]">
                    <Image src={NewsletterImg} alt='newsletter' priority />
                </div>

                <div className="flex flex-col sm:items-start items-center justify-center">
                    <span className="inline-block w-full sm:text-left text-center">
                        <HeadingText styles="mb-3 lg:text-[33px] md:text-[24px] text-[20px]">
                            Subscribe to newsletter
                        </HeadingText>
                    </span>

                    <span className="inline-block max-w-[679px] sm:text-left text-center">
                        <ParagraphText styles="mb-3 lg:text-[20px] sm:text-[16px] text-sm">
                            Get the latest news and interesting offers and real estate
                        </ParagraphText>
                    </span>

                    <div className="flex flex-auto">
                        <form className="max-w-[420px] w-full flex items-center flex-auto gap-3">
                            <input 
                                type="text"
                                id='email'
                                name='email' 
                                autoComplete='email'
                                placeholder="Your e-mail address" 
                                className="w-[70%] block border-2 border-[#DDDDDD] bg-inherit outline-none
                                placeholder:lg:text-base placeholder:text-sm sm:text-base text-sm text-black bg-white
                                py-[11px] px-[14px] rounded-lg focus:outline-none focus:border-[#1C3988] focus:ring-[#1C3988]" 
                            />

                            <Button 
                                text="Subscribe" 
                                styles="py-[13px] sm:px-[20px] px-[13px] max-w-full border-2 border-solid flex-auto 
                                border-[#1C3988] dark:border-white dark:text-white text-[#1C3988]" 
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter