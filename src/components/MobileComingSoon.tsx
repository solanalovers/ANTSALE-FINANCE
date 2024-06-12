import { Image } from "@nextui-org/react";
import React from "react";

export default function MobileComingSoon() {
  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <Image
          src="/image/logo-ant.png"
          radius="none"
        />
      </div>
      <div className="container mx-auto my-10">
        <p className="text-base leading-6">
          <span className="text-[28px] leading-6 font-semibold">
            {`Welcome to AntSale!`}
          </span>
          <br />
          <br />
          {`Discover AntSale, your premier launchpad for connecting with the most
          promising projects in the blockchain space. Join us and be at the
          forefront of innovation!`}
          <br />
          <br />
          {`For the best experience and full access to all features, please use a
          tablet or PC.`}
          <br />
          <br />
          <span className="text-primary">
            {`Stay tuned – our mobile version is coming soon for seamless access
            on the go.`}
          </span>
        </p>
      </div>
      <Image
        src="/image/landing/full-mobile.png"
        className="w-screen object-cover object-center"
        radius="none"
      />
    </div>
  );
}
