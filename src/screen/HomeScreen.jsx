import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";


import { FooterTab } from "../Footer/FooterTab";
import { HomePage } from "../pages/HomePage";
import DiscoverPage from "../pages/DiscoverPage";
import CreatePage from "../pages/CreatePage";
import { AirdropPage } from "../pages/AirdropPage";
import ProfilePage from "../pages/ProfilePage";

export function HomeScreen() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-[#0b0f1d] min-h-screen flex flex-col items-center">
      {/* Main Page Content */}
      <div className="flex-1 w-full max-w-[412px] overflow-y-auto pb-[88px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/airdrop" element={<AirdropPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>

      {/* Footer always visible */}
      <div className="fixed bottom-0 w-full max-w-[412px] z-50">
        <FooterTab />
      </div>
    </div>
  );
}
