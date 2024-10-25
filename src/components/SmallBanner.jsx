// Next
import Image from "next/image"
// Media
import Bg from "media/samllBanners/banner1.png"
// Components
import { FadeText } from "@/components"

export default function SmallBanner({
    img = Bg,
    subTitle,
    title = "<h2>Working With <span class='text-card-foreground'>Best Selling <br class='hidden md:block' /> Publishers</span> Is Stress-Free & Easy!</h2>",
    desc = "<p>We are your trusted support, every step to the top, making your book a lasting legacy.</p>",
    children,
    alignCenter = false,
    fullWidth = true,
    overlay = false,
    overlayColor = " ",
    direction = "left"
}) {
    return (
        <section>
            <div className={`${fullWidth ? "py-[50px] xl:py-[80px]" : " "} text-primary-foreground relative z-10`}>
                {fullWidth && <Image src={img} alt="Bg" fill={true} className="-z-10 object-cover object-right opacity-90 lg:opacity-100" />}
                <div className={`${fullWidth ? "" : "relative overflow-hidden rounded-2xl py-[50px] z-10"} container`}>
                    {!fullWidth && <Image src={img} alt="Bg" fill={true} className="-z-10 object-cover object-right opacity-90 lg:opacity-100" />}
                    {!fullWidth && overlay ? <div className={overlayColor}></div> : null}
                    <div className={`${alignCenter ? "text-center" : " "}`}>
                        {
                            subTitle &&
                            <FadeText className="text-[16px] md:text-[18px] leading-snug mb-2 font-medium text-card-foreground block"
                                direction={direction}
                                framerProps={{
                                    show: { transition: { delay: 0.3 } },
                                }}
                                text={subTitle}
                            />
                        }
                        <FadeText className="font-mono xs:text-[30px] text-[35px] lg:text-[40px] xl:text-[45px] leading-snug mb-4 capitalize"
                            direction={direction}
                            framerProps={{
                                show: { transition: { delay: 0.3 } },
                            }}
                            text={title}
                        />
                        <FadeText className={`leading-loose lg:leading-relaxed text-[14px] lg:text-[16px] lg:max-w-[52%] ${alignCenter ? "mx-auto" : ""}`}
                            direction={direction}
                            framerProps={{
                                show: { transition: { delay: 0.3 } },
                            }}
                            text={desc}
                        />
                        <div className={`flex items-center gap-4 mt-5 ${alignCenter ? "justify-center" : " "}`}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}