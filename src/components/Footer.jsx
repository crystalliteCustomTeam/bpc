// Next
import Image from "next/image"
import Link from "next/link"
// Media
import Logo from "media/logo.svg"
import FB from "media/social/fb.svg"
import Insta from "media/social/insta.svg"
import Twitter from "media/social/twitter.svg"
import DMCA from "media/dmca.png"
import PaymentMethods from "media/payment-methods.svg"

export default function Footer() {
    return (
        <footer>
            <div className="bg-card-foreground text-white">
                <div className="py-[70px]">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-x-5 gap-y-10">
                            <div className="col-span-12 xl:col-span-5 sm:text-center xl:text-left">
                                <Link href="/" className="inline-block">
                                    <Image src={Logo} alt="Logo" className="max-w-[200px]" />
                                </Link>
                                <p className="leading-loose md:leading-relaxed text-[14px] md:text-[16px] mt-5 lg:max-w-[90%] lg:mx-auto xl:mx-0 font-light">
                                    Book Publishing Company stands as the pinnacle of excellence in the world of publishing services, renowned for its unparalleled commitment to author success. With a dedicated team of industry experts and innovative resources at their disposal, Book Publishing Company goes above and beyond.
                                </p>
                                <Image src={DMCA} alt="DMCA" className="my-5 sm:mx-auto xl:ml-0" />
                                <Image src={PaymentMethods} alt="PaymentMethods" className="sm:mx-auto xl:ml-0" />
                            </div>
                            <div className="col-span-6 md:col-span-4 xl:col-span-2">
                                <h4 className="xs:text-[20px] sm:text-[13px] md:text-[18px] font-semibold leading-normal uppercase">Services</h4>
                                <ul className="list-none mt-5">
                                    {
                                        [
                                            ["SEO Writing", "/"],
                                            ["Article Writing", "/"],
                                            ["Magazine Writing", "/"],
                                            ["Book Editing", "/"],
                                            ["Web Copy Writing", "/"],
                                            ["Press Release", "/"],
                                            ["Script Writing", "/"],
                                            ["Genre", "/genre"],
                                            ["Marketing", "/"],
                                            ["Publication", "/"],
                                            ["Printing", "/"],
                                            ["Cover Design", "/"]
                                        ].map(([text, link], i) => (
                                            <li key={i}>
                                                <Link href={link} className="leading-loose text-[14px] md:text-[16px] hover:text-primary transition-colors font-light">
                                                    {text}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="col-span-6 md:col-span-4 xl:col-span-2">
                                <h4 className="xs:text-[20px] sm:text-[13px] md:text-[18px] font-semibold leading-normal uppercase">Quick Links</h4>
                                <ul className="list-none mt-5">
                                    {
                                        [
                                            ["Home", "/"],
                                            ["About", "/"],
                                            ["Case Studies", "/"],
                                            ["Pricing", "/"],
                                            ["FAQ's", "/"],
                                            ["Contact Us", "/"]
                                        ].map(([text, link], i) => (
                                            <li key={i}>
                                                <Link href={link} className="leading-loose text-[14px] md:text-[16px]  hover:text-primary transition-colors font-light">
                                                    {text}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="col-span-12 md:col-span-4 xl:col-span-3">
                                <h4 className="xs:text-[20px] sm:text-[13px] md:text-[18px] font-semibold leading-normal mt-b uppercase">Contact Now</h4>
                                <ul className="list-none mt-5">
                                    {
                                        [
                                            [FB, "info(@)bookpublishingcompany(.)com", "info@bookpublishingcompany.us"],
                                            [Insta, "tel:2135563626", "(213) 556-3626"],
                                            [Twitter, "https://www.google.com/search?q=best+selling+publisher&rlz=1C1CHBD_enPK1066PK1066&oq=best&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhMIARAuGIMBGMcBGLEDGNEDGIAEMgYIAhBFGDkyBggDEEUYQDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEHNzg5ajBqOagCALACAQ&sourceid=chrome&ie=UTF-8#lrd=0x60c61cc7dd1a2c3d:0xfe61ceb155688621,1,,,,", "1001 Wilshire Boulevard #1176 Los Angeles, CA 90017 Amazon Book Publishing"],
                                        ].map(([icon, link, text], i) => (
                                            <li key={i} className="mb-3 last:mb-0">
                                                <Link href={link} className="leading-normal text-[14px] md:text-[16px] hover:text-primary transition-colors font-light">
                                                    {/* <Image src={icon} alt="icon" /> */}
                                                    {text}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <h4 className="xs:text-[20px] sm:text-[13px] md:text-[18px] font-semibold leading-normal my-5 uppercase">Follow Links</h4>
                                <ul className="list-none flex items-center gap-5">
                                    {
                                        [
                                            [FB, "https://www.facebook.com/bookpublishingcompany"],
                                            [Insta, "https://www.instagram.com/bspublisher/"],
                                            [Twitter, "https://twitter.com/bspublisher"],
                                        ].map(([icon, link], i) => (
                                            <li key={i}>
                                                <Link href={link} target="_blank">
                                                    <Image src={icon} alt="icon" />
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-primary"></div>
                <div className="py-5 bg-card-foreground text-card">
                    <div className="container">
                        <div className="md:flex justify-between">
                            <p className="text-[14px] text-center md:text-left mb-5 md:mb-0 2xl:text-[16px] leading-relaxed font-light">
                                © 2024 - All Rights Reserved - <Link href="https://bhaooinc.com/" target="_blank" className="hover:text-primary transition-colors">Bhaoo INC</Link>
                            </p>
                            <ul className="list-none flex divide-x-2 divide-primary justify-center md:justify-end">
                                {
                                    [
                                        ["Privacy Policy", "/"],
                                        ["Terms & Conditions", "/"]
                                    ].map(([text, link], i) => (
                                        <li key={i} className="first:pr-5 last:pl-5">
                                            <Link href={link} className="text-[14px] 2xl:text-[16px] leading-none  hover:text-primary transition-colors font-light">
                                                {text}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}