import React, { ReactNode } from "react";

export default function BorderContent({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        boxShadow:
          "0px -1px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06)",
      }}
      className="p-6 rounded-lg"
    >
      {children}
    </div>
  );
}
