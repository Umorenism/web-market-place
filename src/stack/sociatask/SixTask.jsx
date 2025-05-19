import { ArrowLeftIcon } from "lucide-react";
import logo from "../../assets/taskpro.png";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import about from "../../assets/abouticon.png";
import tel from "../../assets/tel.png";
import { FaAngleRight, FaAngleDown } from "react-icons/fa"; // ✅ Fixed import
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom"; // ✅ Import

export default function SixTask() {
  const [openItemId, setOpenItemId] = useState(null); // track open item
  // const navigate = useNavigate(); // ✅ Hook
const navigate = useNavigate()
  
      const handleGoBack = () => {
      navigate(-1); // This will go back to the previous page in the browser history
    };
  const toggleDropdown = (id) => {
    setOpenItemId((prev) => (prev === id ? null : id));
    //  navigate(`/active-task/${id}`);
  };

  // ✅ Added `description` to each item
  const socialLinks = [
    {
      id: 1,
      label: "Join Telegram channel",
      link:"www.linkwfafdsrrere.com"
    //   description:
    //     "Get instant updates and community support on our Telegram channel.",
    },
    {
      id: 2,
      label: "Join Discord server",
      link:"www.linkwfafdsrrere.com"
    //   description: "Chat with fellow users and the team on Discord.",
    },
    {
      id: 3,
      label: "Follow on Twitter",
      link:"www.linkwfafdsrrere.com"
    //   description:
    //     "Stay updated with our latest news and announcements on Twitter.",
    },
    {
      id: 4,
      label: "Community Updates",
      link:"www.linkwfafdsrrere.com"
    //   description:
    //     "Catch up on all the latest community developments and news.",
    },
    {
      id: 5,
      label: "Ask a Question",
      link:"www.linkwfafdsrrere.com"
    //   description:
    //     "Need help? Post your questions and get answers from the community.",
    },
    {
      id: 6,
      label: "See Campaign Details",
      link:"www.linkwfafdsrrere.com"
    //   description:
    //     "View full details of the current campaign, rewards, and participation guide.",
    },
  ];

  return (
    <div className="bg-[#0b0f1d] flex justify-center min-h-screen px-4">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
        <button className="bg-transparent border-none p-0" onClick={handleGoBack}>
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </button>
      </header>
    
      <div className="flex-col flex w-full">
        <div className="mt-20 flex-col space-y-3">
            <h1 className="text-white">5/5</h1>
            <p className="text-white">Review & Publish</p>
        </div>
        {/* Card */}
        <div className="bg-[#060606] w-full max-w-[412px] h-[150px] mt-8 rounded-md flex items-center p-4 gap-4">
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
                  width: "10%",
                  background: "linear-gradient(to right, #3B82F6, #9333EA)",
                }}
              />
            </ProgressPrimitive.Root>
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-5 w-full">
          <h1 className="text-white font-[700]">Duration: 14/05/25 - 17/05/25</h1>
          
         
        </div>

        {/* Accordion Dropdown Section */}
        <div className="mt-5 min-h-[400px] space-y-3">
          {socialLinks.map((item) => (
            <div key={item.id} className="bg-[#2C2C30] p-3 rounded-sm">
              <div
                className="flex items-center justify-between  cursor-pointer"
                onClick={() => toggleDropdown(item.id)}
              >
              
                 <div className="bg-black flex items-center justify-center rounded-md h-10 w-10 mr-3">
                  <img
                    src={tel}
                    alt={item.label}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                 <div className="flex flex-col w-full">
              
                 <p className="text-white flex-1 ml-2">{item.label}</p>
                <h1 className="text-blue-800 underline">{item.link}</h1>
             
               </div>
              </div>
            </div>
          ))}
        </div>

        

        <div className="w-full flex justify-center items-center mt-6 mb-6">
          <Link to="/" className="w-full flex justify-center">
            <button className="w-[90%] max-w-[360px] py-3 rounded-md bg-transparent border border-[#3231C0] text-white text-base font-semibold transition duration-200 hover:bg-blue-700 shadow-md">
              Cancel
            </button>
          </Link>
          <Link to="/confirmpayment" className="w-full flex justify-center">
            <button style={{background: "linear-gradient(to right, #3B82F6, #9333EA)"}} className="w-[90%] max-w-[360px] py-3 rounded-md  text-white text-base font-semibold transition duration-200 hover:bg-blue-700 shadow-md">
              Create Pool
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
