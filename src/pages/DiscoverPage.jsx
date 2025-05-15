import React from "react";
import { ArrowLeftIcon } from "lucide-react";
import { TabsComponent } from "../component/TabsComponent";
import sort from "../assets/Sort.png";
import { DiscoveryComponent } from "../component/DiscoveryComponent";

export const DiscoverPage = () => {
  return (
    <div className="bg-[#0b0f1d] flex justify-center min-h-screen">
      <div className="relative w-full max-w-[412px] flex flex-col bg-bgdark-mode">

        {/* Fixed Header */}
        <header className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-bgdark-mode px-4 py-3 shadow-md flex items-center gap-4">
          <button className="bg-transparent border-none p-0">
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-lg font-bold">Tasks</h1>
        </header>

        {/* Scrollable content below fixed header */}
        <main className="pt-[70px] pb-4 overflow-y-auto flex-1 h-screen">
          <div className="px-4">
            <p className="text-sm text-white mb-4">Complete tasks and receive reward</p>

            {/* Tabs and sort icon */}
            <div className="flex items-center justify-between mb-4">
              <TabsComponent />
              <img className="w-6 h-6" alt="Sort" src={sort} />

              
            </div>
            <div>
                 <DiscoveryComponent />
              </div>

            {/* Discovery section */}
         
            
           
          </div>
        </main>
      </div>
    </div>
  );
};
