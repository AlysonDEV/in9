import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export function App() {

  return (
    <div className="flex flex-col max-w-6xl md:mx-auto mx-20 ">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

