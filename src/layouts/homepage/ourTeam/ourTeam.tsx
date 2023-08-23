import HeadingText from "@/components/headingText/headingText"
import ParagraphText from "@/components/paragraphText/paragraphText"
import TeamCard from "@/components/teamCard/teamCard"
import DavisCarder from '../../../../public/davis-carder.svg'
import MarenPress from '../../../../public/maren-press.svg'
import RandyRosser from '../../../../public/randy-rosser.svg'
import HaylieDonin from '../../../../public/haylie-donin.svg'
import MiracleBator from '../../../../public/miracle-bator.svg'


const OurTeam = () => {
  return (
    <section className='w-full max-w-full flex'>
      <div 
        className="max-w-[1287px] mx-auto w-full md:pb-[80px] pb-[50px] 
        pt-[25px] sm:px-5 px-[14px] flex flex-col"
      >
        <div className="grid md:grid-cols-3 xs:grid-cols-2 gap-5">
          <div className="max-w-full flex flex-col items-start justify-center">
            <div className="w-full relative flex flex-col items-center justify-center">
              <span className="inline-block w-full">
                <HeadingText styles="mb-5 lg:text-[44px] md:text-[34px] text-[24px]">
                  Our Team
                </HeadingText>
              </span>

              <span className="w-full inline-block">
                <ParagraphText styles="lg:text-[18px] md:text-[16px] text-sm">
                  We provide a complete service for the sale, purchase or rental of real estate. 
                  We have been operating in Madrid and Barcelona more than 15 years.
                </ParagraphText>
              </span>
            </div>
          </div>
          <TeamCard imgSrc={DavisCarder} name="Davis Carder" position="Super duper position" />
          <TeamCard imgSrc={MarenPress} name="Maren Press" position="Super duper position" />
          <TeamCard imgSrc={RandyRosser} name="Randy Rosser" position="Super duper position" />
          <TeamCard imgSrc={HaylieDonin} name="Haylie Donin" position="Super duper position" />
          <TeamCard imgSrc={MiracleBator} name="Miracle Bator" position="Super duper position" />
        </div>
      </div>
    </section>
  )
}

export default OurTeam