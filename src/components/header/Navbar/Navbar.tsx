import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const { theme } = useTheme();

  const navlink = [
    {
      label: "FAIRLAUNCH LIST",
      value: `/${locale}`,
    },
    {
      label: "CREATE TOKEN",
      value: `/${locale}/create-token`,
    },
    {
      label: "CREATE PRESALE",
      value: `/${locale}/create-presale`,
      isHaveStepper: true,
    },
    {
      label: "CREATE FAIRLAUNCH",
      value: `/${locale}/create-fairlaunch`,
      isHaveStepper: true,
    },
    {
      label: "CREATE MULTICHAIN-LAUNCH",
      value: `/${locale}/create-multichain`,
      isHaveStepper: true,
    },
  ];

  return (
    <div className="flex container mx-auto py-4 justify-between">
      <div className="flex items-center">
        {navlink.map((link: any, idx: number) => (
          <Link
            key={idx}
            href={link.isHaveStepper ? link.value + "/step-1" : link.value}
            className={`mx-3 text-sm leading-5 relative ${
              theme === "dark" ? "header-link" : "header-link light"
            } ${
              (pathname === link.value ||
                pathname.startsWith(`${link.value}/step-`)) &&
              "text-primary font-bold after:absolute after:h-[2px] after:bg-primary after:w-full after:left-0 after:bottom-[-4px]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <Link
          href={"/faq"}
          className={`mx-3 text-sm leading-5 ${
            theme === "dark" ? "header-link" : "header-link light"
          } ${pathname === "FAQ" && "text-primary font-bold"}`}
        >
          FAQ
        </Link>
        <Link
          href={"/blog"}
          className={`mx-3 text-sm leading-5 ${
            theme === "dark" ? "header-link" : "header-link light"
          } ${pathname === "BLOG" && "text-primary font-bold"}`}
        >
          BLOG
        </Link>
      </div>
    </div>
  );
}
