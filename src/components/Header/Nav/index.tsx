export function Nav() {
  return (
    <nav className="w-[25%]">
      <ul className="flex flex-row justify-between">
        <li className="hover:bg-red-400 duration-700 cursor-pointer p-2 rounded-md">Home</li>
        <li className="hover:bg-red-400 duration-700 cursor-pointer p-2 rounded-md">Contato</li>
        <li className="hover:bg-red-400 duration-700 cursor-pointer p-2 rounded-md">Dados</li>
      </ul>
    </nav>
  )
}