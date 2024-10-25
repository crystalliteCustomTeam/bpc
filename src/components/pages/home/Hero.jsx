// Mext
import Image from "next/image"
// Media
import Bg from "media/home/heroBg.png"
import Books from "media/home/heroBooks.png"
// Components
import { CTA, LetterPullup, BlurFade } from "@/components"

const alt = "bookpublishingcompany"

export default function Hero() {
    return (
        <section>
            <div className="relative z-10 pb-[100px] md:pb-0 pt-[150px] bg-foreground">
                <Image src={Bg} alt="Bg" fill={true} className="-z-10 object-cover object-bottom" priority={true} quality={70} />
                <div className="container">
                    <div className="md:text-center text-primary-foreground">
                        <h1 className="font-mono xs:text-[30px] text-[35px] md:text-[40px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px] leading-snug mb-4">
                            Turn Your Manuscript Into A Best Seller <br className="hidden md:block" /> With <LetterPullup words={"Book Publishing Company"} className="text-muted-foreground" />
                        </h1>
                        <p className="lg:max-w-[90%] xl:max-w-[1100px] mx-auto leading-loose lg:leading-relaxed mb-5 text-[14px] lg:text-[16px]">
                            Your writing deserves recognition, and we’ll make it happen. Our experienced team handles every aspect of the publishing process, from editing, and designing, to printing and distribution. Partner with one of the leading book publishers and sell your book everywhere.
                        </p>
                        <div className="flex items-center md:justify-center gap-4 md:mb-10">
                            <CTA text="Connect With Us!" />
                            <CTA text="Call Us Now!" variant="destructive" />
                        </div>
                        <div className="hidden md:block">
                            <BlurFade>
                                <Image src={Books} alt={alt} priority={true} />
                            </BlurFade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
