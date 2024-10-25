// Components
import { BlurFade, FadeText } from "@/components"
// Next
import Image from "next/image"
// Media
import Platform1 from "media/reviewsPlatforms/1.png"
import Platform2 from "media/reviewsPlatforms/2.png"
import Platform3 from "media/reviewsPlatforms/3.png"

export default function ReviewsPlatforms({ sapce = "py-[50px] xl:py-[100px]" }) {
    return (
        <section>
            <div className={`${sapce}`}>
                <div className="container">
                    <div className="text-center mb-[50px]">
                        <FadeText className="font-mono xs:text-[30px] text-[35px] lg:text-[40px] xl:text-[45px] leading-snug mb-4 capitalize"
                            direction="up"
                            framerProps={{
                                show: { transition: { delay: 0.3 } },
                            }}
                            text="<h2>Our <span class='text-muted-foreground'>Reviews</span></h2>"
                        />
                        <FadeText className="leading-loose lg:leading-relaxed text-[14px] lg:text-[16px] lg:max-w-[70%] xl:max-w-[50%] mx-auto"
                            direction="up"
                            framerProps={{
                                show: { transition: { delay: 0.3 } },
                            }}
                            text="<p>Check out our top-rated reviews and ratings, reflecting the quality and excellence we bring to every project we undertake.</p>"
                        />
                    </div>
                    <BlurFade delay={0.3} duration={1} inView={true} inViewMargin="-50px">
                        <div className="flex snap-x snap-proximity gap-10 md:gap-0 pb-2 md:pb-0 overflow-x-auto md:overflow-x-visible md:grid md:grid-cols-3 md:divide-x-4 md:divide-primary">
                            {
                                [Platform1, Platform2, Platform3].map((e, i) => (
                                    <div key={i} className="snap-center shrink-0">
                                        <Image src={e} alt="platforms" className="mx-auto max-w-[250px] md:max-w-[200px] xl:max-w-[250px]" />
                                    </div>
                                ))
                            }
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section>
    )
}