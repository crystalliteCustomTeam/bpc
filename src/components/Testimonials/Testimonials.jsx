// Components
import Slider from "./Slider"
import Content from "./Content"

export default function Testimonials() {
    return (
        <section>
            <div className="py-[100px] overflow-hidden">
                <div className="container">
                    <Content />
                </div>
                <Slider />
            </div>
        </section>
    )
}