import { useState } from "react";
import logo from "@/assets/logo.svg";
import arrowDown from "@/assets/arrow.svg";
import menu from "@/assets/menu.svg";

const Navbar = () => {
  const [lang, setLang] = useState("EN");
  const [isLangOpen, setIsLangOpen] = useState(false);

  const menuItems = [
    { name: "Destinations", link: "#" },
    { name: "Hotels", link: "#" },
    { name: "Flights", link: "#" },
    { name: "Bookings", link: "#" },
  ];

  const languages = ["EN", "FR"];

  return (
    <nav className="flex items-center justify-between py-6 px-4 md:px-12 max-w-7xl mx-auto w-full absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <img src={logo} alt="Jadoo Logo" />
      </div>

      <div className="hidden md:flex items-center lg:gap-10 gap-4">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="text-menu-items font-medium hover:text-orange-500 transition-colors"
          >
            {item.name}
          </a>
        ))}

        <a
          href="#"
          className="text-menu-items font-medium hover:text-orange-500 transition-colors"
        >
          Login
        </a>

        <button className="border border-menu-text-menu-items px-5 py-2 rounded-md hover:bg-menu-text-menu-items hover:text-orange-500 cursor-pointer transition-all font-medium">
          Sign up
        </button>

        <div className="relative">
          <div
            className="flex items-center gap-1 cursor-pointer select-none"
            onClick={() => setIsLangOpen(!isLangOpen)}
          >
            <span className="font-medium text-menu-items">{lang}</span>
            <img
              src={arrowDown}
              alt="Arrow Down"
              className={`transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
            />
          </div>

          {isLangOpen && (
            <div className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-md border border-gray-100 py-2 w-20 z-[60]">
              {languages.map((l) => (
                <div
                  key={l}
                  className={`px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-medium ${lang === l ? "text-orange-500" : "text-menu-items"}`}
                  onClick={() => {
                    setLang(l);
                    setIsLangOpen(false);
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden">
        <img src={menu} alt="Menu" className="w-6 h-6 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
