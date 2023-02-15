import logo from "../../assets/logo.webp";
import { Nav } from "./Nav";

export function Header() {
  return (
    <header
      className="flex 
      flex-row h-20 align-center justify-between 
      px-6 items-center" >
      <picture className="cursor-pointer ">
        <img src={logo} alt="logo marca do grupo IN9" className="w-12" />
      </picture>
      <Nav />
    </header>
  )
}