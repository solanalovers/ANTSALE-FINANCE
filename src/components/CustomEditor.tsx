import React, { useContext, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { CreateFairLaunchContext } from '@/provider/CreateFairLaunchProvider';
import { changeForm } from '@/function/form';

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

export default function CustomEditor() {
  const { form, setForm } = useContext(CreateFairLaunchContext);
  const [content, setContent] = useState(
    form?.description
      ? form.description
      : `This is fairlaunch project's description`
  );

  const handleChangeForm = changeForm(setForm);

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }],
      [{ color: [] }],
      ['code-block'],
      // ["clean"],
    ],
  };

  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
  ];

  const handleEditorChange = (newContent: any) => {
    setContent(newContent);

    handleChangeForm({ description: newContent });
  };

  return (
    <QuillEditor
      value={content}
      onChange={handleEditorChange}
      modules={quillModules}
      formats={quillFormats}
      className='w-full bg-white'
    />
  );
}
