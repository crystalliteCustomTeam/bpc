// Components
import { CTA, BlurFade, BoxReveal } from "@/components"
// Media
import Book1 from "media/process/books/1.png"
import Book2 from "media/process/books/2.png"
import Book3 from "media/process/books/3.png"
import Icon1 from "media/process/1.svg"
import Icon2 from "media/process/2.svg"
import Icon3 from "media/process/3.svg"
import Icon4 from "media/process/4.svg"
import Icon5 from "media/process/5.svg"
import Icon6 from "media/process/6.svg"
// Next
import Image from "next/image"

export default function Process({ space = "py-[100px]" }) {
    return (
        <section>
            <div className={`relative ${space}`}>
                <div className="container">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-5 2xl:gap-10 items-center">
                        <div>
                            <BoxReveal>
                                <span className="text-[14px] md:text-[16px] leading-snug font-medium block mb-2">
                                    Want to Know How We Publish Great Books?
                                </span>
                            </BoxReveal>
                            <BoxReveal>
                                <h2 className="font-mono xs:text-[25px] text-[30px] lg:text-[40px] xl:text-[35px] leading-snug mb-4 capitalize">
                                    Our  <span className="text-muted-foreground">6-Step Book</span> Publishing Process
                                </h2>
                            </BoxReveal>
                            <BoxReveal>
                                <p className="leading-loose lg:leading-relaxed mb-5 text-[14px] lg:text-[16px]">
                                    We make publishing simple with a precise process, carefully guiding each step <br className="hidden lg:block xl:hidden" /> to perfection, so your book is published flawlessly and ready for success.
                                </p>
                            </BoxReveal>
                            <div className="flex items-center gap-4">
                                <BoxReveal>
                                    <CTA text="Connect With Us!" variant="dark" />
                                </BoxReveal>
                                <BoxReveal>
                                    <CTA text="Call Us Now!" variant="darkOutline" />
                                </BoxReveal>
                            </div>
                            <div className="grid grid-cols-3 mt-[50px] gap-5">
                                {
                                    [Book1, Book2, Book3].map((e, i) => (
                                        <div key={i}>
                                            <BlurFade delay={0.1} duration={2} inView={true}>
                                                <Image src={e} alt="books" className="w-full" />
                                            </BlurFade>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 [&>div:nth-child(5)]:border-b-0">
                            {
                                [
                                    {
                                        icon: Icon1,
                                        title: "Initial Manuscript Consultation",
                                        desc: "We begin with a detailed consultation to understand your vision and goals for the book. This helps us tailor the entire process to your specific needs."
                                    },
                                    {
                                        icon: Icon2,
                                        title: "Manuscript Analysis & Editing",
                                        desc: "Our experienced editors conduct a thorough evaluation of your manuscript, providing detailed feedback to enhance your work and prepare it for the next stage."
                                    },
                                    {
                                        icon: Icon3,
                                        title: "Creative Design & Layout",
                                        desc: "Our design team creates a captivating cover and interior layout that captures the essence of your book, balancing aesthetics and readability to entice readers."
                                    },
                                    {
                                        icon: Icon4,
                                        title: "Pre-Publication Review",
                                        desc: "Before moving forward, we conduct a final review of the edited manuscript and design, making any necessary adjustments to ensure everything is in place."
                                    },
                                    {
                                        icon: Icon5,
                                        title: "Strategic Marketing & Promotion",
                                        desc: "We develop strategic digital marketing campaigns, social media promotions, and author spotlights, utilizing various channels to generate buzz and reach your target audience."
                                    },
                                    {
                                        icon: Icon6,
                                        title: "Distribution & Launch",
                                        desc: "We handle the logistics of your book's distribution and launch, managing pre-orders, reviews, and distribution to build sales momentum for a successful release."
                                    }
                                ].map(({ icon, title, desc }) => (
                                    <div key={title} className="p-4 md:border-b-2 md:border-r-2 md:even:border-r-0 md:last:border-b-0">
                                        <BlurFade delay={0.3} duration={1} inView={true}>
                                            <Image src={icon} alt="icon" />
                                        </BlurFade>
                                        <BlurFade delay={0.3} duration={1} inView={true}>
                                            <h3 className="text-[18px] xl:text-[15px] 2xl:text-[17px] leading-tight font-semibold block mt-4 mb-3">
                                                {title}
                                            </h3>
                                        </BlurFade>
                                        <BlurFade delay={0.3} duration={1} inView={true}>
                                            <p className="leading-loose md:leading-relaxed text-[14px] 2xl:text-[15px]">
                                                {desc}
                                            </p>
                                        </BlurFade>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}