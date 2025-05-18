



import { UserIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/Card";

export const FrameByAnima = () => {
  const activePools = [
    {
      id: 1,
      title: "Social Media Boost",
      icon: "https://c.animaapp.com/map8oozdb5hcEE/img/ellipse-1.svg",
      reward: 0.1,
      currency: "USDT",
      progress: 30,
      progressColor: "#33913f",
      participants: "245k",
      isActive: true,
    },
    {
      id: 2,
      title: "Social Media Boost",
      icon: "https://c.animaapp.com/map8oozdb5hcEE/img/ellipse-1-1.svg",
      reward: 0.5,
      currency: "USDT",
      progress: 80,
      progressColor: "#4292b6",
      participants: "245k",
      isActive: true,
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-[588px] items-start gap-[18px]">
      {/* Header with title and view all link */}
      <div className="flex w-full items-center justify-between p-2">
        <div className="font-normal text-white text-base">Active Pools</div>
        <div className="font-normal text-[#92b1e3] text-base cursor-pointer">
          View all
        </div>
      </div>

      {/* Pool cards container */}
      <div className="flex items-center gap-6 w-full overflow-x-auto max-w-full">
        {activePools.map((pool) => (
          <Card
            key={pool.id}
            className="w-[282px] h-[151px] mb-4 bg-[#1b142d] rounded-xl border border-solid border-[#696e77] flex-shrink-0"
          >
            <CardContent className="p-0 h-full relative">
              {/* Pool icon */}
              <img
                className="absolute w-[29px] h-[29px] top-[15px] left-[11px] object-cover"
                alt="Pool icon"
                src={pool.icon}
              />

              {/* Pool title */}
              <div className="absolute top-[19px] left-[50px] font-m3-title-small text-white text-[length:var(--m3-title-small-font-size)] tracking-[var(--m3-title-small-letter-spacing)] leading-[var(--m3-title-small-line-height)] whitespace-nowrap">
                {pool.title}
              </div>

              {/* Active status indicator */}
              <div className="inline-flex items-center gap-[3px] absolute top-5 left-[227px]">
                <div className="w-1.5 h-1.5 bg-[#42bb51] rounded-[3px]" />
                <div className="font-normal text-white text-xs">Active</div>
              </div>

              {/* Reward section */}
              <div className="flex flex-col items-start gap-[3px] absolute top-[58px] left-[11px]">
                <div className="font-m3-body-small text-white text-[length:var(--m3-body-small-font-size)]">
                  Reward
                </div>
                <div className="font-normal text-base leading-4">
                  <span className="text-white">{pool.reward}</span>
                  <span className="text-white">&nbsp;</span>
                  <span className="font-medium text-[#a4a4a4] text-xs leading-[18px]">
                    {pool.currency}
                  </span>
                </div>
              </div>

              {/* Participants section */}
              <div className="flex flex-col items-start absolute top-[58px] right-[11px]">
                <div className="font-m3-body-small text-white text-[length:var(--m3-body-small-font-size)] text-right">
                  Participants
                </div>
                <div className="flex items-center justify-end gap-2 w-full">
                  <UserIcon className="w-[12.25px] h-[11.38px] text-white" />
                  <div className="font-semibold text-white text-base whitespace-nowrap">
                    {pool.participants}
                  </div>
                </div>
              </div>

              {/* Progress bar section */}
              <div className="flex flex-col w-[244px] items-start gap-1 absolute top-[103px] left-3">
                <div className="relative w-full h-2.5 bg-white rounded-xl overflow-hidden">
                  <div
                    className="h-2.5 rounded-[48px]"
                    style={{
                      width: `${pool.progress}%`,
                      backgroundColor: pool.progressColor,
                    }}
                  />
                </div>
                <div className="w-full font-normal text-white text-sm leading-[21px]">
                  {pool.progress}%
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
