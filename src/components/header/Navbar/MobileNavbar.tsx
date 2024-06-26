import React from "react";

import { CloseCircleIcon, MenuIcon } from "@/components/Icon";
import ClusterSelect from "../ClusterSelect";
import { useLocale } from "next-intl";
import useTrans from "@/hook/useTrans";
import { Image, Link } from "@nextui-org/react";
import DropdownNavbar from "./DropdownNavbar";
import LocaleSelect from "../localeComponent/LocaleSelect";
import CustomDropdown from "./CustomDropdown";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const locale = useLocale();
  const t = useTrans("header");

  const navlink = [
    {
      label: "project",
      value: `/${locale}/list`,
    },
    {
      label: "launchpad",
      children: [
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
      ],
    },
    {
      label: "pump",
      value: `https://pumpwithme.antsale.finance/en`,
    },
  ];

  return (
    <div className="md:hidden">
      <div onClick={() => setIsMenuOpen(true)}>
        <MenuIcon />
      </div>
      <div
        className={`fixed left-0 right-0 bottom-0 top-0 bg-white z-50 ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0"
            : "pointer-events-none translate-y-[-100%]"
        }
        transition-all duration-1000
        overflow-scroll
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <ClusterSelect />
            <div onClick={() => setIsMenuOpen(false)}>
              <CloseCircleIcon />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            {navlink.map((link: any, idx: number) => (
              <>
                {link.value && (
                  <Link
                    key={idx}
                    href={
                      link.isHaveStepper ? link.value + "/step-1" : link.value
                    }
                    className="text-sm leading-5 font-semibold text-default-500 py-3 w-full justify-center"
                  >
                    {t(link.label)}
                  </Link>
                )}
                {link.children && (
                  <CustomDropdown
                    data={link.children}
                    title={link.label}
                  />
                )}
              </>
            ))}
          </div>
          <div className="flex flex-col gap-2 items-center justify-center mt-10">
            <Link
              href={"/faq"}
              className="text-sm leading-5 font-semibold text-default-500 py-3 w-full justify-center"
            >
              {t("faq")}
            </Link>
            <DropdownNavbar />
          </div>
          <div className="flex items-center justify-center flex-col mt-auto gap-6 mb-6">
            <LocaleSelect />
            <div className="flex items-center gap-x-2">
              <Link
                href={"https://x.com/antsale_finance"}
                isExternal
              >
                <Image
                  src="/image/footer/twitter.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </Link>
              <Link
                href={"https://t.me/antsale_finance"}
                isExternal
              >
                <Image
                  src="/image/footer/telegram.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
