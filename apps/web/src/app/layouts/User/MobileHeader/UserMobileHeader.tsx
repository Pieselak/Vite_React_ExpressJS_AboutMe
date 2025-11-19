import { useState } from "react";
import {
  LanguagesIcon,
  MenuIcon,
  MoonStarIcon,
  SunIcon,
  XIcon,
} from "lucide-react";
import type { navigationItem } from "@/app/layouts/User/User.layout.tsx";
import { Link, useLocation } from "react-router-dom";
import useThemeMode from "@/app/hooks/useThemeMode.ts";
import { useTranslation } from "react-i18next";

type UserMobileHeaderProps = {
  navigationItems: navigationItem[];
};

export function UserMobileHeader({ navigationItems }: UserMobileHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useThemeMode();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <header className="flex justify-start items-center w-full gap-2.5 my-3">
      <div className="flex justify-between items-center gap-2.5 px-3">
        <button
          onClick={() => {
            setMenuOpen(true);
          }}
          className="flex items-center p-2.5 bg-card rounded-xl border-2 border-border hover:border-ring cursor-pointer"
        >
          <MenuIcon className="size-4.5" />
        </button>
      </div>
      {menuOpen && (
        <div className="fixed flex flex-col justify-center items-center top-0 w-full p-3 gap-2.5 bg-card/95 backdrop-blur-sm border-b-2 border-border">
          <div className="flex flex-row items-center justify-between w-full gap-2">
            <button
              onClick={() => {
                setMenuOpen(false);
              }}
              className="flex items-center p-2.5 bg-card rounded-xl border-2 border-border hover:border-ring cursor-pointer"
            >
              <XIcon className="size-4.5" />
            </button>
            <div className="flex justify-between items-center gap-2.5">
              <Link
                to="/language"
                className="flex items-center p-2.5 bg-card rounded-xl border-2 border-border hover:border-ring cursor-pointer"
              >
                <LanguagesIcon className="size-4.5" />
              </Link>
              <button
                className="flex items-center p-2.5 bg-card rounded-xl border-2 border-border hover:border-ring cursor-pointer"
                onClick={() => {
                  setThemeMode(themeMode === "light" ? "dark" : "light");
                }}
              >
                {themeMode === "light" ? (
                  <MoonStarIcon className="size-4.5" />
                ) : (
                  <SunIcon className="size-4.5" />
                )}
              </button>
            </div>
          </div>
          <nav className="flex w-full flex-col justify-center items-center gap-2">
            {navigationItems.map((navigationItem) => (
              <Link
                key={navigationItem.url}
                to={navigationItem.url}
                className={`flex w-full gap-3 items-center border border-border px-3 py-2 rounded-md hover:border-ring cursor-pointer ${
                  pathname.split("/")[1] === navigationItem.url.substring(1)
                    ? "bg-accent/30 border-ring text-accent-foreground"
                    : ""
                }`}
              >
                {navigationItem.icon && (
                  <navigationItem.icon className="size-4.5" />
                )}
                {t(`user.nav.${navigationItem.label}`)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
