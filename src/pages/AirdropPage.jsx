import { ArrowLeftIcon, EyeClosed, EyeOffIcon } from 'lucide-react';
import pic from '../assets/im.png'
import air from '../assets/xl.png'
import ton from '../assets/t.png'
import { Link } from 'react-router-dom';
// ✅ AirdropPage.jsx
export const AirdropPage = () => {
  return <div className="bg-[#0b0f1d] flex justify-center w-full overflow-x-hidden min-h-screen">
   <header className="fixed top-0 left-0 w-full  max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
        <button className="bg-transparent border-none p-0">
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </button>
         <h1 className='text-white text-xl'>Wallet</h1>
      </header>

      <div className='mt-20 w-full '>
        <div className='flex justify-between items-center w-full p-2'>
          <div>
            <img src={pic} alt="" className='h-14 w-14 object-contain'/>
          <h1 className='text-white'>@Xaus1245 </h1>
          </div>
          <Link to="/airdropclaim">
           <button className='bg-[#FF6B02] rounded-full py-1 px-4 text-[#FFFFFF] flex gap-2 items-center'> <img src={air} alt="" />Aidrop</button>
           </Link>
        </div>
        <div className='w-full mt-20 justify-center items-center flex'>
          <h1 className='text-white flex gap-3 items-center text-xl'>Total Balance <EyeOffIcon/></h1>
        </div>
        <div>
          <div className='flex justify-center mt-20 items-center w-full gap-2 p-2'>
           <Link to="/deposite" className='w-full'>
            <button className='border border-[#3B82F6] rounded-md px-10 py-3 w-full text-white '>Deposit</button>
           </Link>
           <Link to="/withdraw" className='w-full'>
            <button className='border border-[#3B82F6] rounded-md px-10 py-3 text-white w-full'>Withdraw</button>
           </Link>
          </div>
          <div className='flex items-center gap-8 p-5'>
            <h1 className='text-white'>Assets</h1>
            <h1  className='text-white'>History</h1>
          </div>
          <div className='mt-20 w-full p-3'>
           <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <img src={ton} alt="" className='h-10 w-10 object-contain'/>
              <div>
                <h1 className='text-white'>USDT</h1>
                <p className='text-white'>0.00 USDT</p>
              </div>
            </div>
            <p className='text-white'>$0.00</p>
           </div>
          </div>
        </div>
      </div>

     
  
  </div>;
};

