"use client"
// Components
import { AutoScrollSlider, BlurFade, FadeText } from "@/components"
// Next
import Image from "next/image"
// Media
import TrustpilotLogo from "media/trustpilot-logo.svg"
import ClutchLogo from "media/clutch-logo.svg"
import GoogleLogo from "media/google-logo.svg"

const data = [
    {
        source: TrustpilotLogo,
        name: "Alex R.",
        quote: "Working with Book Publishing Company transformed my manuscript into a bestseller. Their meticulous editing, stunning cover design, and strategic marketing gave my book the visibility it needed. The entire process was smooth, and their support was exceptional. I couldn’t be happier with the results!"
    },
    {
        source: ClutchLogo,
        name: "Jessica L.",
        quote: "From manuscript to published success, Book Publishing Company exceeded my expectations. Their team handled everything—formatting, design, and marketing—with expertise and professionalism. I’m thrilled with the final product and grateful for their dedication. They truly made my book stand out in the crowded market."
    },
    {
        source: GoogleLogo,
        name: "Michael T.",
        quote: "Book Publishing Company took my book from draft to bestseller with ease. Their attention to detail in editing and design was impressive, and their marketing strategies were spot-on. The whole experience was seamless, and I saw fantastic results. Highly recommend their services!"
    },
    {
        source: TrustpilotLogo,
        name: "Sarah J.",
        quote: "The team at Book Publishing Company is outstanding. They provided exceptional support throughout the publishing process, from cover design to distribution. My book’s success on Amazon and other platforms speaks for itself. Their commitment to excellence truly made a difference for me."
    },
    {
        source: TrustpilotLogo,
        name: "David W.",
        quote: "Book Publishing Company made publishing my book a stress-free experience. Their comprehensive approach—cover design, formatting, and marketing—helped me achieve my goal of reaching a wider audience. Their professionalism and expertise are evident, and I’m thrilled with the success of my book."
    }
]

export default function Testimonials({ space = "py-[50px] md:py-[100px]" }) {
    return (
        <section>
            <div className={`${space} overflow-hidden`}>
                <div className="container">
                    <div className="text-center mb-[50px]">
                        <FadeText className="font-mono xs:text-[30px] text-[35px] lg:text-[40px] xl:text-[45px] leading-snug mb-4 capitalize"
                            direction="up"
                            framerProps={{
                                show: { transition: { delay: 0.3 } },
                            }}
                            text="<h2>Our <span class='text-muted-foreground'>Client</span> Testimonials</h2>"
                        />
                        <FadeText className="leading-loose lg:leading-relaxed text-[14px] lg:text-[16px] lg:max-w-[65%] mx-auto"
                            direction="up"
                            framerProps={{
                                show: { transition: { delay: 0.3 } },
                            }}
                            text="<p>Hear directly from our authors who’ve experienced transformative success with us. See how our expert services have turned their manuscripts into bestsellers and helped them reach their publishing goals.</p>"
                        />
                    </div>
                </div>
                <div className="relative">
                    <AutoScrollSlider wrapperClasses="overflow-visible">
                        {data.map(({ name, quote, source }, i) => (
                            <div key={i} className="grow-0 shrink-0 basis-auto pl-4">
                                <BlurFade delay={0.1} duration={2} inView={true} inViewMargin="-50px">
                                    <div className="rounded-lg max-w-[280px] md:max-w-[430px] h-[350px] md:h-[300px] border px-4 py-10 shadow-md">
                                        <div className="flex items-center mb-5 gap-5">
                                            <Image src={source} alt="source" className="block max-w-[50px]" />
                                            <div className="flex items-center whitespace-nowrap">
                                                <h3 className="text-[16px] md:text-[18px] font-sans font-medium leading-tight">
                                                    {name}
                                                </h3>
                                                <svg viewBox="0 0 24 24" className="ml-1 inline h-4 w-4 text-blue-500">
                                                    <g fill="currentColor">
                                                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="leading-loose font-light md:leading-relaxed text-[13px] md:text-[15px]">
                                            {quote}
                                        </p>
                                    </div>
                                </BlurFade>
                            </div>
                        ))}
                    </AutoScrollSlider>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-white"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-white"></div>
                </div>
            </div>
        </section>
    )
}