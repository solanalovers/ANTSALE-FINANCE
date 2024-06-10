import React, { useContext, Context, useState } from "react";
import CustomDivider from "../CustomDivider";
import { Button } from "@nextui-org/react";
import { ArrowLeftIcon, ArrowRightIcon } from "../Icon";
import { useRouter } from "next/navigation";
import { ProjectContext } from "@/provider/context";
import { createProject } from "@/supabase/createProject";
import { AppContext } from "@/provider/AppProvider";
import { useWallet } from "@solana/wallet-adapter-react";

export default function CreateSaleFooter({
  step,
  isFirst,
  isLast,
  finalText,
  currentRoute,
  context,
}: {
  step: number;
  isFirst: boolean;
  isLast: boolean;
  finalText: string;
  currentRoute: string;
  context: Context<ProjectContext>;
}) {
  const router = useRouter();

  const { next, form } = useContext(context);
  const [loading, setLoading] = useState(false);
  const { cluster } = useContext(AppContext);
  const wallet = useWallet();

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
          onClick={async () => {
            if (!isLast) {
              router.push(`${currentRoute}/step-${step + 1}`);
            } else {
              setLoading(true);
              const error = await createProject(form, cluster === 1, wallet);
              setLoading(false);
              // if (error) {
              //   console.log("Error: ", error);
              // } else {
              //   router.push("/list");
              // }
            }
          }}
          isDisabled={!next}
          isLoading={loading}
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
