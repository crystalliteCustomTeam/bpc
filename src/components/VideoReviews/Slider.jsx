// Components
import { AutoScrollSlider, BlurFade, VideoModal } from "@/components"
// Media
import Thumb1 from "media/reviews/1.jpg"
import Thumb2 from "media/reviews/2.jpg"
import Thumb3 from "media/reviews/3.jpg"
import Thumb4 from "media/reviews/4.jpg"
import Thumb5 from "media/reviews/5.jpg"

const data = [
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/969194426/rendition/720p/file.mp4?loc=external&log_user=0&signature=314a82373f6916e303e42bbd75fd48216ab778c3b54be059a125fa038d0058a5",
        thumbnail: Thumb1
    },
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/969194638/rendition/720p/file.mp4?loc=external&log_user=0&signature=eab03df00ec6966b6d0ae173c3fd617340dc97c7eedaa0e4a889f850db3d822e",
        thumbnail: Thumb2
    },
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/969194554/rendition/720p/file.mp4?loc=external&log_user=0&signature=e777464cfa06a62d32579f700063282c52a5034349724cbd5c4b1b3327308638",
        thumbnail: Thumb3
    },
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/969194720/rendition/720p/file.mp4?loc=external&log_user=0&signature=bd49864c9d6ad083be848db0fcded846dc22cfd9662e31f46816b838423b30d4",
        thumbnail: Thumb4
    },
    {
        video: "https://player.vimeo.com/progressive_redirect/playback/969194794/rendition/720p/file.mp4?loc=external&log_user=0&signature=7c84317b357e86271e3f5bfe7f0bae3f933a627dc4db82090ca48abcee148470",
        thumbnail: Thumb5
    }
]

export default function Slider() {
    return (
        <div className="relative">
            <AutoScrollSlider wrapperClasses="overflow-visible">
                {data.map(({ video, thumbnail }, i) => (
                    <div key={i} className="grow-0 shrink-0 basis-auto pl-4">
                        <BlurFade delay={0.1} duration={2} inView={true} inViewMargin="-50px">
                            <div className="rounded-lg max-w-[280px] md:max-w-[400px] overflow-hidden shadow-md">
                                <VideoModal video={video} thumbnail={thumbnail} />
                            </div>
                        </BlurFade>
                    </div>
                ))}
            </AutoScrollSlider>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-white"></div>
        </div>
    )
}