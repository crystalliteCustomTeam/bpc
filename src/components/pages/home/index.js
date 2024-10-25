// Next
import dynamic from "next/dynamic"

const Hero = dynamic(() => import("./Hero"))
const InlcudedPackage = dynamic(() => import("./InlcudedPackage"))

export {
    Hero,
    InlcudedPackage
}