"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../Icon";
import { useEffect, useState } from "react";
import { Image, Link } from "@nextui-org/react";
import useTrans from "@/hook/useTrans";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [sunbg, setSunbg] = useState("#8E8E93");
  const [moonbg, setMoonbg] = useState("#8E8E93");
  const t = useTrans("footer");

  useEffect(() => {
    if (theme === "dark") {
      setMoonbg("#006FEE");
      setSunbg("#8E8E93");
    } else {
      setSunbg("#006FEE");
      setMoonbg("#8E8E93");
    }
  }, [theme]);

  return (
    <div className="mt-[72px]">
      <div className="h-2 bg-gradient-to-t from-[rgba(000,000,000,0.03)] to-transparent"></div>
      <div className="container mx-auto">
        <p className="text-center py-10 border-b border-b-divider border-dashed text-sm">
          {t("info")}{" "}
          <Link
            className="font-medium text-primary underline"
            href={
              "https://academy.binance.com/en/glossary/do-your-own-research"
            }
            isExternal
          >
            Binance Academy.
          </Link>
        </p>
        <div className="py-10 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <p>{t("follow")}</p>
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
            {/* <Link
              href={""}
              isExternal
            >
              <Image
                src="/image/footer/discord.png"
                alt=""
                width={40}
                height={40}
              />
            </Link>
            <Link
              href={""}
              isExternal
            >
              <Image
                src="/image/footer/facebook.png"
                alt=""
                width={40}
                height={40}
              />
            </Link> */}
          </div>
          <div className="flex items-center gap-x-6">
            <p>{t("interface")}</p>
            <div
              className="flex items-center gap-x-2"
              onClick={() => setTheme("light")}
            >
              <SunIcon color={sunbg} />
              <p className={`font-medium text-[${sunbg}]`}>{t("lightMode")}</p>
            </div>
            <div
              className="flex items-center gap-x-2 pointer-events-none"
              onClick={() => setTheme("dark")}
            >
              <MoonIcon
                // color={moonbg}
                color={"#ccc"}
              />
              <p className={`font-medium text-[#ccc]`}>{t("darkMode")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
