import {
  LucideIcon,
  LayoutDashboard,
  Landmark,
  ChartCandlestick,
  Settings,
  GlobeLock,
  CircleHelp,
  Bitcoin,
  Building2,
  ShoppingBag,
  CreditCard,
  UserRoundCheck,
  ArrowLeftRight,
  HandCoins,
  Wallet,
  ChartNoAxesCombined,
} from "lucide-react";

interface INavItem {
  title: string;
  icon: LucideIcon;
  link: string;
  isBeta?: boolean;
  subItems: INavSubItem[];
}

interface INavSubItem {
  title: string;
  icon: LucideIcon;
}

interface ISupportItem {
  title: string;
  icon: LucideIcon;
  link: string;
}

export const navItems: INavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    link: "/app/dashboard",
    subItems: [
      {
        title: "Balance",
        icon: Wallet,
      },
      {
        title: "Finance",
        icon: HandCoins,
      },
      {
        title: "Statistics",
        icon: ChartNoAxesCombined,
      },
    ],
  },
  {
    title: "Bank Application",
    icon: Landmark,
    link: "/app/bank",
    subItems: [
      {
        title: "Accounts",
        icon: UserRoundCheck,
      },
      {
        title: "Cards",
        icon: CreditCard,
      },
      {
        title: "Transactions",
        icon: ArrowLeftRight,
      },
    ],
  },
  {
    title: "Trading",
    icon: ChartCandlestick,
    link: "/app/trading",
    isBeta: true,
    subItems: [
      {
        title: "Spot",
        icon: Bitcoin,
      },
      {
        title: "Stocks",
        icon: Building2,
      },
      {
        title: "Markets",
        icon: ShoppingBag,
      },
    ],
  },
];

export const supportItems: ISupportItem[] = [
  {
    title: "Settings",
    icon: Settings,
    link: "settings",
  },
  {
    title: "Security",
    icon: GlobeLock,
    link: "#",
  },
  {
    title: "Help",
    icon: CircleHelp,
    link: "#",
  },
];
