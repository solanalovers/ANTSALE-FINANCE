import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Image, Link } from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="container mx-auto ">
      <p className="text-center py-10 border-b border-b-divider border-dashed">
        Disclaimer: Solsale.fi will never endorse or encourage that you invest
        in any of the projects listed and therefore, accept no liability for any
        loss occasioned. It is the user(s) responsibility to do their own
        research and seek financial advice from a professional. More information
        about (DYOR) can be found via{" "}
        <Link
          className="font-medium text-primary underline"
          href={""}
          isExternal
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
              src="/image/social/twitter.png"
              width={"40px"}
              height={"40xp"}
            />
          </Link>
          <Link
            href={""}
            isExternal
          >
            <Image
              src="/image/social/telegram.png"
              width={"40px"}
              height={"40xp"}
            />
          </Link>
          <Link
            href={""}
            isExternal
          >
            <Image
              src="/image/social/discord.png"
              width={"40px"}
              height={"40xp"}
            />
          </Link>
          <Link
            href={""}
            isExternal
          >
            <Image
              src="/image/social/facebook.png"
              width={"40px"}
              height={"40xp"}
            />
          </Link>
        </div>
        <div className="flex items-center gap-x-6">
          <p>INTERFACE</p>
          <div
            className="flex items-center gap-x-2"
            onClick={() => setTheme("light")}
          >
            <SunIcon
              color={theme === "light" ? "#006FEE" : "#8E8E93"}
              width={"24px"}
              height={"24px"}
            />
            <p
              className={`font-medium ${
                theme === "light" ? "text-primary" : "text-[#8E8E93]"
              }`}
            >
              Light Mode
            </p>
          </div>
          <div
            className="flex items-center gap-x-2"
            onClick={() => setTheme("dark")}
          >
            <MoonIcon
              color={theme === "dark" ? "#006FEE" : "#8E8E93"}
              width={"24px"}
              height={"24px"}
            />
            <p
              className={`font-medium ${
                theme === "dark" ? "text-primary" : "text-[#8E8E93]"
              }`}
            >
              Dark Mode
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
