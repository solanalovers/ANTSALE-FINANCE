import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Description = ({
  content,
  line = 4,
}: {
  content: string;
  line?: number;
}) => {
  const [isNeedExpand, setIsNeedExpand] = useState(false);
  const contentRef = useRef<any>(null);
  const router = useRouter();

  useEffect(() => {
    const textElement = contentRef.current;
    if (textElement) {
      const lineHeight = parseInt(getComputedStyle(textElement).lineHeight);
      const numLines = Math.round(textElement.clientHeight / lineHeight);

      setIsNeedExpand(numLines > line);
    }
  }, [content]);

  const truncateContent = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    const truncatedText = text.slice(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(" ");
    return truncatedText.slice(0, lastSpaceIndex) + "...";
  };

  return (
    <div
      className={`text-[#1C1C1E] text-sm leading-[22px]`}
      ref={contentRef}
    >
      {isNeedExpand ? truncateContent(content, 130) : content}{" "}
      {isNeedExpand && (
        <span
          className="text-primary font-semibold underline cursor-pointer hover:opacity-50"
          onClick={() => {
            // setIsNeedExpand(false);
            router.push("/pumpwithme/1")
          }}
        >
          Show More
        </span>
      )}
    </div>
  );
};

export default Description;
