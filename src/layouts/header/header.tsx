import AppLogo from "@/components/appLogo/appLogo"
import Button from "@/components/button/button"
import HeaderLinks from "@/components/headerLinks/headerLinks"
import ThemeSwitcher from "@/components/themeSwitcher/themeSwitcher"


const Header = () => {
  return (
    <header className="sticky top-0 bg-inherit">
      <div className="w-full py-3 md:px-6 px-4 max-w-full">
        <div className="relative flex items-center">
          {/* App Logo */}
          <div className="w-auto flex items-center mr-10">
            <div className="inline-flex items-center">
              <AppLogo />
            </div>
          </div>

          <div className="w-full flex flex-row items-center justify-between">
            {/* Header Links */}
            <div className="block">
              <ul className="flex items-center">
                <HeaderLinks />
              </ul>
            </div>

            {/* Header Button */}
            <div className="flex items-center">
              <span className="inline-block mr-4">
                <ThemeSwitcher />
              </span>
              
              <Button text="Contact us" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header