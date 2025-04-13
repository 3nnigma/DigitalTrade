"use client";

// import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// import { Button } from "@/components/ui/buttons/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdownMenu";

// export function ModeToggle() {
//   const { setTheme } = useTheme();

//   return (
//     <div>
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="outline" size="icon">
//             <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//             <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//             <span className="sr-only">Toggle theme</span>
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end">
//           <DropdownMenuItem onClick={() => setTheme("light")}>
//             Light
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => setTheme("dark")}>
//             Dark
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => setTheme("system")}>
//             System
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }

import { cn } from "@/lib/utils";
import { useState } from "react";

export const ThemeSwitcherButton = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [themeState, setThemeState] = useState(theme);

  const handleSwitchTheme = () => {
    if (resolvedTheme === "dark") {
      setThemeState("light")
      setTimeout(() => setTheme("light"), 1250);
    }
    if (resolvedTheme === "light") {
      setThemeState("dark")
      setTimeout(() => setTheme("dark"), 1250);
    }
  };
  return (
    <button
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-neutral-500/10 bg-white px-2 py-1 font-medium text-neutral-600 tracking-tight hover:bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
      onClick={handleSwitchTheme}
      type="button"
    >
      <span
        className={cn(
          "relative size-6 scale-75 rounded-full bg-gradient-to-tr",
        )}
      >
        <span
          className={cn(
            "absolute top-0 left-0 z-10 h-full w-full transform-gpu rounded-full bg-gradient-to-tr from-indigo-400 to-sky-200 transition-color duration-500",
            themeState === "dark" ? "scale-100" : "scale-90",
          )}
        />
        <span
          className={cn(
            "absolute top-0 left-0 z-10 h-full w-full transform-gpu rounded-full bg-gradient-to-tr from-rose-400 to-amber-300 transition-color duration-500 dark:from-rose-600 dark:to-amber-600",
            themeState === "light" ? "opacity-100" : "opacity-0",
          )}
        />
        <span
          className={cn(
            "absolute top-0 right-0 z-20 size-4 origin-top-right transform-gpu rounded-full bg-white transition-transform duration-500 group-hover:bg-neutral-100 dark:bg-neutral-800 group-hover:dark:bg-neutral-700",
            themeState === "dark" ? "scale-100" : "scale-0",
          )}
        />
      </span>
      <span className="relative h-6 w-12">
        <span
          className={cn(
            "absolute top-0 left-0 transition-all duration-1000",
            themeState === "light"
              ? "-translate-y-4 opacity-0 blur-lg"
              : "translate-y-0 opacity-100 blur-0",
          )}
        >
          Dark
        </span>
        <span
          className={cn(
            "absolute top-0 left-0 transition-all duration-1000",
            themeState === "dark"
              ? "translate-y-4 opacity-0 blur-lg"
              : "translate-y-0 opacity-100 blur-0",
          )}
        >
          Light
        </span>
      </span>
    </button>
  );
};

export default ThemeSwitcherButton;
