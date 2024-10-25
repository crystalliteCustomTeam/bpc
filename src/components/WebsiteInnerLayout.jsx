// Components
import { ContactUs, CTA, VideoReviews, SmallBanner, Testimonials } from "@/components"
// Media
import SmallBanner3Bg from "media/samllBanners/banner3.png"

export default function WebsiteInnerLayout() {
    return (
        <>
            <SmallBanner
                alignCenter={true}
                fullWidth={false}
                overlay={true}
                overlayColor="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-primary -z-10 opacity-70"
                direction="up"
                img={SmallBanner3Bg}
                subTitle="<span>Time Is Running Out!</span>"
                title="<h2>Let’s Get It <span class='text-card-foreground'>Published Your Book <br class='hidden md:block' /> Is A </span>  Global Best Seller!</h2>"
                desc="<p>Over 18,000 authors have published with us on Amazon and other major platforms. Access the world's best printing and ebook publishing services at your fingertips.</p>">
                <CTA text="Connect With Us!" variant="dark" className="hover:bg-card-foreground/90" />
                <CTA text="Call Us Now!" variant="darkOutline" className="hover:bg-card-foreground" />
            </SmallBanner>
            <Testimonials />
            <VideoReviews />
            <ContactUs />
        </>
    )
}
