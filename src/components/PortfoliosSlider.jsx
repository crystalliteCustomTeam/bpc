// Next
import Image from "next/image"
// Components
import { AutoPlaySlider, AutoScrollSlider, BlurFade, FadeText } from "@/components"
// Media
import Book1 from "media/portfolios/1.png"
import Book2 from "media/portfolios/2.png"
import Book3 from "media/portfolios/3.png"
import Book4 from "media/portfolios/4.png"
import Book5 from "media/portfolios/5.png"
import Book6 from "media/portfolios/6.png"
import Book7 from "media/portfolios/7.png"
import Book8 from "media/portfolios/8.png"
import Book9 from "media/portfolios/9.png"
import Book10 from "media/portfolios/10.png"
import Book11 from "media/portfolios/11.png"
import Book12 from "media/portfolios/12.png"
import Book13 from "media/portfolios/13.png"
import Book14 from "media/portfolios/14.png"
import Book15 from "media/portfolios/15.png"
import Book16 from "media/portfolios/16.png"

export default function PortfoliosSlider({ space = "py-[50px] md:py-[100px] bg-popover" }) {
    return (
        <section>
            <div className={`${space} overflow-hidden`}>
                <div className="container">
                    <div className="text-center mb-[50px]">
                        <FadeText className="text-[16px] md:text-[18px] leading-snug mb-2 font-semibold block"
                            direction="up"
                            framerProps={{
                                show: { transition: { delay: 0.3 } },
                            }}
                            text="<span>Reach Every Reader!</span>"
                        />
                        <FadeText className="font-mono xs:text-[25px] text-[30px] lg:text-[40px] xl:text-[45px] leading-snug mb-3 capitalize"
                            direction="up"
                            framerProps={{
                                show: { transition: { delay: 0.3 } },
                            }}
                            text="<h2>Browse Our <span class='text-muted-foreground'>Broad Selection</span> <br clas='block sm:hidden' /> of Genres!</h2>"
                        />
                        <FadeText className="leading-loose lg:leading-relaxed text-[14px] lg:text-[16px] xl:max-w-[90%] 2xl:max-w-[80%] mx-auto"
                            direction="up"
                            framerProps={{
                                show: { transition: { delay: 0.3 } },
                            }}
                            text="<p>Our genre-varied collection spans everything from thrilling mysteries to heartfelt romances, expertly curated to reach readers across niche markets. We can help you connect with your ideal audience, no matter the genre.</p>"
                        />
                    </div>
                </div>
                <AutoPlaySlider wrapperClasses="overflow-visible">
                    {
                        [Book1, Book2, Book3, Book4, Book5, Book6, Book7, Book8, Book9, Book10, Book11, Book12, Book13, Book14, Book15, Book16].map((e, i) => (
                            <div key={i} className="grow-0 shrink-0 basis-auto pl-4 odd:mt-10">
                                <BlurFade delay={0.3} duration={1} inView={true} inViewMargin="-50px">
                                    <div className="shadow-lg overflow-hidden rounded-xl">
                                        <Image src={e} alt="books" />
                                    </div>
                                </BlurFade>
                            </div>
                        ))
                    }
                </AutoPlaySlider>
            </div>
        </section>
    )
}