import React from "react";
import { Badge } from "../ui/Badge";
import { Card, CardContent } from "../ui/Card";
import { Progress } from "../ui/Progress";

// The task card data
export const DiscoveryComponent = () => {
  const taskCards = [
    {
      id: 1,
      title: "Gamification redefined with Canto",
      iconUrl: "https://c.animaapp.com/mape9fpqRrS3ik/img/frame-98.svg",
      amount: "0.1",
      currency: "USDT",
      popularity: "184k",
      progressPercentage: 30,
      status: "Active",
    },
    {
      id: 2,
      title: "Gamification redefined with Canto",
      iconUrl: "https://c.animaapp.com/mape9fpqRrS3ik/img/frame-98-3.svg",
      amount: "0.05",
      currency: "USDT",
      popularity: "245k",
      progressPercentage: 75,
      status: "Active",
    },
    {
      id: 3,
      title: "BitDuck Market place",
      iconUrl: "https://c.animaapp.com/mape9fpqRrS3ik/img/frame-98-1.svg",
      amount: "0.1",
      currency: "USDT",
      popularity: "1.5k",
      progressPercentage: 24,
      status: "Active",
    },
    {
      id: 4,
      title: "Listen to Iceberg ft. JohnnyP",
      iconUrl: "https://c.animaapp.com/mape9fpqRrS3ik/img/frame-98-4.svg",
      amount: "0.1",
      currency: "USDT",
      popularity: "588k",
      progressPercentage: 0,
      status: "Finished",
    },
    {
      id: 5,
      title: "Rate Bubble Finance",
      iconUrl: "https://c.animaapp.com/mape9fpqRrS3ik/img/frame-98-2.svg",
      amount: "0.1",
      currency: "USDT",
      popularity: "658",
      progressPercentage: 10,
      status: "Active",
    },
  ];

  return (
    <section className="flex flex-col w-full gap-6">
      {taskCards.map((card) => (
        <Card
          key={card.id}
          className="relative h-[92px] bg-[#08000f] rounded-xl w-full overflow-hidden border-0"
        >
          <CardContent className="p-0">
            <div
              className="absolute w-[61px] h-[61px] top-[13px] left-[17px] rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${card.iconUrl})` }}
            />

            <div className="absolute top-[18px] left-[99px] font-medium text-white text-sm tracking-[0] leading-normal whitespace-nowrap font-['Roboto',Helvetica]">
              {card.title}
            </div>

            <div className="flex w-[59px] items-center gap-[3px] absolute top-[41px] left-[99px]">
              <div className="relative mt-[-1.00px] font-normal text-base tracking-[0] leading-4 font-['Roboto',Helvetica]">
                <span className="text-white">{card.amount}</span>
                <span className="font-['Nunito',Helvetica] text-white leading-[18px]">
                  &nbsp;
                </span>
                <span className="text-[#a4a4a4] font-BODY-medium text-[length:var(--BODY-medium-font-size)] leading-[var(--BODY-medium-line-height)]">
                  {card.currency}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 absolute top-[39px] left-[171px]">
              <img
                className="relative w-[12.25px] h-[11.38px]"
                alt="Vector"
                src="https://c.animaapp.com/mape9fpqRrS3ik/img/vector.svg"
              />
              <div className="relative mt-[-1.00px] font-normal text-white text-base tracking-[0] leading-normal whitespace-nowrap font-['Roboto',Helvetica]">
                {card.popularity}
              </div>
            </div>

            <div className="absolute w-[230px] h-2.5 top-[67px] left-[99px] bg-white rounded-xl overflow-hidden">
              <Progress
                value={card.progressPercentage}
                className="h-2.5 rounded-[48px] [background:linear-gradient(90deg,rgba(59,130,246,1)_0%,rgba(147,51,234,1)_81%)]"
              />
            </div>

            <div className="inline-flex items-center gap-[3px] absolute top-1 left-[295px]">
              {card.status === "Active" && (
                <div className="relative w-1.5 h-1.5 bg-[#42bb51] rounded-[3px]" />
              )}
              <Badge
                variant="outline"
                className="border-0 bg-transparent p-0 h-auto"
              >
                <span className="font-BODY-regular text-[#c7c7c8] text-[length:var(--BODY-regular-font-size)] tracking-[var(--BODY-regular-letter-spacing)] leading-[var(--BODY-regular-line-height)]">
                  {card.status}
                </span>
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
