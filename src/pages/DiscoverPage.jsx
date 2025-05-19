



import React from "react";
import { ArrowLeftIcon } from "lucide-react";
import { TabsComponent } from "../component/TabsComponent";
import sort from "../assets/Sort.png";
import { DiscoveryComponent } from "../component/DiscoveryComponent";
import { motion } from "framer-motion";

export const DiscoverPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0b0f1d] flex justify-center min-h-screen"
    >
      <div className="relative w-full max-w-[412px] flex flex-col bg-bgdark-mode">
        
        {/* Fixed Header */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-bgdark-mode px-4 py-3 shadow-md flex items-center gap-4"
        >
          <button className="bg-transparent border-none p-0">
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-lg font-bold">Tasks</h1>
        </motion.header>

        {/* Scrollable content below fixed header */}
        <main className="pt-[70px] pb-4 overflow-y-auto flex-1 h-screen">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="px-4"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm text-white mb-4"
            >
              Complete tasks and receive reward
            </motion.p>

            {/* Tabs and sort icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center justify-between mb-4"
            >
              <TabsComponent />
              <img className="w-6 h-6" alt="Sort" src={sort} />
            </motion.div>

            {/* Discovery section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <DiscoveryComponent />
            </motion.div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
};

