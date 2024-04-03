import {Outlet} from "react-router-dom";
import {Header} from "./Components/index";

function App() {

  return (
    <>
      <div className="bg-black text-white w-screen min-h-screen flex flex-col">
        <Header/>
        <main className="w-full p-5">
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default App
