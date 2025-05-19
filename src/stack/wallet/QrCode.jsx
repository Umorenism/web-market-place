







import { ArrowLeftIcon } from "lucide-react";
import copied from '../../assets/copy.png';
import qrcode from '../../assets/qr.png';
import { useState } from "react";
import { motion } from 'framer-motion';
import QrReader from 'react-qr-scanner'; // Import QR scanner

export default function QrCode() {
  const [scannedResult, setScannedResult] = useState(null); 
  const [address, setAddress] = useState(""); 
  const [copiedStatus, setCopiedStatus] = useState(false); 
  const [scannerVisible, setScannerVisible] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setScannedResult(data.text);
      setAddress(generateAddressFromScan(data.text)); 
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  
  const generateAddressFromScan = (scanData) => {
   
    return `GeneratedAddress-${scanData}`;
  };

  
  const copyAddress = (address) => {
    navigator.clipboard.writeText(address)
      .then(() => {
        setCopiedStatus(true); 
        setTimeout(() => {
          setCopiedStatus(false); 
        }, 2000);
      })
      .catch((error) => {
        console.error("Error copying address: ", error);
      });
  };

  return (
    <div className="bg-[#0b0f1d] flex justify-center w-full overflow-x-hidden min-h-screen">
      <header className="fixed top-0 left-0 w-full max-w-[412px] z-50 bg-[#0b0f1d] px-4 py-3 shadow-md flex items-center gap-4">
        <button className="bg-transparent border-none p-0">
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-xl">Deposit</h1>
      </header>

      <div className="flex flex-col">
        <div className="mt-20 justify-center items-center p-3">
         <select name="" id="" className="w-full py-2 outline-none bg-transparent text-white">
           {/* <h1 className="text-center text-white">Network: BSC (BEP20)</h1> */}
           <option value="Network" className="bg-slate-500">BSC (BEP20)</option>
           <option value="Network" className="bg-slate-500">BSC (BEP20)</option>
         </select>
          <div className="mt-14 flex justify-center items-center">
          {!scannerVisible && !scannedResult ? (
            <img src={qrcode} alt="Static QR Code" className="w-[240px] h-[240px]" />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full"
            >
              <QrReader
                delay={300}
                style={{ width: '100%', height: '300px' }}
                onError={handleError}
                onScan={handleScan}
              />
            </motion.div>
          )}
        </div>
        </div>

        <div className="mt-10 space-y-3 w-full">
          <div className="mt-10 p-2 space-y-2">
            <div className="bg-[#2C2C30] py-10 rounded-md p-2 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex flex-col text-white text-sm">
                  <h1>Wallet Address:</h1>
                  <p className="text-white">{address || "No address generated yet"}</p>
                </div>
              </div>
              <div>
                <button onClick={() => copyAddress(address)}>
                  <img src={copied} alt="Copy" className="h-6 w-6 object-contain" />
                </button>
              </div>
            </div>
          </div>

          {/* Display 'copied' message after copying */}
          {copiedStatus && (
            <p className="text-green-500 text-center mt-2">Copied!</p>
          )}
        </div>

        <div className="mt-4 p-2 space-y-4">
          <div className="bg-[#2C2C30] py-10 rounded-md p-2 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex text-white text-sm">
                <h1 className="text-blue-800">
                  Important:
                  <span className="text-white">
                    Only send BSC (BEP20) tokens to this address. Sending tokens via any other network may result in permanent loss of funds.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-5 p-4 gap-4 flex">
          <button className="border border-white py-4 w-1/2 rounded-md text-white">Save Picture</button>
          <button className="bg-blue-500 py-4 w-1/2 rounded-md text-white">Copy Address</button>
        </div>
      </div>
    </div>
  );
}


