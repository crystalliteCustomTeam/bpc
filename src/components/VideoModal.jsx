"use client"
// React
import { useState } from "react"
// Next
import Image from "next/image"
// Components
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components"
// Media
import { PlayIcon } from "@radix-ui/react-icons"

export default function VideoModal({ video, thumbnail }) {
    const [isLoading, setIsLoading] = useState(true)
    const handleLoadedData = () => {
        setIsLoading(false)
    }
    return (
        <Dialog>
            <DialogTrigger className="relative block">
                <Image src={thumbnail} alt="thumbnail" />
                <PlayIcon className="h-10 w-10 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 text-primary bg-white rounded-full shadow-md" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="hidden">Video Player</DialogTitle>
                    <DialogDescription className="relative">
                        {isLoading && (
                            <Image src={thumbnail} alt="thumbnail" />
                        )}
                        <video
                            tabIndex={0}
                            loop
                            autoPlay
                            playsInline
                            aria-label="Video Modal"
                            className={`max-w-full w-full h-full object-cover object-center ${isLoading ? 'hidden' : ''}`}
                            onLoadedData={handleLoadedData}
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}