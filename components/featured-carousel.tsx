"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel } from "@/components/ui/carousel"
import { useMobile } from "@/hooks/use-mobile"
import { useConnectionQuality, shouldReduceMotion } from "@/lib/performance-utils"
import { OptimizedImage } from "@/components/ui/optimized-image"

interface FeaturedCarouselItem {
  id: number
  title: string
  description: string
  image: string
  link: string
}

export function FeaturedCarousel() {
  const isMobile = useMobile()
  const isSlowConnection = useConnectionQuality()
  const reduceMotion = shouldReduceMotion(isMobile)
  const [isClient, setIsClient] = useState(false)

  // Set client-side rendering flag
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Simplified items for mobile or slow connections
  const items: FeaturedCarouselItem[] = [
    {
      id: 1,
      title: "JEE Preparation",
      description: "Comprehensive coaching for JEE Main & Advanced with expert faculty and proven results.",
      image: "/carousel-jee.png",
      link: "/program-path/jee",
    },
    {
      id: 2,
      title: "NEET Preparation",
      description: "Specialized medical entrance exam preparation with focus on Biology, Physics, and Chemistry.",
      image: "/carousel-neet.png",
      link: "/program-path/neet",
    },
    {
      id: 3,
      title: "Olympiad Training",
      description:
        "Expert coaching for Science, Math and other Olympiads to excel in national and international competitions.",
      image: "/placeholder.svg?key=gas6p",
      link: "/olympiad-programs",
    },
    {
      id: 4,
      title: "Class 4-12 Science Coaching",
      description: "Foundation and advanced courses for PCMB subjects for students from Class 4 to 12.",
      image: "/placeholder.svg?key=hhbhd",
      link: "/k12-science-coaching",
    },
  ]

  // For very slow connections, only show first two items
  const optimizedItems = isSlowConnection ? items.slice(0, 2) : items

  return (
    <div
      className={`${isMobile ? "h-[250px]" : "h-[300px] sm:h-[350px] md:h-[450px]"} rounded-none sm:rounded-xl overflow-hidden`}
    >
      {isClient ? (
        <Carousel className="h-full" autoPlay={!reduceMotion} interval={5000}>
          {optimizedItems.map((item, index) => (
            <div key={item.id} className="relative h-full w-full">
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
              <OptimizedImage
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes={isMobile ? "100vw" : "(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"}
                loading={index === 0 ? "eager" : "lazy"}
                mobileQuality={isSlowConnection ? 60 : 75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-10">
                <h2
                  className={`${isMobile ? "text-lg" : "text-xl sm:text-2xl md:text-4xl"} font-bold text-white mb-1 sm:mb-2`}
                >
                  {item.title}
                </h2>
                <p
                  className={`${isMobile ? "text-xs line-clamp-2" : "text-sm sm:text-base line-clamp-2 sm:line-clamp-none"} text-white/80 mb-3 sm:mb-6 max-w-2xl`}
                >
                  {item.description}
                </p>
                <Link href={item.link}>
                  <Button
                    className={`gap-2 bg-blue-600 hover:bg-blue-700 text-white ${isMobile ? "text-xs py-1 px-3" : "text-sm sm:text-base"}`}
                  >
                    Explore More <ArrowRight className={`${isMobile ? "h-3 w-3" : "h-3 w-3 sm:h-4 sm:w-4"}`} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        // Static placeholder during SSR
        <div className="h-full w-full bg-gray-200 dark:bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 dark:text-gray-600">Loading carousel...</div>
        </div>
      )}
    </div>
  )
}
