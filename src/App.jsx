import {Outlet} from "react-router-dom";
import {Footer, Header} from "./Components/index";

function App() {

  return (
    <>
      <div className="bg-black text-white max-w-screen min-h-screen flex flex-col overflow-hidden">
        <Header/>
        <main className="w-full p-5 mt-10 sm:mt-24 flex-1">
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
