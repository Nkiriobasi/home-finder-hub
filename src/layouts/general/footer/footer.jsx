import Image from 'next/image'
import FooterLogo from '../../../../public/footer-logo.svg'

const Footer = () => {
  return (
    <footer className='w-full max-w-full flex bg-[#1C3988]'>
        <div className="max-w-[1287px] mx-auto w-full py-[60px] sm:px-5 px-[14px] flex flex-col">
            <div className="flex flex-col justify-start items-center">
                <Image src={FooterLogo} alt='logo' priority />
            </div>
        </div>
    </footer>
  )
}

export default Footer