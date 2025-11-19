import { Outlet } from "react-router-dom";
import {
  CandyIcon,
  FoldersIcon,
  HomeIcon,
  type LucideIcon,
  UserIcon,
} from "lucide-react";

import useIsMobile from "@/app/hooks/useIsMobile.ts";
import { UserFooter } from "@/app/layouts/User/Footer/UserFooter.tsx";
import { UserHeader } from "@/app/layouts/User/Header/UserHeader.tsx";
import { UserMobileHeader } from "@/app/layouts/User/MobileHeader/UserMobileHeader.tsx";

export type navigationItem = {
  label: string;
  icon?: LucideIcon;
  url: string;
};

export type footerItem = {
  label: string;
  icon?: LucideIcon;
  url?: string;
};

export type footerSections = {
  label: string;
  items: footerItem[];
};

const navigationItems: navigationItem[] = [
  { label: "home", icon: HomeIcon, url: "/home" },
  { label: "aboutme", icon: UserIcon, url: "/aboutme" },
  { label: "projects", icon: FoldersIcon, url: "/projects" },
  { label: "sugar", icon: CandyIcon, url: "/sugar" },
];

export function UserLayout() {
  const isMobile = useIsMobile();
  return (
    <div className="flex min-h-dvh flex-col justify-start items-center">
      {isMobile ? (
        <UserMobileHeader navigationItems={navigationItems} />
      ) : (
        <UserHeader navigationItems={navigationItems} />
      )}
      <main className="flex flex-1 p-3 w-full justify-center items-start overflow-hidden">
        <Outlet />
      </main>
      <UserFooter />
    </div>
  );
}
