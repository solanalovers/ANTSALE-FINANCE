'use client';
import Banner from '@/components/Banner';
import CustomDivider from '@/components/CustomDivider';
import Stepper from '@/components/Stepper';
import CreateSaleFooter from '@/components/create-sale/CreateSaleFooter';
import BorderContent from '@/components/detail/BorderContent';
import { listStep } from '@/constant/listStep';
import CreatePresaleProvider, {
  CreatePresaleContext,
} from '@/provider/CreatePresaleProvider';
import { usePathname } from 'next/navigation';
import React, { ReactNode, useContext, useEffect } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const { form } = useContext(CreatePresaleContext);
  const pathname = usePathname();
  const step = Number(pathname.slice(-1));
  const currentRoute = pathname.split(`/step-${step}`)[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <CreatePresaleProvider>
      {/* <Banner /> */}
      <div className='container mx-auto mt-10'>
        <BorderContent>
          <Stepper step={step} listStep={listStep} type='createSale'/>
          {children}
          <CreateSaleFooter
            isFirst={step === 1}
            isLast={step === listStep.length}
            step={step}
            finalText='CREATE PRESALE'
            currentRoute={currentRoute}
            context={CreatePresaleContext}
          />
        </BorderContent>
      </div>
    </CreatePresaleProvider>
  );
}
