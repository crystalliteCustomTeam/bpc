// Next
import { Poppins as FontSans, Bree_Serif as FontMono } from "next/font/google"

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["italic", "normal"],
    display: "swap",
    fallback: ['system-ui', 'arial']
})

const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: "400",
    style: ["normal"],
    display: "swap",
    fallback: ['system-ui', 'arial']
})

export { fontSans, fontMono }