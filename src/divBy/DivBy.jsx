import React from "react";
import { Card, CardContent } from "../ui/Card";
import { ScrollArea } from "../ui/Scroll-area";

export const DivByAnima = () => {
  // Activity data for mapping
  const activityItems = [
    { id: 1, text: "Followed @canto_gamie", time: "25 mins" },
    { id: 2, text: "Followed @canto_gamie", time: "25 mins" },
    { id: 3, text: "Followed @canto_gamie", time: "25 mins" },
    { id: 4, text: "Followed @canto_gamie", time: "25 mins" },
    { id: 5, text: "Followed @canto_gamie", time: "25 mins" },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-[18px]">
      <div className="flex items-center justify-between w-full p-2">
        <h3 className="font-['Roboto',Helvetica] font-semibold text-white text-base leading-6">
          Recent Activity
        </h3>

        <button className="font-global-tokens-body-b-1 font-[number:var(--global-tokens-body-b-1-font-weight)] text-[#92b1e3] text-[length:var(--global-tokens-body-b-1-font-size)] tracking-[var(--global-tokens-body-b-1-letter-spacing)] leading-[var(--global-tokens-body-b-1-line-height)] [font-style:var(--global-tokens-body-b-1-font-style)]">
          View all
        </button>
      </div>

      <Card className="w-full bg-[#2c2c30] mb-3 rounded-lg border-none">
        <CardContent className="p-0">
          <ScrollArea className="h-[179px]">
            <div className="p-[11px] space-y-[12px]">
              {activityItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between w-full"
                >
                  <div className="inline-flex items-center gap-[22px]">
                    <div className="w-9 h-9 bg-[#100e01] rounded-[5px] flex items-center justify-center">
                      <img
                        className="w-6 h-6"
                        alt="Icon park telegram"
                        src="https://c.animaapp.com/map8oozdb5hcEE/img/icon-park-telegram.svg"
                      />
                    </div>

                    <span className="font-BODY-regular font-[number:var(--BODY-regular-font-weight)] text-white text-[length:var(--BODY-regular-font-size)] tracking-[var(--BODY-regular-letter-spacing)] leading-[var(--BODY-regular-line-height)] [font-style:var(--BODY-regular-font-style)]">
                      {item.text}
                    </span>
                  </div>

                 
                  <p className="text-[#8a878780]">{item.time}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};
