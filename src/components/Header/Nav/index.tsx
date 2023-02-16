import { useState } from "react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Meu Menu</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 3a3 3 0 013-3h14a3 3 0 013 3v1a3 3 0 01-3 3H3a3 3 0 01-3-3V3zm0 7a3 3 0 013-3h14a3 3 0 013 3v1a3 3 0 01-3 3H3a3 3 0 01-3-3v-1zm0 7a3 3 0 013-3h14a3 3 0 013 3v1a3 3 0 01-3 3H3a3 3 0 01-3-3v-1z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-full' : 'max-h-0'
          }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Página Inicial
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Sobre
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
