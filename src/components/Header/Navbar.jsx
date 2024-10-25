"use client"
// Next
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
// Media
import Logo from "media/logo.svg"
import LogoLight from "media/bpc-2.png"
// Components
import Navlist from "./Navlist"
import { CTA } from "@/components"
import MobileNav from "./MobileNav"
// React
import { useEffect, useState } from "react"

export default function Header() {
    const [isMobile, setIsMobile] = useState(false)
    const path = usePathname()

    let theme

    switch (path) {
        case '/':
            theme = true
            break
        default:
            theme = false
            break
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1200)
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <header>
            <div className="absolute left-0 right-0 top-0 z-50 py-5">
                <div className="container">
                    <div className="flex items-center relative gap-5">
                        <Link href="/" className="block mr-auto">
                            <Image src={theme ? Logo : LogoLight} alt="Logo" className="max-w-[200px]" />
                        </Link>
                        {!isMobile ?
                            <div className="hidden xl:block"><Navlist /></div>
                            :
                            <div className="flex items-center xl:hidden"><MobileNav theme={theme} /></div>
                        }
                        <div className="hidden sm:block">
                            <CTA
                                text="800-781-9093"
                                icon="/phone-call.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}