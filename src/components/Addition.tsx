import { Button, Image, Input } from '@nextui-org/react';
import React, { Context, useContext, useEffect, useState } from 'react';
import CustomAvatar from './CustomAvatar';
import CustomEditor from './CustomEditor';
import CustomDivider from './CustomDivider';
import { EditIcon } from './Icon';
import ConfigTokenomic from './Tokennomic/ConfigTokenomic';
import { CreateFairLaunchContext } from '@/provider/CreateFairLaunchProvider';
import { changeForm } from '@/function/form';
import { ProjectContext } from '@/provider/context';

export default function Addition({
  context,
}: {
  context: Context<ProjectContext>;
}) {
  const { form, setForm, setNext, checkValidStep2 } = useContext(context);

  const handleChangeForm = changeForm(setForm);

  useEffect(() => {
    if (checkValidStep2(form)) {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [form]);

  return (
    <div className='flex flex-col gap-y-6'>
      <div>
        <div className='relative'>
          <Image
            src={form.backgroundImage}
            radius='none'
            className='object-cover object-center h-[200px]'
            width={'100%'}
          />
          <Button
            color={undefined}
            className='flex items-center absolute right-3 bottom-3 z-50'
            size='sm'
          >
            <EditIcon />
            <p className='text-sm leading-5 font-medium'>Edit background</p>
            <input
              className='absolute left-0 right-0 top-0 bottom-0 opacity-0 z-10 cursor-pointer'
              type='file'
              accept='image/*'
              onChange={(e: any) => {
                handleChangeForm({
                  backgroundImage: URL.createObjectURL(e.target.files[0]),
                });
              }}
            />
          </Button>
        </div>
        <div className='relative mt-[-60px] z-20 ml-10 w-[120px] h-[120px]'>
          <Image className='w-full h-full' src={form.image} />
          <Button
            color={undefined}
            className='absolute right-0 bottom-1 z-50 p-1.5 min-w-0 w-fit flex items-center'
            size='sm'
            radius='full'
          >
            <EditIcon color='#006FEE' />
            <input
              className='absolute left-0 right-0 top-0 bottom-0 opacity-0 z-10 cursor-pointer'
              type='file'
              accept='image/*'
              onChange={(e: any) =>
                handleChangeForm({
                  image: URL.createObjectURL(e.target.files[0]),
                })
              }
            />
          </Button>
        </div>
      </div>
      <Input
        variant='bordered'
        label='Website'
        classNames={{ input: 'placeholder:text-[#8E8E93]' }}
        placeholder='http://example.com'
        value={form?.website}
        onChange={(e) => handleChangeForm({ website: e.target.value })}
      />
      <CustomEditor />
      <div className='grid grid-cols-2 gap-6'>
        <Input
          variant='bordered'
          label='Telegram'
          classNames={{ input: 'placeholder:text-[#8E8E93]' }}
          placeholder='http://t.me/abc'
        />
        <Input
          variant='bordered'
          label='Discord'
          classNames={{ input: 'placeholder:text-[#8E8E93]' }}
          placeholder='http://discord.com/abc'
        />
        <Input
          variant='bordered'
          label='Reddit'
          classNames={{ input: 'placeholder:text-[#8E8E93]' }}
          placeholder='http://reddit.com/abc'
        />
        <Input
          variant='bordered'
          label='Youtube Video'
          classNames={{ input: 'placeholder:text-[#8E8E93]' }}
          placeholder='http://youtube.com/abc'
        />
        <Input
          variant='bordered'
          label='Instagram'
          classNames={{ input: 'placeholder:text-[#8E8E93]' }}
          placeholder='http://instagram.com/abc'
        />
        <Input
          variant='bordered'
          label='Github'
          classNames={{ input: 'placeholder:text-[#8E8E93]' }}
          placeholder='http://github.com/abc'
        />
        <Input
          variant='bordered'
          label='Twitter'
          classNames={{ input: 'placeholder:text-[#8E8E93]' }}
          placeholder='http://twitter.com/abc'
        />
        <Input
          variant='bordered'
          label='Facebook'
          classNames={{ input: 'placeholder:text-[#8E8E93]' }}
          placeholder='http://facebook.com/abc'
        />
      </div>
      <ConfigTokenomic />
    </div>
  );
}
