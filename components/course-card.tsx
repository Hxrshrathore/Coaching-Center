import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CourseCardProps {
  title: string
  description: string
  icon: ReactNode
  duration: string
  fee?: string
  color?: string
}

export function CourseCard({ title, description, icon, duration, color = "slate" }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full bg-white dark:bg-slate-800 border-none shadow-md">
      <CardHeader className="pb-2 sm:pb-4">
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle className="text-base sm:text-lg md:text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-xs sm:text-sm mt-1">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pt-0 pb-2 sm:pb-4">
        <div className="grid gap-2">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-slate-500 dark:text-slate-400">Duration:</span>
            <span className="font-medium">{duration}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={`/program-path/${title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
          <Button
            variant="outline"
            className={`w-full justify-between text-xs sm:text-sm border-${color}-200 text-${color}-700 hover:bg-${color}-50 hover:text-${color}-800 dark:border-${color}-800 dark:text-${color}-400 dark:hover:bg-${color}-950`}
          >
            <span>View Details</span>
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
