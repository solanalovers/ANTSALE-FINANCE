"use client";
import React, { useContext, useEffect, useState } from "react";
import BorderContent from "../detail/BorderContent";
import {
  Button,
  Checkbox,
  Image,
  Input,
  Link,
  Radio,
  RadioGroup,
  Spinner,
  Textarea,
} from "@nextui-org/react";
import TagSelect from "./TagSelect";
import { useWallet } from "@solana/wallet-adapter-react";
import CustomEditor from "../CustomEditor";
import UploadImage from "./UploadImage";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Stepper from "../Stepper";
import CustomDivider from "../CustomDivider";
import ToastItem from "../toast/ToastItem";
import { uploadData } from "@/function/uploadData";
import axios from "axios";
import { AppContext } from "@/provider/AppProvider";
import { Connection, Transaction } from "@solana/web3.js";
import useTrans from "@/hook/useTrans";
import { toast } from "react-toastify";
import { CheckIcon, CloseCircleIcon, CloseIcon } from "../Icon";

const listStep = [
  {
    title: "Step 1",
    desc: "Connect your Solana wallet",
  },
  {
    title: "Step 2",
    desc: "Specify the token name, token symbol, token image",
  },
  {
    title: "Step 3",
    desc: "Determine the Supply and Decimals of your Token.",
  },
  {
    title: "Step 4",
    desc: "Add more information about token: website, twitter (X), telegram, discord ... (optional)",
  },
  {
    title: "Step 5",
    desc: "Click on create, accept the transaction on your wallet and wait until your tokens ready.",
  },
];

export default function CreateForm() {
  const [currentEdit, setCurrentEdit] = useState("token");
  const [form, setForm] = useState<any>({});
  const { publicKey, sendTransaction } = useWallet();
  const [successData, setSuccessData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const t = useTrans("createToken");
  const { cluster } = useContext(AppContext);

  const [disableMintAuth, setDisableMintAuth] = useState(false);
  const [disableFreezeAuth, setDisableFreezeAuth] = useState(false);

  const createToken = async () => {
    try {
      const imageFile: File = form.image;
      const base64Image = await imageFile.arrayBuffer();
      const { arweave_id: image } = await uploadData(base64Image, true);

      const metadata = {
        image: image,
        name: form.name,
        symbol: form.symbol,
        description: form.description,
      };

      const { arweave_id: metadataUri } = await uploadData(metadata, false);

      const newForm = {
        ...form,
        uri: metadataUri,
      };

      let uri = process.env.NEXT_PUBLIC_BACKEND + "create-normal-token";
      if (currentEdit === "token-2022") {
        uri = process.env.NEXT_PUBLIC_BACKEND + "create-token-2022";
      }

      const res = await axios.post(uri, {
        form: newForm,
        publicKey: publicKey,
        isMainnet: cluster === 1,
        disableFreezeAuth: disableFreezeAuth,
        disableMintAuth: disableMintAuth,
      });

      if (res.data.data) {
        const bufferTxn = Buffer.from(res.data.data.transaction, "base64");
        const transaction = Transaction.from(bufferTxn);
        const connection = new Connection(
          cluster === 1
            ? process.env.NEXT_PUBLIC_HELIUS_RPC_MAINNET!
            : process.env.NEXT_PUBLIC_HELIUS_RPC_DEVNET!,
          "confirmed"
        );
        const signature = await sendTransaction(transaction, connection, {
          skipPreflight: true,
        });

        console.log(res);

        console.log("Create token signature: ", signature);


        setSuccessData({ ...form, address: res.data.data.mint });

        setForm({});
      } else {
        throw Error("Server is error");
      }
    } catch (error) {
      console.log("Error: ", error);
      toast(`Error:: ${error}`, {
        type: "error",
        position: "top-center",
        theme: "colored",
      });
    }
  };

  const valid: boolean =
    !!form.symbol &&
    !!form.image &&
    !!form.name &&
    !!form.decimals &&
    !!form.description &&
    !!form.supply;

  return (
    <BorderContent>
      <Stepper
        listStep={listStep}
        step={1}
        active
        type="createToken"
      />
      <CustomDivider />
      {successData && (
        <div
          className="bg-[#F0FFF4] px-6 mb-6 rounded-lg"
          style={{
            boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.1)",
          }}
        >
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2.5">
              <CheckIcon fill="#38A169" />
              <p className="text-base leading-7 font-semibold text-[#2D3748]">
                Your token has been successfully generated
              </p>
            </div>
            <div
              className="hover:opacity-50 cursor-pointer"
              onClick={() => setSuccessData(null)}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="flex items-center gap-x-3 pb-4">
            {successData?.image && (
              <Image
                src={window.URL.createObjectURL(successData.image)}
                className="w-[68px] h-[68px] rounded-md object-cover object-center"
              />
            )}
            <div>
              <p className="text-base leading-6 font-bold text-[rgba(0,0,0,0.8)]">
                {successData.name}
              </p>
              <p className="text-base leading-6 font-medium text-[#3182CE]">
                {successData.symbol}
              </p>
              <Link
                href={`https://explorer.solana.com/address/${successData?.address}`}
                className="text-base leading-6 text-[#3182CE] underline"
                isExternal
              >
                {successData?.address}
              </Link>
            </div>
          </div>
        </div>
      )}
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
              onChange={(e: any) =>
                setForm((prev: any) => ({ ...prev, name: e.target.value }))
              }
              value={form.name}
            />
            <Input
              type="text"
              label="Symbol"
              placeholder="Enter your symbol"
              variant="bordered"
              isRequired
              onChange={(e: any) =>
                setForm((prev: any) => ({ ...prev, symbol: e.target.value }))
              }
              value={form.symbol}
            />
            <Input
              type="number"
              label="Decimals"
              placeholder="Enter your decimals"
              variant="bordered"
              isRequired
              onChange={(e: any) =>
                setForm((prev: any) => ({ ...prev, decimals: e.target.value }))
              }
            />
            <Input
              type="number"
              label="Supply"
              placeholder="Enter your supply"
              variant="bordered"
              isRequired
              onChange={(e: any) =>
                setForm((prev: any) => ({ ...prev, supply: e.target.value }))
              }
            />
            <UploadImage
              value={form?.image}
              onChange={(e: any) =>
                setForm((prev: any) => ({ ...prev, image: e.target.files[0] }))
              }
              isRequired
            />
            <Textarea
              label="Description"
              placeholder="Description"
              variant="bordered"
              isRequired
              onChange={(e: any) =>
                setForm((prev: any) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
            <Checkbox
              className="items-start gap-2"
              checked={disableFreezeAuth}
              onChange={(e: any) => setDisableFreezeAuth(e.target.checked)}
            >
              <p className="text-base leading-[140%]">
                Are you going to Create a Liquidity Pool?
              </p>
              <p className="text-xs leading-[140%] text-[#718096]">
                {`If you want to create a liquidity pool you will need to "Revoke
                Freeze Authority" of the Token, you can do that here. The cost
                is FREE.`}
              </p>
            </Checkbox>
            <Checkbox
              className="items-start gap-2"
              checked={disableMintAuth}
              onChange={(e: any) => setDisableMintAuth(e.target.checked)}
            >
              <p className="text-base leading-[140%]">Revoke Mint Authority</p>
              <p className="text-xs leading-[140%] text-[#718096]">
                {`Revoking mint authority ensures that there can be no more tokens
                minted than the total supply. This provides security and peace
                of mind to buyers. The cost is FREE.`}
              </p>
            </Checkbox>
          </div>
          {currentEdit === "token-2022" && (
            <div>
              <div className="flex flex-col gap-y-6">
                <Input
                  type="text"
                  label="Website URL"
                  placeholder="http://reddit.com/abc"
                  variant="bordered"
                  onChange={(e: any) =>
                    setForm((prev: any) => ({ ...prev, url: e.target.value }))
                  }
                />
                <Input
                  type="text"
                  label="Telegram Group URL"
                  placeholder="http://reddit.com/abc"
                  variant="bordered"
                  onChange={(e: any) =>
                    setForm((prev: any) => ({
                      ...prev,
                      telegram: e.target.value,
                    }))
                  }
                />

                <Input
                  type="text"
                  label="Twitter URL"
                  placeholder="http://youtube.com/abc"
                  variant="bordered"
                  onChange={(e: any) =>
                    setForm((prev: any) => ({
                      ...prev,
                      twitter: e.target.value,
                    }))
                  }
                />
                <Input
                  type="text"
                  label="Discord URL"
                  placeholder="http://youtube.com/abc"
                  variant="bordered"
                  onChange={(e: any) =>
                    setForm((prev: any) => ({
                      ...prev,
                      discord: e.target.value,
                    }))
                  }
                />
                <TagSelect
                  tagList={form.tags}
                  handleAddTag={(e: any) =>
                    setForm((prev: any) => ({
                      ...prev,
                      tags: [...e],
                    }))
                  }
                />
              </div>
            </div>
          )}
        </div>
        <div className="rounded-lg overflow-hidden">
          <ToastItem
            status="info"
            content={`${t("cost")} SPL TOKEN: ~0.02 SOL`}
          />
        </div>
        <div className="-mx-6 border-t border-default-300 border-dashed" />
        <div
          color="primary"
          className={`w-fit mx-auto px-44 py-3 font-medium text-base leading-6 h-10 bg-primary relative hover:opacity-50 rounded-lg flex items-center justify-center text-white ${
            loading && "pointer-events-none"
          }`}
          onClick={async () => {
            if (publicKey) {
              if (!valid || !sendTransaction) {
                console.log("Error");
                return;
              }
              setLoading(true);
              console.log("Creat token");
              await createToken();
              setLoading(false);
            }
          }}
        >
          {!publicKey ? (
            <>
              <WalletMultiButton />
              {t("connect")}
            </>
          ) : (
            <>
              {!loading && "Create Token"}
              {loading && <Spinner color="white" />}
            </>
          )}
        </div>
      </div>
    </BorderContent>
  );
}
