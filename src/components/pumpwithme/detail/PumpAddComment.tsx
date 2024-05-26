import UploadImage from "@/components/create-token/UploadImage";
import BorderContent from "@/components/detail/BorderContent";
import { Button, Textarea } from "@nextui-org/react";
import React, { useState } from "react";

export default function PumpAddComment() {
  const [form, setForm] = useState<any>({});
  return (
    <BorderContent>
      <p>Add a comment</p>
      <UploadImage
        value={form?.image}
        onChange={(e: any) =>
          setForm((prev: any) => ({ ...prev, image: e.target.files[0] }))
        }
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
      <Button>POST A REPLY</Button>
    </BorderContent>
  );
}
