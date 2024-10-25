// Components
import { Marquee } from "@/components"
// Media
import Logo1 from "media/heroLogos/1.svg"
import Logo2 from "media/heroLogos/2.svg"
import Logo3 from "media/heroLogos/3.svg"
import Logo4 from "media/heroLogos/4.svg"
import Logo5 from "media/heroLogos/5.svg"
import Logo6 from "media/heroLogos/6.svg"
import Logo7 from "media/heroLogos/7.svg"
import Logo8 from "media/heroLogos/8.svg"
// Next
import Image from "next/image"

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8]

export default function HeroLogos({ space = "py-[25px] md:py-[50px]" }) {
    return (
        <section>
            <div className={`bg-popover ${space}`}>
                <div className="container">
                    <div className="relative overflow-hidden">
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {logos.map((logo, i) => (
                                <Image src={logo} alt="logo" key={i} />
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-popover dark:from-popover"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-popover dark:from-popover"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
