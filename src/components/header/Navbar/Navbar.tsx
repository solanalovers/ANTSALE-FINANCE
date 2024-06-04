import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import DropdownNavbar from "./DropdownNavbar";
import Link from "next/link";
import useTrans from "@/hook/useTrans";

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const { theme } = useTheme();
  const t = useTrans("header");

  const navlink = [
    {
      label: "project",
      value: `/${locale}/list`,
    },
    {
      label: "token",
      value: `/${locale}/create-token`,
    },
    {
      label: "presale",
      value: `/${locale}/create-presale`,
      isHaveStepper: true,
    },
    {
      label: "fairlaunch",
      value: `/${locale}/create-fairlaunch`,
      isHaveStepper: true,
    },
    {
      label: "multichain",
      value: `/${locale}/create-multichain`,
      isHaveStepper: true,
    },
    {
      label: "pump",
      value: `/${locale}/pumpwithme`,
    },
  ];

  return (
    <div className="flex container mx-auto pt-4 pb-[10px] justify-between">
      <div className="flex items-center">
        {navlink.map((link: any, idx: number) => (
          <Link
            key={idx}
            href={link.isHaveStepper ? link.value + "/step-1" : link.value}
            className={`mx-3 text-sm leading-5 relative text-default-500 font-semibold ${
              theme === "dark" ? "header-link" : "header-link light"
            } ${
              (pathname === link.value ||
                pathname.startsWith(`${link.value}/step-`)) &&
              "text-primary font-bold after:absolute after:h-[2px] after:bg-primary after:w-full after:left-0 after:bottom-[-10px]"
            }
            hover:opacity-50`}
          >
            {t(link.label)}
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <Link
          href={"/faq"}
          className={`mx-3 text-sm leading-5 text-default-500 font-semibold ${
            theme === "dark" ? "header-link" : "header-link light"
          } ${pathname === "FAQ" && "text-primary font-bold"}
          hover:opacity-50
          `}
        >
          {t("faq")}
        </Link>
        {/* <Link
          href={"/services"}
          className={`mx-3 text-sm leading-5 text-default-500 font-semibold ${
            theme === "dark" ? "header-link" : "header-link light"
          } ${pathname === "services" && "text-primary font-bold"}`}
        >
          MY SERVICES
        </Link> */}
        <DropdownNavbar />
      </div>
    </div>
  );
}
