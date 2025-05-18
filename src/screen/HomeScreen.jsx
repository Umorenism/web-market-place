// import React, { useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";


// import { FooterTab } from "../Footer/FooterTab";
// import { HomePage } from "../pages/HomePage";
// import{ DiscoverPage} from "../pages/DiscoverPage";
// import CreatePage from "../pages/CreatePage";
// import { AirdropPage } from "../pages/AirdropPage";
// import ProfilePage from "../pages/ProfilePage";
// import TaskProcess from "../stack/task/TaskProcess";
// import ActiveTask from "../stack/task/ActiveTask";



// export function HomeScreen() {
//   const { pathname } = useLocation();

//   // Scroll to top on route change
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return (
//     <div className="bg-[#0b0f1d] min-h-screen flex flex-col items-center">
//       {/* Main Page Content */}
//       <div className="flex-1 w-full max-w-[412px] overflow-y-auto pb-[88px]">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/discover" element={<DiscoverPage />} />
//           <Route path="/create" element={<CreatePage />} />
//           <Route path="/airdrop" element={<AirdropPage />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/tasks" element={<TaskProcess />} />
//           <Route path="/active-task/:id" element={<ActiveTask />} />
//             <Route path="/uncompleted" element={<CompletedTasks />} />   
//         </Routes>
//       </div>

//       {/* Footer always visible */}
//       <div className="fixed bottom-0 w-full max-w-[412px] z-50">
//         <FooterTab />
//       </div>
//     </div>
//   );
// }




import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { FooterTab } from "../Footer/FooterTab";
import { HomePage } from "../pages/HomePage";
import { DiscoverPage } from "../pages/DiscoverPage";
import CreatePage from "../pages/CreatePage";
import { AirdropPage } from "../pages/AirdropPage";
import ProfilePage from "../pages/ProfilePage";
import TaskProcess from "../stack/task/TaskProcess";
import ActiveTask from "../stack/task/ActiveTask";
import  {CompletedTaskPage} from "../stack/task/CompleteTask"; // Import CompletedTasks here
import CreatePool from "../stack/pools/CreatePool";
import PoolCreation from "../stack/pools/PoolCreation";
import FirstTask from "../stack/sociatask/FirstTask";
import SecondTask from "../stack/sociatask/SecondTask";
import ThirdTask from "../stack/sociatask/ThirdTask";
import FourthTask from "../stack/sociatask/FourthTask";
import FivthTask from "../stack/sociatask/FivthTask";
import SixTask from "../stack/sociatask/SixTask";
import ConfirmPayment from "../stack/sociatask/ConfirmPayment";
import SucessFul from "../stack/sociatask/SucessFul";
import WalDetails from "../stack/wallet/WalDetails";
import QrCode from "../stack/wallet/QrCode";
import Withdraw from "../stack/wallet/Withdraw";
import WalletPaying from "../stack/wallet/WalletPaying";
import AirdropClaim from "../stack/AirdropClaim/AirdropClaim";
import SendCrypto from "../stack/sendCrypto/SendCrypto";


export function HomeScreen() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-[#0b0f1d] min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full max-w-[412px] overflow-y-auto pb-[88px]">
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/airdrop" element={<AirdropPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/tasks" element={<TaskProcess />} />
          <Route path="/active-task" element={<ActiveTask />} />
          <Route path="/completed-task" element={<CompletedTaskPage/>}/>
          <Route path="/createpools" element={<CreatePool/>}/>
          <Route path="/pool-creation" element={<PoolCreation/>}/>
           <Route path="/wallet" element={<WalDetails/>}/> 
            <Route path="/paying" element={<WalletPaying/>}/> 
            <Route path="/airdropclaim" element={<AirdropClaim/>}/> 
            <Route path="/sendcrypto" element={<SendCrypto/>}/> 
          
          {/* no footer */}
          <Route path="/first-social-task/:id" element={<FirstTask/>}/>
          <Route path="/second-task" element={<SecondTask/>}/>
          <Route path="/third-task" element={<ThirdTask/>}/>
          <Route path="/fourth-task" element={<FourthTask/>}/>
          <Route path="/fivth-task" element={<FivthTask/>}/>
          <Route path="/six-task" element={<SixTask/>}/>
          <Route path="/confirmpayment" element={<ConfirmPayment/>}/>
          <Route path="/sucessful" element={<SucessFul/>}/>
          <Route path="/deposite" element={<QrCode/>}/> 
          <Route path="/withdraw" element={<Withdraw/>}/> 
         
        </Routes>
      </div>

      {/* Footer always visible */}
      <div className="fixed bottom-0 w-full max-w-[412px] z-50">
        <FooterTab />
      </div>
    </div>
  );
}
