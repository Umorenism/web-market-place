import { ArrowLeftIcon, EyeOffIcon } from "lucide-react";

import pic from "../../assets/copy.png";

export default function WalletPaying() {
  return (
    <div className="bg-[#0b0f1d] flex justify-center w-full overflow-x-hidden min-h-screen">
      <header className="fixed top-0 left-0 w-full  max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
        <button className="bg-transparent border-none p-0">
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-xl">Withdraw</h1>
      </header>

      <div className="mt-[50px] relative p-2 w-full space-y-6">
        <div className="mt-4">
            <h1 className="text-center text-white mb-4">Details</h1>
          <h1 className="text-white ">Paying</h1>

          <div className=" absolute bottom-[150px] right-0 left-0 w-full p-3">
            <button className="w-full bg-blue-500 text-white py-4 rounded-xl text-xl">
              Withdraw Usdt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
