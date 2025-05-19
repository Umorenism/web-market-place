import React from "react";
import { ArrowLeftIcon } from "lucide-react";
import sort from "../../assets/Sort.png";
import { DiscoveryComponent } from "../../component/DiscoveryComponent";
import { TabsComponent } from "../../component/TabsComponent";
import { motion } from "framer-motion"; // Import motion for animations

export const CompletedTaskPage = () => {
  return (
    <motion.div
      className="bg-[#0b0f1d] flex justify-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full max-w-[412px] flex flex-col bg-bgdark-mode">
        {/* Fixed Header with animation */}
        <motion.header
          className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-bgdark-mode px-4 py-3 shadow-md flex items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button className="bg-transparent border-none p-0">
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-lg font-bold">Tasks</h1>
        </motion.header>

        {/* Scrollable content below fixed header */}
        <motion.main
          className="pt-[70px] pb-4 overflow-y-auto flex-1 h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="px-4">
            <p className="text-sm text-white mb-4">Complete tasks and receive reward</p>

            {/* Tabs and sort icon */}
            <motion.div
              className="flex items-center justify-between mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <TabsComponent />
              <img className="w-6 h-6" alt="Sort" src={sort} />
            </motion.div>

            {/* Discovery component */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <DiscoveryComponent />
            </motion.div>
          </div>
        </motion.main>
      </div>
    </motion.div>
  );
};
