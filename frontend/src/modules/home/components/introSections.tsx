// import { cn } from "@/lib/utils";
// import {
//   BadgeDollarSign,
//   BarChart,
//   Bell,
//   Cloud,
//   Coins,
//   HeartHandshake,
//   HelpCircle,
//   Link,
// } from "lucide-react";

// export function IntroSections() {
//   const features = [
//     {
//       title:,
//       description:

//       icon: <Coins />,
//     },
//     {
//       title: "Notifications for Every Transaction",
//       description:
//         "Receive instant notifications for all transactions and events on your accounts.",
//       icon: <Bell />,
//     },
//     {
//       title:
//       description:
//       icon: <Link />,
//     },
//     {
//       title:
//       description:

//       icon: <BarChart />,
//     },
//     {
//       title: "Flexible Pricing",
//       description:
//         "We offer the best market conditions with no hidden fees or subscriptions.",
//       icon: <BadgeDollarSign />,
//     },
//     {
//       title: "100% Uptime Guarantee",
//       description: "Our services are always available to you with no downtime.",
//       icon: <Cloud />,
//     },
//     {
//       title: "24/7 Support",
//       description:
//         "We're always available. Our team and AI agents are ready to assist you at any time.",
//       icon: <HelpCircle />,
//     },
//     {
//       title: "And Much More",
//       description:
//         "",
//       icon: <HeartHandshake />,
//     },
//   ];
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
//       {features.map((feature, index) => (
//         <Feature key={feature.title} {...feature} index={index} />
//       ))}
//     </div>
//   );
// }

// const Feature = ({
//   title,
//   description,
//   icon,
//   index,
// }: {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   index: number;
// }) => {
//   return (
//     <div
//       className={cn(
//         "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
//         (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
//         index < 4 && "lg:border-b dark:border-neutral-800",
//       )}
//     >
//       {index < 4 && (
//         <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
//       )}
//       {index >= 4 && (
//         <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
//       )}
//       <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
//         {icon}
//       </div>
//       <div className="text-lg font-bold mb-2 relative z-10 px-10">
//         <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
//         <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
//           {title}
//         </span>
//       </div>
//       <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
//         {description}
//       </p>
//     </div>
//   );
// };
