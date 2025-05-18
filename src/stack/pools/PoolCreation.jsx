import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function PoolCreation() {
  const [openItemId, setOpenItemId] = useState(null); 
  
  const navigate = useNavigate ()

  const toggleDropdown = (id) => {
    setOpenItemId((prev) => (prev === id ? null : id));
    navigate(`first-social-task/${item.id}`);
  };

  const socialLinks = [
    {
      id: 1,
      label: "Join Social Boost ",
      description:
        "Get instant updates and community support on our Telegram channel.",
    },
    {
      id: 2,
      label: "Airdrop Campaign",
      description: "Chat with fellow users and the team on Discord.",
    },
    {
      id: 3,
      label: "App Download/Gaming Quest",
      description:
        "Stay updated with our latest news and announcements on Twitter.",
    },
    {
      id: 4,
      label: "Review & Feedback",
      description:
        "Catch up on all the latest community developments and news.",
    },
    {
      id: 5,
      label: "Custom Tasks",
      description:
        "Need help? Post your questions and get answers from the community.",
    },
    
  ];
  return (
    <div className="bg-[#0b0f1d] flex justify-center min-h-screen">
      <div className="relative w-full max-w-[412px] flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
          <button className="bg-transparent border-none p-0">
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-lg font-bold">Create pool</h1>
        </header>
        {/* Main content */}
        <main className="pt-[70px] px-4 flex flex-col gap-2">
          {/* Description */}
          <h2 className="text-sm text-white">1/5</h2>
          <h1 className="text-xl text-white">Pool Type</h1>
          <p className="text-sm text-white">
            Choose the type of pool you want to create
          </p>
        </main>
        <div className="min-h-[300px] w-full  mt-10 p-2">
          <div className="mt-5 min-h-[400px] space-y-5">
            {socialLinks.map((item) => (
              <div key={item.id} className="bg-[#2C2C30] p-5 rounded-sm">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleDropdown(item.id)}
                //    onClick={() => navigate(`/social-task/${item.id}`)}
                >
                
                  <p className="text-white flex-1 ml-2">{item.label}</p>
                  {openItemId === item.id ? (
                    <FaAngleDown size={20} color="#FFFFFF" />
                  ) : (
                    <FaAngleRight size={20} color="#FFFFFF" />
                  )}
                </div>

                {/* Accordion Content */}
                {openItemId === item.id && (
                  <div className="text-white mt-2 text-sm px-2">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
