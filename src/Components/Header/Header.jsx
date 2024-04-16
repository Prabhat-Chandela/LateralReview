import { NavLink } from "react-router-dom";
import { Home, BookOpen, Newspaper, HandPlatter, SquareUser } from "lucide-react";

function Header() {
  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={20} />
    },
    {
      name: "Magazines",
      path: "/magazines",
      icon: <BookOpen size={20} />
    },
    {
      name: "Blogs",
      path: "/blogs",
      icon: <Newspaper size={20} />
    },
    {
      name: "Services",
      path: "/services",
      icon: <HandPlatter size={20} />
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <SquareUser size={20} />
    },

  ]


  return (
    <div className="w-full bg-black fixed top-0 left-0 right-0 z-30 shadow-[0px_-2px_15px_rgba(221,_221,_221,_1)]">
      <nav className="flex items-center justify-between p-3 sm:p-6 ">
        <section>
          <div>
            <div className=" w-[70%] sm:w-[30%] h-10">
              <img className="w-full h-full" src="src/assets/images/Lateral-Review-Logo-withOut-Tagline.svg" alt="logo" />
            </div>
          </div>
        </section>

        <section>
          <div>
            <ul className="flex items-center gap-5 sm:gap-7 ">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink className={({ isActive }) => `flex font-robotoMedium items-center justify-center gap-2 text-xs text-red-600 transition duration-150 ease-out  ${isActive ? " bg-gradient-to-r text-center text-white from-red-700 to-red-500 p-1 sm:px-3 sm:py-2 rounded-md sm:rounded-lg" : "bg-none hover:text-white"}`} to={item.path}><span>{item.icon}</span>
                    <span className="hidden lg:block">{item.name}</span></NavLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </nav>
    </div>
  )
}

export default Header;