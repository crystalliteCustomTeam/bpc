// Components
import Content from "./Content"
import Slider from "./Slider"

export default function AwardedBooks() {
    return (
        <section>
            <div className="relative overflow-hidden my-[50px] xl:my-[70px] 2xl:my-[100px]">
                <div className="container">
                    <div className="md:flex items-center justify-between">
                        <Content />
                        <Slider />
                    </div>
                </div>
            </div>
        </section>
    )
}