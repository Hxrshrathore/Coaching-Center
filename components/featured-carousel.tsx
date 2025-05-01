import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"

interface FeaturedCarouselItem {
  title: string
  description: string
  image: string
  badge?: string
  link: string
  linkText: string
}

export function FeaturedCarousel() {
  const items: FeaturedCarouselItem[] = [
    {
      title: "JEE Advanced Intensive Program",
      description:
        "A comprehensive program designed to help students crack JEE Advanced with personalized mentoring and weekly assessments.",
      image: "/carousel-jee.png",
      badge: "New Batch",
      link: "/program-path",
      linkText: "Explore Program",
    },
    {
      title: "NEET Success Formula",
      description:
        "Our specialized NEET preparation program with focus on Biology, Physics, and Chemistry to help you secure a top rank.",
      image: "/carousel-neet.png",
      badge: "Limited Seats",
      link: "/program-path",
      linkText: "Learn More",
    },
    {
      title: "SSC & Banking Fast Track",
      description:
        "Accelerated preparation for SSC and Banking exams with comprehensive coverage of all subjects and regular mock tests.",
      image: "/carousel-ssc.png",
      badge: "Enrolling Now",
      link: "/program-path",
      linkText: "Join Now",
    },
  ]

  return (
    <Carousel className="h-[300px] sm:h-[350px] md:h-[450px] rounded-none sm:rounded-xl overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className="relative h-full w-full">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-10">
            {item.badge && (
              <Badge className="w-fit mb-2 sm:mb-4 bg-blue-600 text-white hover:bg-blue-700 text-xs sm:text-sm">
                {item.badge}
              </Badge>
            )}
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{item.title}</h2>
            <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6 max-w-2xl line-clamp-2 sm:line-clamp-none">
              {item.description}
            </p>
            <Link href={item.link}>
              <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base">
                {item.linkText} <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  )
}
