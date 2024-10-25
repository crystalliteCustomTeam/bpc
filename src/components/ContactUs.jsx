// Components
import { CTA, BoxReveal, FrontEndForm } from "@/components"

export default function ContactUs() {
    return (
        <section>
            <div className="relative py-[50px] md:py-[100px]">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                        <div>
                            <BoxReveal>
                                <span className="text-[14px] md:text-[16px] leading-snug font-medium block mb-2">
                                    Your Book Deserves To Be Loved By Readers!
                                </span>
                            </BoxReveal>
                            <BoxReveal>
                                <h2 className="font-mono xs:text-[30px] text-[35px] lg:text-[40px] xl:text-[45px] leading-snug mb-4 capitalize">
                                    PUBLISH  <span className="text-muted-foreground">Now With Top</span> <br className="hidden sm:block" /> Book Publishers!
                                </h2>
                            </BoxReveal>
                            <BoxReveal>
                                <p className="leading-loose lg:leading-relaxed mb-5 text-[14px] lg:text-[16px]">
                                    Your manuscript is destined for success! Partner with our best book publishing services to transform your work into a bestseller. Our expert-vetted professionals at Book Publishing Companys handle every aspect, from Amazon book publishing and eBook publishing to book editing, cover design, marketing, and printing. With our comprehensive support, you’ll make a significant impact and achieve your publishing goals.
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
                        </div>
                        <div>
                            <div className="w-[90%] md:w-[80%] mx-auto shadow-xl p-5 rounded-md mt-10 lg:mt-0">
                                <FrontEndForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}