import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SendCrypto() {
  const [toggle, setToggle] = useState(null);

  return (
    <div className="bg-[#0b0f1d] flex justify-center min-h-screen">
      <div className="relative w-full max-w-[412px] flex flex-col p-2">
        {/* Header with animation */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4"
        >
          <button className="bg-transparent border-none p-0">
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-lg font-bold">Send Crypto</h1>
        </motion.header>

        {/* Main content with fade-in effect */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-[70px] px-4 mt-20 flex-col flex items-center justify-center"
        >
          {/* Description with animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white font-bold text-2xl"
          >
            $0.00
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-slate-500"
          >
            0.00USDT
          </motion.p>
        </motion.main>

        {/* Address section with slide-in effect */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4"
        >
          <h1 className="text-white mb-2">Address</h1>
          <div className="border-blue-400 border mb-3 mt-3 w-full flex gap-2 items-center rounded-md py-5 p-4">
            <h1 className="text-[#A4A4A4] text-sm">USDT Address</h1>
          </div>
          <p className="text-white text-sm">Wallet Bal:$15.39USDT</p>
        </motion.div>

        {/* Button with hover animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="p-2 mt-52 flex justify-center items-center"
        >
          <Link to="/six-task" className="w-full">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3B82F6] w-full py-3 px-20 rounded-md text-[#FFFF] text-xl"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
