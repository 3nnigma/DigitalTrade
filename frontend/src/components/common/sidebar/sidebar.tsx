import Link from "next/link";
import { SidebarFooter, SidebarHeader } from "./sidebarComponents";
import { navItems, supportItems } from "./sidebarItems";

export default function Sidebar() {
  return (
    <div className="w-80 font-bold h-[calc(100vh)] max-w-sm shadow-inner border-[rgba(209, 213, 219, 0.7)] bg-section-gradient dark:bg-section-gradient-dark dark:border-[rgba(255,255,255,0.10)] group">
      <SidebarHeader />
      <div className="h-[88%] w-full font-sans">
        <div className="p-3 mb-4">
          <p className="opacity-70 m-2.5 uppercase text-sm">General</p>
          {navItems.map((nItem, index) => (
            <div key={index}>
              <Link
                href={nItem.link}
                className="hover:bg-hoverbg py-1.5 px-2 rounded transition-all my-1.5 flex  items-center"
              >
                <div className="flex items-center">
                  {<nItem.icon size={18} />}
                  <span className="ml-3">{nItem.title} </span>
                </div>
                {nItem.isBeta && <span className="font-normal ml-5 bg-sky-500 rounded-t-full rounded-br-full p-1 h-[14px] w-11 flex justify-center text-white items-center text-xs font-mono">Beta</span>}
              </Link>
              <div className="flex flex-col border-l mb-[26px] border-gray-300 h-[90px] dark:border-gray-700 ml-4">
                {nItem.subItems.map((subItem, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-gray-300 dark:text-gray-600">⎯</span>
                    <span
                      key={index}
                      className="flex opacity-80 items-center m-1.5 pl-1.5"
                    >
                      {<subItem.icon size={18} />}
                      <span className="ml-2.5 opacity-80 cursor-default transition-all hover:opacity-100 hover:ml-3">
                        {subItem.title}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-[#e3e3e75c] dark:border-[#ffffff0f]  ">
          <p className="opacity-70 m-2.5 uppercase text-sm">Support</p>
          {supportItems.map((sItem, index) => (
            <Link
              key={index}
              href={sItem.link}
              className="hover:bg-hoverbg py-1.5 px-2 rounded transition-all my-1 flex items-center"
            >
              {<sItem.icon size={18} />}
              <span className="ml-3">{sItem.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <SidebarFooter />
    </div>
  );
}
