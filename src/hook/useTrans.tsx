import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

const useTrans = (component: string) => {
  const locale = useLocale();
  const [fileTrans, setFileTrans] = useState<Record<string, any>>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translations = await import(`../../i18n/${locale}.json`);
        setFileTrans(translations);
      } catch (error) {
        console.error('Error loading translations:', error);
        setFileTrans({});
      }
    };

    loadTranslations();
  }, [locale]);

  const getText = (text: string): string => {
    const keys = text.split('.');
    let result: any = fileTrans[component];
    for (const key of keys) {
      if (result && typeof result === 'object') {
        result = result[key];
      } else {
        return text;
      }
    }
    return result ?? text;
  };


  return getText;
};

export default useTrans;
