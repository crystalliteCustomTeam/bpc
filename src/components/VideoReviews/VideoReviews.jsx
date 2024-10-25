// Components
import Slider from "./Slider"
import Content from "./Content"

export default function Reviews() {
    return (
        <section>
            <div className="py-[100px] overflow-hidden bg-popover">
                <Content />
                <Slider />
            </div>
        </section>
    )
}