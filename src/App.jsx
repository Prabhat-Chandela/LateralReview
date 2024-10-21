import {Outlet} from "react-router-dom";
import {Footer, Header} from "./Components/index";

function App() {

  return (
    <>
      <div className=" bg-gradient-to-br from-black to-neutral-950 text-white max-w-screen min-h-screen flex flex-col overflow-hidden">
        <Header/>
        <main className="w-full  flex-1">
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
