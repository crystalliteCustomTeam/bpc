// Components
import { LetterPullup, FadeText, Tabs, TabsContent, TabsList, TabsTrigger, CTA, BlurFade, BoxReveal } from "@/components"
// Media
import Service1 from "media/services/1.png"
import Service2 from "media/services/2.png"
import Service3 from "media/services/3.png"
import Service4 from "media/services/4.png"
import Service5 from "media/services/5.png"
import Service6 from "media/services/6.png"
// Next
import Image from "next/image"

let services = [
    {
        name: "Ebook Publishing Services",
        title: "Ebook <span>Publishing Services</span>",
        desc: "<p>We provide expert eBook publishing services, including professional conversion, design, and formatting. Our team specializes in making your eBook compatible with Amazon Kindle, Apple iPad, Barnes & Noble Nook, smartphones, tablets, and other popular eBook readers. Through Amazon Kindle Direct Publishing and the Kindle Select Publishing program, we expand your reach to millions of readers worldwide, increasing your eBook sales and impact.</p>",
        img: Service1
    },
    {
        name: "Amazon Book Publishing",
        title: "Amazon <span>Book Publishing</span>",
        desc: "<p>We simplify Amazon book publishing by turning your manuscript into a full-fledged published book. Our services include thorough proofreading, comprehensive editing, and expert reviews to align with Amazon KDP guidelines. We focus on publishing best sellers on Amazon by creating a thought-provoking title, designing an attention-grabbing cover, and providing accurate formatting. As Amazon Book Publishing Companys, we optimize the tags and descriptions to position your book for success on the platform.</p>",
        img: Service2
    },
    {
        name: "Book Editing & Publishing",
        title: "Book <span>Editing & Publishing</span>",
        desc: "<p>We turn good writing into a great book, whether you're just beginning or working on your 7th manuscript. Our editors focus on impeccable spelling, grammar, and overall flow, making sure every 'i' is dotted and every 't' is crossed. The result is a polished, fluid, and impactful narrative that resonates with readers, leaving a lasting impression and enhancing the quality of your work to stand out in the market.</p>",
        img: Service3
    },
    {
        name: "Book Marketing",
        title: "Book <span>Marketing</span>",
        desc: "<p>Break through the noise and connect with your ideal readers using our book marketing services. Designed to build sustainable book sales and boost your author brand, our approach includes efficient SEO, social media marketing, and more! No matter the format, our strategies are focused on capturing maximum customer interest and driving lasting attention to your work.</p>",
        img: Service4
    },
    {
        name: "Book Cover Design",
        title: "Book <span>Cover Design</span>",
        desc: "<p>Whether you've penned down the next New York Times bestseller or a compelling new release, readers won’t give it the attention it deserves unless you grab it with an impeccable book cover design. Our custom designs are crafted to make your book stand out on any bookshelf, drawing eyes away from other titles in your genre. We provide custom book cover design and interior formatting for both, printed books and eBooks!</p>",
        img: Service5
    },
    {
        name: "Book Printing",
        title: "Book <span>Printing</span>",
        desc: "<p>Our book printing services deliver top-quality results in both hardcover and softcover formats, with one of the fastest turn times in the industry. Our in-house team operates in certified facilities that meet the stringent Idealliance G7 Master Facility Qualification standards. We’re committed to providing you with a beautifully printed book that meets the highest industry qualifications, making your work ready for any bookshelf or reader.</p>",
        img: Service6
    }
]

export default function ServicesWithTabs({ space = "py-[50px] md:py-[100px]" }) {
    return (
        <section>
            <div className={`${space} bg-card-foreground text-primary-foreground`}>
                <div className="container">
                    <div>
                        <h2 className="font-mono xs:text-[30px] text-[35px] lg:text-[40px] xl:text-[45px] leading-snug mb-4">
                            Expert <LetterPullup className="text-muted-foreground" words="Book Publishing Services" />
                        </h2>
                        <FadeText className="leading-loose lg:leading-relaxed text-[14px] lg:text-[16px]"
                            direction="left"
                            framerProps={{
                                show: { transition: { delay: 0.3 } },
                            }}
                            text="<p>Our comprehensive author toolkit and suite of services will guide you on your <br class='hidden lg:block'> journey from an aspiring writer to a successful published author.</p>"
                        />
                    </div>
                    <Tabs defaultValue={services[0].name} className="grid grid-cols-1 xl:grid-cols-12 gap-10 mt-[50px] items-center">
                        <div className="xl:col-span-3 backdrop-blur-sm bg-[#707070]/30 rounded-lg">
                            <TabsList className="gap-10 flex xl:grid xl:grid-cols-1 px-5 py-10 snap-x overflow-x-auto">
                                {
                                    services.map(({ name }) => (
                                        <TabsTrigger value={name} key={name} className="text-left data-[state=active]:before:content-[''] data-[state=active]:before:absolute data-[state=active]:before:bottom-[-5px] data-[state=active]:before:left-0 data-[state=active]:before:right-0 data-[state=active]:before:w-full data-[state=active]:before:h-[2px] data-[state=active]:before:bg-muted-foreground text-[16px] 2xl:text-[18px] snap-center shrink-0 w-max">{name}</TabsTrigger>
                                    ))
                                }
                            </TabsList>
                        </div>
                        <div className="xl:col-span-9">
                            {
                                services.map(({ name, title, desc, img }) => (
                                    <TabsContent value={name} key={name}>
                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                                            <div className="md:col-span-7">
                                                <h3 className="[&>span]:text-muted-foreground relative before:content-[''] before:absolute before:bottom-[-15px] before:left-0 before:right-0 before:w-[50%] before:h-[2px] before:bg-muted-foreground text-[20px] lg:text-[30px] font-bold leading-snug mb-8 w-max capitalize"
                                                    dangerouslySetInnerHTML={{ __html: title }}
                                                />
                                                <div className="[&>*:not(:last-child)]:mb-5 leading-loose lg:leading-relaxed text-[14px] lg:text-[15px]" dangerouslySetInnerHTML={{ __html: desc }} />
                                                <div className="flex items-center gap-4 mt-4">
                                                    <BoxReveal>
                                                        <CTA text="Connect With Us!" />
                                                    </BoxReveal>
                                                    <BoxReveal>
                                                        <CTA text="Call Us Now!" variant="destructive" />
                                                    </BoxReveal>
                                                </div>
                                            </div>
                                            <div className="md:col-span-5">
                                                <BlurFade delay={0.3} duration={1} inView={true} inViewMargin="-50px">
                                                    <Image src={img} alt="books" className="mx-auto" />
                                                </BlurFade>
                                            </div>
                                        </div>
                                    </TabsContent>
                                ))
                            }
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}