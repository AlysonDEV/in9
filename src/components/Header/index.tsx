import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import logo from "../../assets/logo.webp";
import { Nav } from "./Nav";

export function Header() {
  return (
    <>
      <header
        className="flex 
      flex-row h-20 align-center justify-between 
      px-6 items-center" >
        <div className="flex items-center">
          <picture className="cursor-pointer ">
            <img src={logo} alt="logo marca do grupo IN9" className="w-12" />
          </picture>
          <div className="flex flex-col text-center">
            <h1 className="font-extrabold text-xl">
              Grupo In9 Prestige
            </h1>
            <span className="text-[0.92rem] mt-[-0.4rem]">
              Consultoria e Capacitação
            </span>
          </div>
        </div>

        <a
          href="https://wa.me/+5585998476785"
          target={"_blank"}
          className="hidden md:flex items-center gap-2  hover:text-secondary-800 transition-all delay-50"
        >
          <RiWhatsappFill size={28} />
          <span>+55 85 99847 6785</span>
        </a>

        <div className="flex items-center hover:text-secondary-800 transition-all delay-50">
          <a href="www.instagram.com" target={"_blank"}>
            <RiInstagramFill size={28} />
          </a>

        </div>

      </header>
      <Nav />
    </>
  )
}