// Components
import { BlurFade, BoxReveal, CTA, FadeText } from "@/components"
// Next
import Image from "next/image"
// Media
import Books from "media/inlcudedPackage.png"

export default function InlcudedPackage() {
    return (
        <section>
            <div className="py-[50px] md:py-[100px] overflow-hidden">
                <div className="container">
                    <div className="text-center mb-[50px]">
                        <FadeText className="text-[16px] md:text-[18px] leading-snug mb-2 font-semibold"
                            direction="up"
                            framerProps={{
                                show: { transition: { delay: 0.3 } },
                            }}
                            text="<span>Tap Into The Amazon MarketPlace With</span>"
                        />
                        <FadeText className="font-mono xs:text-[25px] capitalize text-[30px] lg:text-[40px] xl:text-[45px] leading-snug mb-3"
                            direction="up"
                            framerProps={{
                                show: { transition: { delay: 0.3 } },
                            }}
                            text="<h2>Amazon <span class='text-muted-foreground'>Publishing Experts</span> for <br class='hidden sm:block md:hidden' /> Outstanding Results</h2>"
                        />
                        <FadeText className="leading-loose lg:leading-relaxed text-[14px] lg:text-[16px] lg:max-w-[85%] mx-auto"
                            direction="up"
                            framerProps={{
                                show: { transition: { delay: 0.3 } },
                            }}
                            text="<p>Our team of Amazon Book Publishing Companys handles everything for you. Our expert book publishers for hire, make the process hassle-free and straightforward, getting your book out there with ease.</p>"
                        />
                    </div>
                    <div className="grid lg:grid-cols-12 gap-5 items-center gap-y-10 lg:gap-y-0">
                        <div className="lg:col-span-7 xl:col-span-6">
                            <FadeText className="text-[18px] leading-snug font-semibold bg-primary w-max text-primary-foreground rounded-r-[50px] py-2 pl-2 pr-10"
                                direction="left"
                                framerProps={{
                                    show: { transition: { delay: 0.3 } },
                                }}
                                text="Our Package Includes"
                            />
                            <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-5 mt-5 leading-loose md:leading-relaxed text-[14px] xl:text-[15px] 2xl:text-[16px]">
                                {
                                    ["Idea Research & Analysis", "Preparing Text For Publication", "Manuscript Drafting", "Traditional & Self-Publishing", "Proofreading to Eliminate Errors", "Publishing on Best Libraries", "Critical Reviews", "Video Book Trailers", "Book Cover Design & Illustration", "Branding & Marketing"].map((e, i) => (
                                        <FadeText key={i} direction="left"
                                            framerProps={{
                                                show: { transition: { delay: 0.1 * i } },
                                            }}
                                            text={`<li>${e}</li>`}
                                        />
                                    ))
                                }
                            </ul>
                            <div className="flex items-center gap-4 mt-5 xl:mt-10">
                                <BoxReveal>
                                    <CTA text="Connect With Us!" variant="dark" />
                                </BoxReveal>
                                <BoxReveal>
                                    <CTA text="Call Us Now!" variant="darkOutline" />
                                </BoxReveal>
                            </div>
                        </div>
                        <div className="lg:col-span-5 xl:col-span-6">
                            <BlurFade delay={0.3} duration={1} inView={true}>
                                <Image src={Books} alt="books" className="mx-auto max-w-[90%]" />
                            </BlurFade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}