// Components
import { BlurFade, AutoScrollSlider } from "@/components"
// Media
import Book1 from "media/awardedBooks/1.png"
import Book2 from "media/awardedBooks/2.png"
import Book3 from "media/awardedBooks/3.png"
import Book4 from "media/awardedBooks/4.png"
import Book5 from "media/awardedBooks/5.png"
import Book6 from "media/awardedBooks/6.png"
import Book7 from "media/awardedBooks/7.png"
import Book8 from "media/awardedBooks/8.png"
// Next
import Image from "next/image"

const alt = "bookpublishingcompany"

export default function Slider() {
    return (
        <div className="md:w-[40%] lg:w-[45%] xl:w-[50%] 2xl:w-[55%] md:absolute md:top-0 md:bottom-0 md:right-0 flex items-center md:overflow-hidden">
            <AutoScrollSlider wrapperClasses="overflow-visible">
                {
                    [Book1, Book2, Book3, Book4, Book5, Book6, Book7, Book8].map((e, i) => (
                        <div key={i} className="grow-0 shrink-0 basis-auto pl-4">
                            <BlurFade inView={true}>
                                <Image src={e} alt={alt} className="h-[350px] object-contain w-max" />
                            </BlurFade>
                        </div>
                    ))
                }
            </AutoScrollSlider>
        </div>
    )
}