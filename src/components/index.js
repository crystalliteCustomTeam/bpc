// Next
import dynamic from "next/dynamic"

// Shadcn UI
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Skeleton } from "./ui/skeleton"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle } from "./ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "./ui/sheet"

// Magic UI
import LetterPullup from "./magicui/letter-pullup"
import BlurFade from "./magicui/blur-fade"
import Marquee from "./magicui/marquee"
import BoxReveal from "./magicui/box-reveal"
import FadeText from "./magicui/fade-text"


import CTA from "./CTA"
const Header = dynamic(() => import("./Header/Navbar"))
const HeroLogos = dynamic(() => import("./HeroLogos"))
const AwardedBooks = dynamic(() => import("./AwardedBooks/AwardedBooks"))
const AutoPlaySlider = dynamic(() => import("./AutoPlaySlider"))
const AutoScrollSlider = dynamic(() => import("./AutoScrollSlider"))
const ServicesWithTabs = dynamic(() => import("./ServicesWithTabs"))
const PortfoliosSlider = dynamic(() => import("./PortfoliosSlider"))
const ReviewsPlatforms = dynamic(() => import("./ReviewsPlatforms"))
const SmallBanner = dynamic(() => import("./SmallBanner"))
const Process = dynamic(() => import("./Process"))
const Testimonials = dynamic(() => import("./Testimonials/Testimonials"))
const VideoReviews = dynamic(() => import("./VideoReviews/VideoReviews"))
const VideoModal = dynamic(() => import("./VideoModal"))
const Footer = dynamic(() => import("./Footer"))
const FrontEndForm = dynamic(() => import("./FrontEndForm"))
const ContactUs = dynamic(() => import("./ContactUs"))
const WebsiteInnerLayout = dynamic(() => import("./WebsiteInnerLayout"))

export {
    Button,
    CTA,
    LetterPullup,
    BlurFade,
    HeroLogos,
    Marquee,
    AwardedBooks,
    BoxReveal,
    AutoPlaySlider,
    AutoScrollSlider,
    ServicesWithTabs,
    FadeText,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    PortfoliosSlider,
    ReviewsPlatforms,
    SmallBanner,
    Process,
    Testimonials,
    VideoReviews,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    VideoModal,
    Skeleton,
    Footer,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    Input,
    Textarea,
    Label,
    FormDescription,
    FormLabel,
    FrontEndForm,
    ContactUs,
    Header,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
    WebsiteInnerLayout
}