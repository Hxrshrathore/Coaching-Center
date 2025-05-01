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
      image: "/carousel-jee.jpg",
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
    <Carousel className="h-[400px] md:h-[500px] rounded-xl overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className="relative h-full w-full">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col justify-end p-6 md:p-10">
            {item.badge && (
              <Badge className="w-fit mb-4 bg-brand-accent text-brand-text-dark hover:bg-brand-accent/90 font-medium">
                {item.badge}
              </Badge>
            )}
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{item.title}</h2>
            <p className="text-white mb-6 max-w-2xl">{item.description}</p>
            <Link href={item.link}>
              <Button className="gap-2 bg-white text-brand-dark hover:bg-brand-light font-medium">
                {item.linkText} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  )
}
