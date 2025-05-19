import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import info from "../../assets/info.png";

export default function FivthTask() {
  const navigate = useNavigate()
    
        const handleGoBack = () => {
        navigate(-1); // This will go back to the previous page in the browser history
      };
  const [toggle, setToggle] = useState(null);
  return (
    <div className="bg-[#0b0f1d] flex justify-center min-h-screen">
      <div className="relative w-full max-w-[412px] flex flex-col p-2">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
          <button className="bg-transparent border-none p-0" onClick={handleGoBack}>
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-lg font-bold">Create pool</h1>
        </header>
        {/* Main content */}
        <main className="pt-[70px] px-4 flex flex-col gap-2">
          {/* Description */}
          <h2 className="text-sm text-white">4/5</h2>
          <h1 className="text-xl text-white">Budget & Schedule</h1>
        </main>
        <div className="mt-4">
          <h1 className="text-white mb-2">Total Budget</h1>
          {/* <div className="min-h-[55px] w-full space-y-4 flex flex-col justify-center mt-10 p-5 bg-[#2C2C30] rounded-2xl ">
            
        </div> */}
          <div className="bg-[#393838] w-full flex gap-2 items-center rounded-md py-5 p-4">
            <h1 className="text-[#A4A4A4] text-xl">USDT</h1>
            <p className="text-white text-sm">0.00</p>
          </div>
          <p className="text-white">Bal:$15.39</p>
        </div>

        <div className="mt-4 flex w-full gap-5 p-2">
          <div className="flex flex-col w-1/2">
            <label htmlFor="" className="mb-2 text-white">
              Start Date
            </label>
            <select
              name=""
              id=""
              className="bg-transparent text-white p-2 py-4 border outline-none rounded-md"
            >
              <option value="">Start Date</option>
            </select>
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="" className="text-white mb-2">
              {" "}
              End Date
            </label>
            <select
              name=""
              id=""
              className="bg-transparent text-white p-2 py-4 outline-none border rounded-md"
            >
              <option value="">End Date</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-white mb-2 p-2 text-md">
            You’ll reward up to 0 users with 0 USDT each
          </h1>

          <div className="bg-[#FF6B0233] p-3 rounded-md flex ">
            <img
              src={info}
              alt=""
              className="h-5 w-5 object-contain mt-1 gap-2"
            />

            <p className="text-white ml-2">
              Unused funds from pool created by you will be refunded to your
              wallet. Pool closed before the end of the pool will required
              penalty fee{" "}
            </p>
          </div>
        </div>

        <div className="p-2 mt-10 flex justify-center items-center">
          <Link to="/six-task">
            <button className="bg-[#3B82F6] py-3 px-20 rounded-md text-[#FFFF] text-xl">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
