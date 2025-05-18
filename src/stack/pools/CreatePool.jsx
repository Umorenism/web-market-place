import { ArrowLeftIcon } from "lucide-react";
import sort from "../../assets/sort.png";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import gift from "../../assets/gifty.png";
import air from "../../assets/airdrop4.png";
import { Link } from "react-router-dom";

export default function CreatePool() {
  return (
    <div className="bg-[#0b0f1d] flex justify-center min-h-screen">
      <div className="relative w-full max-w-[412px] flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
          <button className="bg-transparent border-none p-0">
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-lg font-bold">Pools</h1>
        </header>

        {/* Main content */}
        <main className="pt-[70px] px-4 flex flex-col gap-6">
          {/* Description */}
          <p className="text-sm text-white">
            Complete tasks and receive rewards.
          </p>

          {/* Tabs and sort */}
          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              <button className="text-white font-medium border-b-2 border-white pb-1">
                Pools Created
              </button>
              <button className="text-white font-medium text-opacity-60">
                Active Pool
              </button>
            </div>
            <div className="h-8 w-10 border border-white rounded-md flex items-center justify-center">
              <img className="w-5 h-5" alt="Sort" src={sort} />
            </div>
          </div>
        </main>

        <div className="mt-4 p-2 ">
          <div className="w-full bg-black flex items-center rounded-md gap-4 p-3">
            <div className="w-[80px] h-[80px] bg-white rounded-md">
              <img src={air} alt="" className="p-3" />
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-end mb-2 items-center">
                <h1 className="h-3 w-3 bg-green-800 rounded-full"></h1>
                <h1 className="text-white text-sm ml-2">Active</h1>
              </div>
              <p className="text-white">Gamification redefined with Canto</p>
              <div className="flex gap-5 mt-2">
                <h1 className="text-white">0.1 USDT</h1>
                <h1 className="text-white flex items-center gap-2">
                  <img src={gift} alt="" className="object-contain" />
                  184k
                </h1>
              </div>
              <div>
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
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center min-h-[400px]">
          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#9333EA] inline-block">
            <Link to="/pool-creation">
              <button className="bg-[#0b0f1d] text-[#3231C0] px-5 py-3 rounded-2xl w-full h-full">
                Create pool +
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
