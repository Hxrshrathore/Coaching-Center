import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel } from "@/components/ui/carousel"

interface FeaturedCarouselItem {
  id: number
  title: string
  description: string
  image: string
  link: string
}

export function FeaturedCarousel() {
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
      image: "/students/interactive-learning-1.jpeg",
      link: "/olympiad-programs",
    },
    {
      id: 4,
      title: "Class 4-12 Science Coaching",
      description: "Foundation and advanced courses for PCMB subjects for students from Class 4 to 12.",
      image: "/students/interactive-learning-1.jpeg",
      link: "/k12-science-coaching",
    },
  ]

  return (
    <div className="h-[300px] sm:h-[350px] md:h-[450px] rounded-none sm:rounded-xl overflow-hidden">
      <Carousel className="h-full">
        {items.map((item, index) => (
          <div key={item.id} className="relative h-full w-full">
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-10">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{item.title}</h2>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6 max-w-2xl line-clamp-2 sm:line-clamp-none">
                {item.description}
              </p>
              <Link href={item.link}>
                <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base">
                  Explore More <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
