





import { BellIcon, EyeIcon } from "lucide-react";
import { DivByAnima } from "../divBy/DivBy";
import { FrameByAnima } from "../frame/Frame";
import { FrameWrapperByAnima } from "../frame/FrameWrapper";
import { RiSettingsLine } from "react-icons/ri";

export const HomePage = () => {
  return (
    <div className="bg-[#0b0f1d] flex justify-center w-full overflow-x-hidden min-h-screen animate-fadeIn">
      <div className="bg-bgdark-mode w-full max-w-[412px] min-h-screen relative flex flex-col">

        {/* Header */}
        <div className="fixed top-0 w-full max-w-[412px] z-10 bg-[#0b0f1d] px-4 py-3 shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md overflow-hidden bg-cover bg-center">
                <img
                  src="https://c.animaapp.com/map8oozdb5hcEE/img/frame-70.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-white text-lg font-bold">Hi, Xaus</h1>
            </div>
            <div className="flex gap-4 items-center">
              <BellIcon className="w-6 h-6 text-white" />
              <RiSettingsLine className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pt-[80px] pb-[100px] px-4">
          {/* Balance Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-white font-bold text-base">Total Balance</h2>
              <EyeIcon className="w-4 h-4 text-white mt-[2px]" />
            </div>
            <h1 className="text-white text-2xl font-bold mt-1">$0.65</h1>
            <p className="text-[#a4a4a4] font-bold text-sm">0.64 USDT</p>
          </div>

          {/* Frame Sections */}
          <FrameWrapperByAnima />
          <div className="mt-4">
            <FrameByAnima />
          </div>
          <div className="mt-4">
            <DivByAnima />
          </div>
        </div>
      </div>
    </div>
  );
};
