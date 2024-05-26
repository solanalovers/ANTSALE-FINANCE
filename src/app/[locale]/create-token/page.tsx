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
      </div>
    </div>
  );
}
