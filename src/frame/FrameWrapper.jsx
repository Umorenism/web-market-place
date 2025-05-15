// import { DollarSignIcon } from "lucide-react";
// import React from "react";
// import { Card, CardContent } from "../ui/Card";

// export const FrameWrapperByAnima = () => {
//   const cardData = [
//     {
//       id: 1,
//       title: "Total Pools",
//       value: "3",
//       background:
//         "bg-gradient-to-br from-[rgba(111,20,65,1)] to-[rgba(236,72,153,1)]",
//       icon: <DollarSignIcon className="h-4 w-4 text-white" />,
//       iconBackground: "bg-[#c59aeb]",
//     },
//     {
//       id: 2,
//       title: "Tasks completed",
//       value: "3",
//       background:
//         "bg-gradient-to-br from-[rgba(25,4,111,1)] to-[rgba(49,9,213,1)]",
//       icon: (
//         <img
//           className="w-[34px] h-[34px]"
//           alt="Check ring duotone"
//           src="https://c.animaapp.com/map8oozdb5hcEE/img/check-ring-duotone.svg"
//         />
//       ),
//     },
//     {
//       id: 3,
//       title: "Reward earned",
//       value: "$1.56",
//       background:
//         "bg-gradient-to-br from-[rgba(50,14,83,1)] to-[rgba(147,51,234,1)]",
//       icon: <DollarSignIcon className="h-4 w-4 text-white" />,
//       iconBackground: "bg-[#c59aeb]",
//     },
//   ];

//   return (
//     <div className="flex items-center gap-[17px]">
//       {cardData.map((card) => (
//         <Card
//           key={card.id}
//           className={`relative w-[116px] h-[75px] rounded-lg overflow-hidden ${card.background}`}
//         >
//           <CardContent className="p-0">
//             <div className="absolute w-[110px] top-[9px] left-[13px] font-BODY-medium font-[number:var(--BODY-medium-font-weight)] text-[length:var(--BODY-medium-font-size)] leading-[var(--BODY-medium-line-height)] text-white tracking-[var(--BODY-medium-letter-spacing)] [font-style:var(--BODY-medium-font-style)]">
//               {card.title}
//             </div>

//             <div className="absolute top-[41px] left-[13px] font-['Montserrat',Helvetica] font-semibold text-white text-base tracking-[0] leading-9">
//               {card.value}
//             </div>

//             {card.iconBackground ? (
//               <div
//                 className="flex flex-col w-6 h-6 items-center justify-center gap-2.5 px-[7px] py-1 absolute top-[39px] left-[86px] rounded-xl"
//                 style={{ backgroundColor: "#c59aeb" }}
//               >
//                 {card.icon}
//               </div>
//             ) : (
//               <div className="absolute top-[31px] left-[81px]">{card.icon}</div>
//             )}
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };






import { DollarSignIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/Card";

export const FrameWrapperByAnima = () => {
  const cardData = [
    {
      id: 1,
      title: "Total Pools",
      value: "3",
      background:
        "bg-gradient-to-br from-[rgba(111,20,65,1)] to-[rgba(236,72,153,1)]",
      icon: <DollarSignIcon className="h-4 w-4 text-white" />,
      iconBackground: "bg-[#c59aeb]",
    },
    {
      id: 2,
      title: "Tasks completed",
      value: "3",
      background:
        "bg-gradient-to-br from-[rgba(25,4,111,1)] to-[rgba(49,9,213,1)]",
      icon: (
        <img
          className="w-[20px] h-[20px]"
          alt="Check ring"
          src="https://c.animaapp.com/map8oozdb5hcEE/img/check-ring-duotone.svg"
        />
      ),
    },
    {
      id: 3,
      title: "Reward earned",
      value: "$1.56",
      background:
        "bg-gradient-to-br from-[rgba(50,14,83,1)] to-[rgba(147,51,234,1)]",
      icon: <DollarSignIcon className="h-4 w-4 text-white" />,
      iconBackground: "bg-[#c59aeb]",
    },
  ];

  return (
    <div className="flex gap-4 px-4 mt-4">
      {cardData.map((card) => (
        <Card
          key={card.id}
          className={`w-[150px] h-[90px] rounded-lg overflow-hidden ${card.background} p-3 text-white flex flex-col justify-between`}
        >
          <div className="text-xs font-medium">{card.title}</div>

          <div className="flex items-center justify-between">
            <span className="text-base font-semibold">{card.value}</span>
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                card.iconBackground || ""
              }`}
            >
              {card.icon}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
