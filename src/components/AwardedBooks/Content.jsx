// Components
import { CTA, BoxReveal } from "@/components"

export default function Content() {
    return (
        <div className="md:w-[55%] lg:w-[50%] xl:w-[47%] 2xl:w-[40%] pb-[50px] md:py-[100px] relative before:content-[''] before:absolute before:hidden md:before:block before:w-[1px] before:h-full before:right-0 before:top-0 before:bottom-0 before:bg-[#707070] md:before:right-[-1rem] lg:before:right-[-1.5rem] xl:before:right-[-0.5rem] 2xl:before:right-[-2.5rem]">
            <BoxReveal>
                <h2 className="font-mono text-[30px] lg:text-[35px] xl:text-[40px] leading-snug sm:leading-tight mb-3">
                    Bestsellers <span className="text-muted-foreground">Start Here!</span>
                </h2>
            </BoxReveal>
            <BoxReveal>
                <p className="text-[14px] xl:text-[16px] leading-loose lg:leading-relaxed mb-5 max-w-[450px]">
                    Let us help you share your words with the world. Publish on demand with best-selling book publishers!
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
    )
}