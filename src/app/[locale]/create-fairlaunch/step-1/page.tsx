"use client";
import { Input } from "@nextui-org/react";
import React, { useContext } from "react";

export default function CreateFairLaunchStep1() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Input
            variant="bordered"
            label="Token Address"
            placeholder="0x912CE59144191C1204E64559 E8253a0e49E6548"
          />
        </div>
        <Input
          variant="bordered"
          label="Token Address"
          placeholder="0x912CE59144191C1204E64559 E8253a0e49E6548"
        />
        <Input
          variant="bordered"
          label="Token Address"
          placeholder="0x912CE59144191C1204E64559 E8253a0e49E6548"
        />
        <Input
          variant="bordered"
          label="Token Address"
          placeholder="0x912CE59144191C1204E64559 E8253a0e49E6548"
        />
      </div>
    </div>
  );
}
