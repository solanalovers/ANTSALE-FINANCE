'use client';
import CustomDivider from '@/components/CustomDivider';
import { CreatePresaleContext } from '@/provider/CreatePresaleProvider';
import { DatePicker, Input, Link, Select, SelectItem } from '@nextui-org/react';
import React, { useContext } from 'react';
import { now } from '@internationalized/date';
import Addition from '@/components/Addition';
import { CreateFairLaunchContext } from '@/provider/CreateFairLaunchProvider';

export default function CreateFairLaunchStep2() {
  return (
    <div>
      <CustomDivider />
      <Addition context={CreateFairLaunchContext} />
    </div>
  );
}
