'use client';
import CustomDivider from '@/components/CustomDivider';
import PoolInfo from '@/components/detail/PoolInfo';
import TokenInfo from '@/components/detail/TokenInfo';
import { CreatePresaleContext } from '@/provider/CreatePresaleProvider';
import React, { useContext } from 'react';

export default function CreatePresaleStep3() {
  const { form, checkValidStep2 } = useContext(CreatePresaleContext);

  console.log(checkValidStep2(form));

  return (
    <div>
      <CustomDivider />
      {checkValidStep2(form) && (
        <>
          <TokenInfo context={CreatePresaleContext} />
          <PoolInfo context={CreatePresaleContext} />
        </>
      )}
    </div>
  );
}
