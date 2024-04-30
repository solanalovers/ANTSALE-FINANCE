import React, { useState } from "react";
import BorderContent from "../detail/BorderContent";
import {
  Button,
  Checkbox,
  Input,
  Radio,
  RadioGroup,
  Textarea,
} from "@nextui-org/react";
import TagSelect from "./TagSelect";
import { useWallet } from "@solana/wallet-adapter-react";

export default function CreateForm() {
  const [currentEdit, setCurrentEdit] = useState("token");
  const { publicKey } = useWallet();
  return (
    <BorderContent>
      <RadioGroup
        value={currentEdit}
        onChange={(e) => setCurrentEdit(e.target.value)}
      >
        <div className="flex items-center gap-x-10">
          <Radio value="token">Create new TOKEN</Radio>
          <Radio value="token-2022">Create new TOKEN-2022</Radio>
        </div>
      </RadioGroup>
      <div className="flex flex-col gap-y-6 mt-6">
        <div className="grid grid-cols-2 gap-x-6">
          <div className="flex flex-col gap-y-6">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              variant="bordered"
              isRequired
            />
            <Input
              type="text"
              label="Symbol"
              placeholder="Enter your symbol"
              variant="bordered"
              isRequired
            />
            <Input
              type="number"
              label="Decimals"
              placeholder="Enter your decimals"
              variant="bordered"
              isRequired
            />
            <Input
              type="number"
              label="Supply"
              placeholder="Enter your supply"
              variant="bordered"
              isRequired
            />
          </div>
          <div className="border-[2px] border-default-200 rounded-lg"></div>
        </div>
        <Textarea
          label="Description"
          placeholder="Enter your description"
          variant="bordered"
          isRequired
        />
        {currentEdit === "token-2022" && (
          <>
            <div className="grid grid-cols-2 gap-x-6">
              <div className="flex flex-col gap-y-6">
                <Input
                  type="text"
                  label="Website URL"
                  placeholder="http://reddit.com/abc"
                  variant="bordered"
                />
                <Input
                  type="text"
                  label="Telegram Group URL"
                  placeholder="http://reddit.com/abc"
                  variant="bordered"
                />
              </div>
              <div className="flex flex-col gap-y-6">
                <Input
                  type="text"
                  label="Twitter URL"
                  placeholder="http://youtube.com/abc"
                  variant="bordered"
                />
                <Input
                  type="text"
                  label="Discord URL"
                  placeholder="http://youtube.com/abc"
                  variant="bordered"
                />
              </div>
            </div>
            <TagSelect />
            <Checkbox className="items-start gap-2">
              <p className="text-base leading-[140%]">
                Are you going to Create a Liquidity Pool?
              </p>
              <p className="text-xs leading-[140%] text-[#718096]">
                {`If you want to create a liquidity pool you will need to "Revoke
                Freeze Authority" of the Token, you can do that here. The cost
                is FREE.`}
              </p>
            </Checkbox>
            <Checkbox className="items-start gap-2">
              <p className="text-base leading-[140%]">Revoke Mint Authority</p>
              <p className="text-xs leading-[140%] text-[#718096]">
                {`Revoking mint authority ensures that there can be no more tokens
                minted than the total supply. This provides security and peace
                of mind to buyers. The cost is FREE.`}
              </p>
            </Checkbox>
            <div className="-mx-6 border-t border-default-300 border-dashed" />
          </>
        )}
        <Button
          color="primary"
          className="w-fit mx-auto px-44 py-3 font-medium text-base leading-6"
        >
          {!publicKey ? "Connect your wallet" : "Create Token"}
        </Button>
      </div>
    </BorderContent>
  );
}
