import { ArrowLeftIcon } from "lucide-react";
import logo from "../../assets/taskpro.png";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import about from "../../assets/abouticon.png";
import tel from "../../assets/tel.png";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Icon for completed
import { motion } from "framer-motion"; // Import motion for animations

export default function ActiveTask() {
  const [openItemId, setOpenItemId] = useState(null);
  const location = useLocation();
  const completedTasks = location.state?.completedTasks || []; // ✅ Receive state
  const navigate = useNavigate();

  const toggleDropdown = (id) => {
    setOpenItemId((prev) => (prev === id ? null : id));
    navigate("/completed-task");
  };

  const socialLinks = [
    {
      id: 1,
      label: "Join Telegram channel",
      description: "Get instant updates and community support on our Telegram channel.",
    },
    {
      id: 2,
      label: "Join Discord server",
      description: "Chat with fellow users and the team on Discord.",
    },
    {
      id: 3,
      label: "Follow on Twitter",
      description: "Stay updated with our latest news and announcements on Twitter.",
    },
    {
      id: 4,
      label: "Community Updates",
      description: "Catch up on all the latest community developments and news.",
    },
    {
      id: 5,
      label: "Ask a Question",
      description: "Need help? Post your questions and get answers from the community.",
    },
    {
      id: 6,
      label: "See Campaign Details",
      description: "View full details of the current campaign, rewards, and participation guide.",
    },
  ];

  return (
    <motion.div
      className="bg-[#0b0f1d] flex justify-center min-h-screen px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex-col flex">
        {/* Fixed Header */}
        <motion.header
          className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button className="bg-transparent border-none p-0">
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
        </motion.header>

        <div className="mt-24 flex-col flex">
          {/* Card */}
          <motion.div
            className="bg-[#060606] w-full max-w-[412px] h-[150px] rounded-md flex items-center p-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-[100px] w-[100px] flex-shrink-0">
              <img
                src={logo}
                alt="Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-between h-full text-white flex-1 items-end pr-2">
              <div className="text-right">
                <h1 className="text-sm font-semibold">Participants</h1>
                <h3 className="text-lg font-bold">254k</h3>
                <p className="text-sm mt-1">Reward</p>
                <h5 className="text-md font-medium">0.1 USDT</h5>
              </div>
              <ProgressPrimitive.Root
                className="relative overflow-hidden bg-gray-700 rounded-full w-full h-2 mt-2"
                value={60}
              >
                <ProgressPrimitive.Indicator
                  className="h-full transition-all duration-300"
                  style={{
                    width: "60%",
                    background: "linear-gradient(to right, #3B82F6, #9333EA)",
                  }}
                />
              </ProgressPrimitive.Root>
            </div>
          </motion.div>

          {/* Project Info */}
          <motion.div
            className="mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-white font-[700]">Canto Gaming</h1>
            <p className="text-white mt-2">
              Gamification redefined with Canto, where fun and fund meets
            </p>
            <div className="bg-[#100916] px-2 h-10 w-20 flex border border-white rounded-md justify-center gap-2 items-center mt-3">
              <button className="text-white">About</button>
              <img src={about} alt="" />
            </div>
          </motion.div>

          {/* Completed Tasks List */}
          <motion.div
            className="mt-5 min-h-[400px] space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {socialLinks.map((item) => {
              const isCompleted = completedTasks.includes(item.id);

              return (
                <motion.div
                  key={item.id}
                  className="bg-[#2C2C30] p-3 rounded-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + item.id * 0.1,
                  }}
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => {
                      toggleDropdown(item.id);
                      navigate("/completed-task");
                    }}
                  >
                    <div className="bg-black flex items-center justify-center rounded-md h-10 w-10 mr-3">
                      <img
                        src={tel}
                        alt={item.label}
                        className="h-6 w-6 object-contain"
                      />
                    </div>
                    <p className="text-white flex-1 ml-2">{item.label}</p>

                    {/* ✅ Show green check if completed */}
                    {isCompleted && <FaCheckCircle size={20} color="green" />}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
