import BorderContent from '@/components/detail/BorderContent'
import React from 'react'
import PumpProjectInfo from './PumpProjectInfo'
import { Image, Progress } from '@nextui-org/react'

export default function PumpRightProjectInfo() {
  return (
    <BorderContent>
    <div className="flex flex-col gap-6">
      <PumpProjectInfo />
      <div>
        <p className="text-sm leading-[22px] text-[#1C1C1E] mb-1">
          Bonding curve progress <span className="text-[#8E8E93]">(84.13%)</span>
        </p>
        <Progress
          value={84.13}
          color="success"
        />
      </div>
      <p className="text-sm leading-[24px] text-[#1C1C1E]">
        when the market cap reaches $60.140 all the liquidity from the
        bonding curve will be deposited into Raydium and burned. progression
        increases as the price goes up.
        <br />
        <br />
        there are 164.085.674 tokens still available for sale in the bonding
        curve and there is 42,502 SOL in the bonding curve.
      </p>
      <div>
        <div className="flex items-center gap-x-2 mb-1">
          <Image
            src="/image/pumpwithme/crown.png"
            className="w-[36px] h-[36px] object-cover object-center"
          />
          <p className="text-lg leading-[22px] text-[#1C1C1E]">
            King of the hill progress <span className="text-[#8E8E93]">(84.13%)</span>
          </p>
        </div>
        <Progress
          value={84.13}
          color="warning"
        />
         <p className="text-sm leading-[22px] text-[#1C1C1E] mt-1">dethrone the current king at a $29.166 mcap</p>
      </div>
    </div>
  </BorderContent>
  )
}
