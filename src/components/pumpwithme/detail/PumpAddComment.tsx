import UploadImage from "@/components/create-token/UploadImage";
import BorderContent from "@/components/detail/BorderContent";
import { Button, Textarea } from "@nextui-org/react";
import React, { useState } from "react";

export default function PumpAddComment() {
  const [form, setForm] = useState<any>({});
  return (
    <div className="mt-4">
      <BorderContent>
        <div className="flex flex-col gap-4">
          <p className="text-base font-semibold">Add a comment</p>
          <UploadImage
            value={form?.image}
            onChange={(e: any) =>
              setForm((prev: any) => ({ ...prev, image: e.target.files[0] }))
            }
            label="Image"
            placeholder=" "
          />
          <Textarea
            label="Description"
            placeholder="Description"
            variant="bordered"
            minRows={10}
            onChange={(e: any) =>
              setForm((prev: any) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          />
          <Button color="primary" size="lg" className="text-medium">POST A REPLY</Button>
        </div>
      </BorderContent>
    </div>
  );
}
