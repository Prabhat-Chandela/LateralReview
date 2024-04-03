import { NavLink } from "react-router-dom";
import { Home, BookOpen, Newspaper, HandPlatter, SquareUser } from "lucide-react";
import { Logo } from "../index";

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
      name: "Contact Us",
      path: "/contact",
      icon: <SquareUser size={20} />
    },

  ]


  return (
    <div className="w-full">
      <nav className="flex items-center justify-between sm:p-5 ">
        <section>
          <div><Logo /></div>
        </section>

        <section>
          <div>
            <ul className="flex items-center justify-end sm:gap-7 ">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink className={({ isActive }) => `flex font-robotoMedium items-center justify-center gap-2 text-sm  ${isActive ? "text-red-600" : "text-white"}`} to={item.path}><span>{item.icon}</span>
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