// Components
import { AwardedBooks, CTA, HeroLogos, PortfoliosSlider, Process, ReviewsPlatforms, ServicesWithTabs, SmallBanner, WebsiteInnerLayout } from "@/components"
import { Hero, InlcudedPackage } from "@/components/pages/home"
// Media
import SmallBanner2Bg from "media/samllBanners/banner2.png"

export default function Page() {
  return (
    <>
      <Hero />
      <HeroLogos />
      <AwardedBooks />
      <ServicesWithTabs />
      <PortfoliosSlider />
      <ReviewsPlatforms />
      <SmallBanner subTitle="<span>We Aim To Make You A Best Selling Author!</span>">
        <CTA text="Connect With Us!" variant="dark" className="hover:bg-card-foreground/90" />
        <CTA text="Call Us Now!" variant="darkOutline" className="hover:bg-card-foreground" />
      </SmallBanner>
      <Process />
      <SmallBanner
        img={SmallBanner2Bg}
        title="<h2><span class='text-primary'>6,000+</span> Authors Trust Our <br class='hidden md:block' /> <span class='text-primary'>Amazon Publishing Services</span> to <br class='hidden md:block' /> Make Their Books Bestsellers</h2>"
        desc="<p>Your book is the next best seller. Everything you need to succeed on Amazon is within your reach. Our expert Amazon book publishing services help you maximize your book’s potential and earn top royalties.</p>">
        <CTA text="Connect With Us!" />
        <CTA text="Call Us Now!" variant="destructive" />
      </SmallBanner>
      <InlcudedPackage />
      <WebsiteInnerLayout />
    </>
  )
}