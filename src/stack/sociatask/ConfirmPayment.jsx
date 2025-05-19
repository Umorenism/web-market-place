import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function ConfirmPayment() {
  const navigate = useNavigate()
    
        const handleGoBack = () => {
        navigate(-1); // This will go back to the previous page in the browser history
      };
   
  return (
    <div className="bg-[#0b0f1d] flex justify-center min-h-screen">
      <div className="relative w-full max-w-[412px] flex flex-col ">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4" onClick={handleGoBack}>
          <button className="bg-transparent border-none p-0">
            <ArrowLeftIcon className="w-6 h-6 text-white" />
          </button>
         
        </header>
        {/* Main content */}
       
        <div className="h-full w-full space-y-4 flex flex-col  items-center justify-center p-4  mt-[200px] rounded-t-2xl bg-[#2C2C30] ">
            <div className="flex-col flex justify-center items-center text-white">
                <h1 className="text-xl font-bold mb-8">Confirm payment</h1>
                <p>$1,000</p>
                <h3>1,000 Usdt</h3>
            </div>
           <div>
            <h1 className="text-white font-bold text-[20px] mb-4">Your transaction fee is $1.45,<br />your Commission fee is $0.0</h1>
           </div>
           <div className="mt-16 w-full">
            <div className="w-full bg-[#707070]  rounded-md flex items-center gap-10">
               <Link to="/sucessful">
               <div className="bg-[#3B82F6] h-[50px] w-20 flex justify-center items-center rounded-r-md">
                 <ArrowRightIcon size={30}/>
               </div>
               </Link>
               <p>Swipe to confirm transaction</p>
            </div>
           </div>
        </div>  
      </div>
    </div>
  );
}
