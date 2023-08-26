import { Inter, Montserrat  } from "next/font/google";


export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    style: ['normal'],
    display: 'swap'
})

export const inter = Inter({
    subsets: ["latin"],
    weight: ["800"],
    style: ["normal"],
    display: "swap"
})