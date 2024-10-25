// Next
import Link from "next/link"
import Image from "next/image"
// Components
import { CTA, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components"
// React
import { useState } from "react"
// Radix
import { CaretRightIcon } from "@radix-ui/react-icons"
// Media
import Icon1 from "media/submenu/icon/audio-book.png"
import Icon2 from "media/submenu/icon/children-book-illustration.png"
import Icon3 from "media/submenu/icon/book-publishing.png"
import Icon4 from "media/submenu/icon/book-marketing.png"
import Icon5 from "media/submenu/icon/book-writing.png"
import Icon6 from "media/submenu/icon/book-editing.png"
import Icon7 from "media/submenu/icon/children-book-publishing.png"

const mainMenu = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/"],
    ["Genre", "/genre"],
    ["Marketing", "/"],
    ["Publication", "/"],
    ["Printing", "/"],
    ["Cover Design", "/"]
]

const servicesMenu = [
    {
        text: "Audio Book",
        href: "/",
        description: "Get A Customized Solution By Best Publishing Services.",
        icon: Icon1
    },
    {
        text: "Children Book Illustration",
        href: "/",
        description: "Get A Customized Solution By Best Publishing Services.",
        icon: Icon2
    },
    {
        text: "Book Publishing",
        href: "/",
        description: "Get A Customized Solution By Best Publishing Services.",
        icon: Icon3
    },
    {
        text: "Book Marketing",
        href: "/",
        description: "Get A Customized Solution By Best Publishing Services.",
        icon: Icon4
    },
    {
        text: "Book Writing",
        href: "/",
        description: "Get A Customized Solution By Best Publishing Services.",
        icon: Icon5
    },
    {
        text: "Book Editing",
        href: "/book-editing",
        description: "Get A Customized Solution By Best Publishing Services.",
        icon: Icon6
    },
    {
        text: "Children's Book Publishing",
        href: "/",
        description: "Get A Customized Solution By Best Publishing Services.",
        icon: Icon7
    }
]

export default function MobileNav({theme}) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="inline-flex flex-col gap-2 ml-auto">
                    <span className={`block w-[35px] h-[3px] ${theme ? "bg-white" : "bg-card-foreground"}`}></span>
                    <span className={`block w-[35px] h-[3px] ${theme ? "bg-white" : "bg-card-foreground"}`}></span>
                    <span className={`block w-[35px] h-[3px] ${theme ? "bg-white" : "bg-card-foreground"}`}></span>
                </SheetTrigger>
                <SheetContent className="overflow-y-scroll">
                    <SheetHeader className="hidden">
                        <SheetTitle>Title</SheetTitle>
                        <SheetDescription>Description</SheetDescription>
                    </SheetHeader>
                    <ul className="list-none mt-5 mb-5">
                        {
                            mainMenu.map(([text, link], i) => (
                                text === "Services" ? (
                                    <div key={i}>
                                        <Sheet>
                                            <SheetTrigger className="text-[20px] leading-loose font-semibold hover:text-muted-foreground transition-colors flex items-center">
                                                <span>Writing Services</span>
                                                <CaretRightIcon className="h-8 w-8" />
                                            </SheetTrigger>
                                            <SheetContent className="overflow-y-scroll" icon="">
                                                <SheetHeader className="hidden">
                                                    <SheetTitle>Title</SheetTitle>
                                                    <SheetDescription>Description</SheetDescription>
                                                </SheetHeader>
                                                <ul className="list-none mt-5">
                                                    {
                                                        servicesMenu.map(({ text, href, icon }, i) => (
                                                            <li key={i}>
                                                                <Link onClick={() => setIsOpen(false)} href={href}>
                                                                    <div className="flex items-center gap-2 p-2 rounded-[10px] mb-2 last:mb-0 hover:bg-[#F0F8FF] transition-all duration-500">
                                                                        <Image src={icon} alt="icon" />
                                                                        <div>
                                                                            <h3 className="text-[14px] leading-snug capitalize font-medium">
                                                                                {text}
                                                                            </h3>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </SheetContent>
                                        </Sheet>
                                    </div>
                                )
                                    :
                                    (
                                        <li key={i}>
                                            <Link onClick={() => setIsOpen(false)} href={link} className="text-[20px] leading-loose font-semibold hover:text-muted-foreground transition-colors">
                                                {text}
                                            </Link>
                                        </li>
                                    )
                            ))
                        }
                    </ul>
                    <CTA
                        text="800-781-9093"
                        icon="/phone-call.png"
                    />
                </SheetContent>
            </Sheet>
        </>
    );
}