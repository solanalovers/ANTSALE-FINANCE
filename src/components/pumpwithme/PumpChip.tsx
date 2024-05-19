import React from 'react'

export default function PumpChip({content}:{content: string}) {
  return (
    <p className="py-0.5 px-2 bg-[#E2E8F0] text-[12px] leading-4 text-[#1A202C] font-semibold rounded-md cursor-pointer hover:opacity-80">
    {content}
  </p>
  )
}
