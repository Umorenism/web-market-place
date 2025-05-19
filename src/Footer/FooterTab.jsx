



import { HomeIcon, PlusCircleIcon, UserIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const FooterTab = () => {
  const location = useLocation();

  // Footer tab config with route paths
  const navItems = [
    {
      icon: <HomeIcon className="w-6 h-6" />,
      label: "Home",
      path: "/",
    },
    {
      icon: (
        <img
          className="h-[19px] w-[19px]"
          alt="Discover"
          src="https://c.animaapp.com/map8oozdb5hcEE/img/subtract.svg"
        />
      ),
      label: "Discover",
      path: "/discover",
    },
    {
      icon: <PlusCircleIcon className="w-6 h-6" />,
      label: "Create",
      path: "/create",
    },
    {
      icon: (
        <img
          className="w-9 h-[18px]"
          alt="Airdrop"
          src="https://c.animaapp.com/map8oozdb5hcEE/img/xp.svg"
        />
      ),
      label: "Airdrop",
      path: "/airdrop",
    },
    {
      icon: <UserIcon className="w-6 h-6" />,
      label: "Profile",
      path: "/profile",
    },
  ];

  return (
    <nav className="w-full h-[88px] bg-[#020c16] rounded-t-lg border-t border-gray-700 fixed bottom-0 z-50">
      <div className="flex flex-col w-full items-center pt-2.5">
        <div className="flex items-center justify-between w-full px-6">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                to={item.path}
                key={index}
                className="flex flex-col items-center justify-center gap-1"
              >
                <div className="w-6 h-6 flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div
                  className={`text-xs font-medium ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold"
                      : "text-base-80"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};





