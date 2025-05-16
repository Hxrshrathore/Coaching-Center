"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface StudentGalleryProps {
  className?: string
}

export function StudentGallery({ className }: StudentGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: "/students/interactive-learning-1.jpeg",
      alt: "Students interacting with digital content at Ascent Coaching Classes",
    },
    {
      src: "/students/student-group-1.jpeg",
      alt: "Group of students at Ascent Coaching Classes showing thumbs up",
    },
    {
      src: "/students/interactive-learning-2.jpeg",
      alt: "Students engaging with educational content on smart board",
    },
    {
      src: "/students/interactive-learning-3.jpeg",
      alt: "Students pointing at educational content in classroom",
    },
    {
      src: "/students/student-group-2.jpeg",
      alt: "Happy students at Ascent Coaching Classes",
    },
    {
      src: "/students/student-group-3.jpeg",
      alt: "Students showing enthusiasm at Ascent Coaching Classes",
    },
    {
      src: "/students/interactive-learning-4.jpeg",
      alt: "Students engaged in interactive learning",
    },
    {
      src: "/students/interactive-learning-5.jpeg",
      alt: "Students viewing educational content on screen",
    },
    {
      src: "/students/student-group-4.jpeg",
      alt: "Group of students showing thumbs up at Ascent Coaching Classes",
    },
    {
      src: "/students/interactive-learning-6.jpeg",
      alt: "Students participating in interactive learning session",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className={cn("relative w-full overflow-hidden rounded-xl", className)}>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <Image
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          fill
          className="object-cover transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-center text-white">
          <p className="text-sm md:text-base">{images[currentIndex].alt}</p>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40"
        onClick={prevSlide}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40"
        onClick={nextSlide}
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            } transition-all duration-300`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
