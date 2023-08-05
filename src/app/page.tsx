import AppLogo from "@/components/appLogo/appLogo";
import ThemeSwitcher from "@/components/themeSwitcher/themeSwitcher";


export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen flex-col">
      <AppLogo />
      <ThemeSwitcher />
    </main>
  )
}
