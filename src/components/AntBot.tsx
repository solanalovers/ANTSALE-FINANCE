import React from "react";
import BorderContent from "./detail/BorderContent";
import { Button, Image, Link, Textarea } from "@nextui-org/react";
import { useWallet } from "@solana/wallet-adapter-react";

export default function AntBot() {
  const { publicKey } = useWallet();
  const listRobot = [
    "ant01.png",
    "ant02.png",
    "ant03.png",
    "ant04.png",
    "ant05.png",
    "ant06.png",
    "ant07.png",
    "ant08.png",
    "ant09.png",
    "ant10.png",
  ];
  const listActive = [];
  return (
    <BorderContent>
      <div className="flex flex-col gap-y-4">
        <p className="text-center text-primary text-xl leading-8 font-semibold">
          OWN YOUR ANTROBOT COLLECTION <br />
          and GET A LOT OF REWARDS
        </p>
        {publicKey && (
          <div className="flex items-center gap-2">
            {listRobot.map((item, idx) => (
              <div
                className={`relative rounded-[14px] ${
                  idx > listActive.length - 1 &&
                  "grayscale border border-[2px] border-dashed"
                }`}
              >
                <Image
                  src={`/image/ant-robot/${item}`}
                  key={idx}
                />
                {idx <= listActive.length - 1 && (
                  <div className="absolute left-0 bottom-0 bg-primary w-4 h-4 z-50 flex items-center justify-center rounded-bl-[4px] rounded-tr-[4px]">
                    <p className="text-white text-[10px]">{idx + 1}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        <Button
          color="primary"
          isDisabled
        >
          MINT YOUR ANTROBOT (0/10)
        </Button>
        <div className="grid grid-cols-2 gap-4 items-center">
          <Image src={`/image/ant-robot/${listRobot[listActive.length]}`} />
          <div>
            <p className="text-xl leading-7 font-bold">Silly AntSam</p>
            <p className="text-base leading-6 font-semibold">SANT</p>
            <p className="text-base leading-6">
              Always pulling pranks, but a master problem-solver.
            </p>
          </div>
        </div>
        <div>
          <p className="mb-1 text-base leading-[34px] font-semibold">
            HOW TO PLAY
          </p>
          <div className="flex gap-3 py-3">
            <div className="flex flex-col gap-2 items-center">
              <div className="w-[32px] h-[32px] bg-primary flex items-center justify-center rounded-full relative">
                <p className="text-white text-base leading-6 font-medium">01</p>
              </div>
              <svg
                width="1"
                height="17"
                viewBox="0 0 1 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="17"
                  x2="0.500001"
                  y2="-2.18557e-08"
                  stroke="#005BC4"
                  strokeDasharray="6 6"
                />
              </svg>

              <div className="w-[32px] h-[32px] bg-primary flex items-center justify-center rounded-full relative flex-shrink-0">
                <p className="text-white text-base leading-6 font-medium">02</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-base leading-6 font-medium">Step 1</p>
                <p className="text-sm">Connect your SOLANA wallet</p>
              </div>
              <div>
                <p className="text-base leading-6 font-medium">Step 2</p>
                <p className="text-sm">
                  Click the MINT YOUR ANTROBOT button. Each time you can claim
                  one ANTROBOT and can claim up to 10 times
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-1 text-base leading-6 font-semibold">
            What Are the Benefits?
          </p>
        </div>
        <div>
          <div className="flex items-center mb-1 gap-x-1">
            <Image src="/image/giftbox.png" />
            <p className="text-sm font-medium">AntSale Supper Airdrop 🪂</p>
          </div>
          <p className="text-sm leading-[22px]">
            Each AntRobot NFT minted with a wallet connected to AntSale Zealy
            earns 200 XP!
          </p>
          <div>
            <p className="text-sm leading-[22px] inline">More details: </p>
            <Link
              href={"https://x.com/antsale_finance/status/1798701373686747244"}
              isExternal
              className="text-sm leading-[22px]"
              underline="always"
            >
              https://x.com/antsale_finance/status/1798701373686747244
            </Link>
          </div>
          <div>
            <p className="text-sm leading-[22px] inline">Zealy quests: </p>
            <Link
              href={"https://zealy.io/cw/antsalefinance/leaderboard"}
              isExternal
              className="text-sm leading-[22px]"
              underline="always"
            >
              https://zealy.io/cw/antsalefinance/leaderboard
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-1 gap-x-1">
            <Image src="/image/giftbox.png" />
            <p className="text-sm font-medium">$ANTF Fairlaunch Round 🌱</p>
          </div>
          <p className="text-sm leading-[22px]">
            {`Solana wallets holding AntRobot NFTs will be added to the WL Ref for
            the $ANTF Fairlaunch Sale.`}
          </p>
        </div>
        <div>
          <div className="flex items-center mb-1 gap-x-1">
            <Image src="/image/giftbox.png" />
            <p className="text-sm font-medium">$ANTF Fairlaunch 🚀</p>
          </div>
          <ul className="list-disc ml-6">
            <li>
              <p className="text-sm leading-[22px]">
                Earn $5 in $ANTF for each AntRobot NFT in your wallet (based on
                Fairlaunch rates, payable after Fairlaunch).
              </p>
            </li>
            <li>
              <p className="text-sm leading-[22px]">
                Claim up to 10 $ANTF (1 $ANTF per NFT) for free after the
                Fairlaunch ends.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center mb-1 gap-x-1">
            <Image src="/image/giftbox.png" />
            <p className="text-sm font-medium">Long-Term Benefits: ⏳</p>
          </div>
          <p className="text-sm leading-[22px]">
            Get early access, special pricing, and free airdrops for future
            projects listed on AntSale.
          </p>
        </div>
        <div>
          <div className="flex items-center mb-1 gap-x-1">
            <Image src="/image/giftbox-lg.png" />
            <p className="text-sm font-medium">
              Special Rewards of Mint all 10 NFT of AntRobot Collection
            </p>
          </div>
          <p className="text-sm leading-[22px]">
            💎 <span className="font-medium">WL Ref:</span>{" "}
            {`Receive 20 WL Ref! Invite friends to the Fairlaunch Sale and earn 5-10% referral rewards according to AntSale’s policy. 🤝`}
          </p>
          <p className="text-sm leading-[22px]">
            💎 <span className="font-medium">Cashback Bonus:</span>{" "}
            {`Use a wallet with all 10 NFTs to participate in the $ANTF Fairlaunch Sale and get an immediate 10% cashback in $SOL after the Fairlaunch Sale ends. 💵`}
          </p>
        </div>
        <div>
          <p className="text-sm leading-[22px] font-bold">
            {`The Solana Wallets that you'd like to invite to the $ANTF Fairlaunch Sale`}
          </p>
          <p className="text-sm leading-[22px]">
            {`Please add per wallet address in per row. You can add up to 20 addresses`}
          </p>
        </div>
        <Textarea
          variant="bordered"
          minRows={10}
          maxRows={20}
          isDisabled
        />
        <Button
          color="primary"
          size="lg"
          isDisabled
        >
          SUBMIT YOUR WL
        </Button>
      </div>
    </BorderContent>
  );
}
