



import { ArrowLeftIcon, EyeOffIcon } from 'lucide-react';
import pic from '../assets/im.png';
import air from '../assets/xl.png';
import ton from '../assets/t.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import Framer Motion

export const AirdropPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0b0f1d] flex justify-center w-full overflow-x-hidden min-h-screen"
    >
      <header className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
        <button className="bg-transparent border-none p-0">
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-xl">Wallet</h1>
      </header>

      <div className="mt-20 w-full">
        {/* User Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center w-full p-2"
        >
          <div>
            <img src={pic} alt="" className="h-14 w-14 object-contain" />
            <h1 className="text-white">@Xaus1245</h1>
          </div>
          <Link to="/airdropclaim">
            <button className="bg-[#FF6B02] rounded-full py-1 px-4 text-[#FFFFFF] flex gap-2 items-center">
              <img src={air} alt="" />
              Airdrop
            </button>
          </Link>
        </motion.div>

        {/* Total Balance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full mt-20 justify-center items-center flex"
        >
          <h1 className="text-white flex gap-3 items-center text-xl">
            Total Balance <EyeOffIcon />
          </h1>
        </motion.div>

        {/* Deposit & Withdraw Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-20 items-center w-full gap-2 p-2"
        >
          <Link to="/deposite" className="w-full">
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="border border-[#3B82F6] rounded-md px-10 py-3 w-full text-white"
            >
              Deposit
            </motion.button>
          </Link>
          <Link to="/withdraw" className="w-full">
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="border border-[#3B82F6] rounded-md px-10 py-3 text-white w-full"
            >
              Withdraw
            </motion.button>
          </Link>
        </motion.div>

        {/* Asset Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center gap-8 p-5"
        >
          <h1 className="text-white">Assets</h1>
          <h1 className="text-white">History</h1>
        </motion.div>

        {/* Asset Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 w-full p-3"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={ton} alt="" className="h-10 w-10 object-contain" />
              <div>
                <h1 className="text-white">USDT</h1>
                <p className="text-white">0.00 USDT</p>
              </div>
            </div>
            <p className="text-white">$0.00</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
