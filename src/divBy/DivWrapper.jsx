
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "../ui/Card";

export const DivWrapperByAnima = () => {
  const [showBalance, setShowBalance] = useState(true);

  const toggleBalance = () => {
    setShowBalance((prev) => !prev);
  };

  return (
    <Card className="border-none bg-transparent w-full">
      <CardContent className="p-0">
        <div className="flex flex-col items-start">
          {/* Title and Eye Icon */}
          <div className="inline-flex items-center gap-[5px]">
            <div className="text-white text-sm font-medium">Total Balance</div>
            <button
              onClick={toggleBalance}
              className="w-6 h-6 flex items-center justify-center text-white"
              aria-label="Toggle Balance"
            >
              {showBalance ? (
                <EyeIcon className="w-[18px] h-[18px]" />
              ) : (
                <EyeOffIcon className="w-[18px] h-[18px]" />
              )}
            </button>
          </div>

          {/* Balance Info */}
          <div className="mt-1 text-white font-bold text-xl">
            {showBalance ? "$0.65" : "****"}
          </div>

          <div className="text-[#a4a4a4] font-bold text-base">
            {showBalance ? "0.64 USDT" : "*****"}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
