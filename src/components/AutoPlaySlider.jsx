"use client"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import ClassNames from "embla-carousel-class-names"
import Autoplay from "embla-carousel-autoplay"
// Components
import { PrevButton, NextButton, usePrevNextButtons } from "@/components/SliderArrows"

export default function AutoPlaySlider({ wrapperClasses = " ", options, children, arrows = true }) {
    const plugins = [
        ClassNames(),
        Autoplay({ delay: 3000, stopOnFocusIn: false, stopOnInteraction: false })
    ]
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: true, ...options }, plugins)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <>
            <div className={`overflow-hidden ${wrapperClasses}`} ref={emblaRef}>
                <div className="flex [margin-left:calc(1rem_*_-1)]">
                    {children}
                </div>
            </div>
            {arrows && <div className="flex gap-10 justify-center mt-5">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>}
        </>
    )
}