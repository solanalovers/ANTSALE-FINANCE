'use client';
import CustomDivider from '@/components/CustomDivider';
import PoolInfo from '@/components/detail/PoolInfo';
import TokenInfo from '@/components/detail/TokenInfo';
import { CreateFairLaunchContext } from '@/provider/CreateFairLaunchProvider';
import { Input, Link, Select, SelectItem, Textarea } from '@nextui-org/react';
import React, { useContext } from 'react';

export default function CreateFairLaunchStep3() {
  const { form } = useContext(CreateFairLaunchContext);

  console.log(form);

  return (
    <div>
      <CustomDivider />
      {form.tokenInfo && <TokenInfo tokenInfo={form.tokenInfo} />}

      <PoolInfo form={form} />
    </div>
  );
}
