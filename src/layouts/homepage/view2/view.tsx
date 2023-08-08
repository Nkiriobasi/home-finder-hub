import Card from '@/components/card/card'
import HeadingText from '@/components/headingText/headingText'
import ParagraphText from '@/components/paragraphText/paragraphText'

import cardImg1 from '../../../../public/card-img1.svg'
import cardImg2 from '../../../../public/card-img2.png'
import cardImg3 from '../../../../public/card-img3.png'


const images = [
  {img: cardImg1},
  {img: cardImg2},
  {img: cardImg3},
] 

const View = () => {
  return (
    <section className='w-full max-w-full flex bg-[#F3F3FA] dark:bg-inherit'>
      <div className="w-full flex items-start">
        <div 
          className="max-w-[1287px] mx-auto w-full md:pb-[80px] pb-[50px] pt-[50px] sm:px-5 px-[14px] flex flex-col "
        >
          <div className='w-full flex flex-col items-start justify-start'>
            <span className="inline-block">
              <HeadingText styles="mb-5 lg:text-[44px] md:text-[34px] text-[24px] font-bold leading-[1.2] text-[#091638] dark:text-white">Top offers</HeadingText>
            </span>

            <span className="inline-block max-w-[611px]">
              <ParagraphText styles="mb-[50px] lg:text-[22px] sm:text-[16px] text-sm font-normal text-[#091638] dark:text-white leading-[1.4]">
                Fulfill your career dreams, enjoy all the achievements of the city center and luxury housing to the fullest.
              </ParagraphText>
            </span>
          </div>

          <div className="w-full flex items-center justify-center gap-5">
            {images.map((elem, index) => <Card key={index} img={elem.img} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default View