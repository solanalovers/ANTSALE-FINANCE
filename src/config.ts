import { Pathnames } from 'next-intl/navigation';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'kr', 'cn', 'jp', 'vn', 'ru'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/',
    kr: '/',
    cn: '/',
    ru: '/',
    vn: '/',
    jp: '/',
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;