import { Inter } from "next/font/google";
import localFont from '@next/font/local'

const inter = Inter({ subsets: ["latin"] });
const zealot = localFont({
    weight: '400',
    variable: '--font-zealot',
    src: '../../public/fonts/zealot.woff2',
})

export { inter, zealot }
