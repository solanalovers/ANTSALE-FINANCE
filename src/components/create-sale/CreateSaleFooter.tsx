import React from "react";
import CustomDivider from "../CustomDivider";
import { Button } from "@nextui-org/react";
import { ArrowLeftIcon, ArrowRightIcon } from "../Icon";
import { useRouter } from "next/navigation";

export default function CreateSaleFooter({
  step,
  isFirst,
  isLast,
  finalText,
  currentRoute,
}: {
  step: number;
  isFirst: boolean;
  isLast: boolean;
  finalText: string;
  currentRoute: string;
}) {
  const router = useRouter();
  return (
    <div>
      <CustomDivider />
      <div className="flex items-center justify-between">
        <Button
          color={isFirst ? "default" : "primary"}
          isDisabled={isFirst}
          size="lg"
          onClick={() => {
            router.push(`${currentRoute}/step-${step - 1}`);
          }}
        >
          <div className="flex items-center gap-x-3">
            <ArrowLeftIcon
              size="24"
              color={isFirst ? "#8E8E93" : "white"}
            />
            <p className="text-base leading-6 font-medium">Previous</p>
          </div>
        </Button>
        <Button
          color="primary"
          size="lg"
          onClick={() => {
            router.push(`${currentRoute}/step-${step + 1}`);
          }}
        >
          <div className="flex items-center gap-x-3">
            <p className="text-base leading-6 font-medium">
              {isLast ? finalText : "Next"}
            </p>
            {!isLast && (
              <ArrowRightIcon
                size="24"
                color={"white"}
              />
            )}
          </div>
        </Button>
      </div>
    </div>
  );
}
