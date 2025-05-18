import { ArrowLeftIcon} from "lucide-react";
import copied from '../../assets/copy.png'
import qrcode from '../../assets/qr.png'
export default function QrCode() {
  return (
    <div className="bg-[#0b0f1d] flex justify-center w-full overflow-x-hidden min-h-screen">
      <header className="fixed top-0 left-0 w-full  max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
        <button className="bg-transparent border-none p-0">
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-xl">Deposit</h1>
      </header>
  <div className="flex flex-col">
      <div className="mt-20 justify-center items-center">
        <h1 className="text-center text-white">Network:BSC (BEP20)</h1>
       <div className="w-full items-center flex justify-center mt-20">
         <img src={qrcode} alt="" />
       </div>
      </div>

      <div className="mt-10 space-y-3 w-full">
        <div className="mt-10 p-2 space-y-4 ">
          <div className="bg-[#2C2C30] py-10 rounded-md p-2 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex flex-col text-white text-sm">
                <h1>Wallet adress:</h1>
                <p>0x71C7656EC7ab88b098defB751B740 <br />1B5f6d8976F</p>
              </div>
            </div>
            <div>
            <button>
                 <img src={copied} alt="" className="h-6 w-6 object-contain" />
            </button>
            </div>
          </div>
        </div>
        <div className="mt-10 p-2 space-y-4 ">
          <div className="bg-[#2C2C30] py-10 rounded-md p-2 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex  text-white text-sm">
                <h1 className="text-blue-800">Important:<span className="text-white">Only send BSC (BEP20) tokens to this address. 
                    Sending tokens via any other network may result in permanent loss of funds.</span></h1>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="w-full mt-5 p-4 gap-4 flex">
            <button className="border border-white py-4 w-1/2 rounded-md text-white">Save Picture</button>
            <button className="bg-blue-500 py-4 w-1/2 rounded-md text-white">Copy Adress</button>
        </div>
      </div>
    </div>
  );
}
