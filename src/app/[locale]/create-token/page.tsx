"use client";
import Banner from "@/components/Banner";
import Stepper from "@/components/Stepper";
import CreateForm from "@/components/create-token/CreateForm";
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

export default function CreateToken() {
  return (
    <div>
      {/* <Banner /> */}
      <div className="container mx-auto">
        <div className="mt-10">
          <CreateForm />
        </div>
        <div className="grid grid-cols-2 gap-6 mt-20">
          <Accordion
            selectionMode="multiple"
            itemClasses={{
              title: "font-semibold text-[18px] leading-[26px]",
              content: "text-[17px] leading-6",
            }}
          >
            <AccordionItem
              key="1"
              title="The cost of Token creation is ~0.0025 SOL"
            >
              {`The cost of Token creation is ~0.0025 SOL, covering all fees for SPL
            Token Creation. You pay for Solana Network, we don’t charge anything
            else.`}
            </AccordionItem>
            <AccordionItem
              key="3"
              title="The cost of Token creation is ~0.0025 SOL"
            >
              {`Once the creation process starts, it will only take a few seconds!
            Once complete, you will receive the total supply of the token in
            your wallet.`}
            </AccordionItem>
          </Accordion>
          <Accordion
            selectionMode="multiple"
            itemClasses={{
              title: "font-semibold text-[18px] leading-[26px]",
              content: "text-[17px] leading-6",
            }}
          >
            <AccordionItem
              key="2"
              title="The cost of Token creation is ~0.0025 SOL"
            >
              {`Using your wallet, you can manage your token create additional
            supply or freeze it as needed. Experience the simplicity and
            affordability of Solana Token creation with our user-friendly
            platform.`}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
