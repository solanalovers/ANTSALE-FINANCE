"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../Icon";
import { useEffect, useState } from "react";
import { Image, Link } from "@nextui-org/react";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [sunbg, setSunbg] = useState("#8E8E93");
  const [moonbg, setMoonbg] = useState("#8E8E93");

  useEffect(() => {
    console.log(theme);
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
        <p className="text-center py-10 border-b border-b-divider border-dashed">
          Disclaimer: Solsale.fi will never endorse or encourage that you invest
          in any of the projects listed and therefore, accept no liability for
          any loss occasioned. It is the user(s) responsibility to do their own
          research and seek financial advice from a professional. More
          information about (DYOR) can be found via{" "}
          <Link
            className="font-medium text-primary underline"
            href={""}
          >
            Binance Academy.
          </Link>
        </p>
        <div className="py-10 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <p>FOLLOW US</p>
            <Link
              href={""}
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
              href={""}
              isExternal
            >
              <Image
                src="/image/footer/telegram.png"
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
            </Link>
          </div>
          <div className="flex items-center gap-x-6">
            <p>INTERFACE</p>
            <div
              className="flex items-center gap-x-2"
              onClick={() => setTheme("light")}
            >
              <SunIcon color={sunbg} />
              <p className={`font-medium text-[${sunbg}]`}>Light Mode</p>
            </div>
            <div
              className="flex items-center gap-x-2"
              onClick={() => setTheme("dark")}
            >
              <MoonIcon color={moonbg} />
              <p className={`font-medium text-[${moonbg}]`}>Dark Mode</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
