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
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle className="text-brand-text-dark dark:text-brand-text-light">{title}</CardTitle>
        </div>
        <CardDescription className="text-brand-text-muted dark:text-slate-300">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="grid gap-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-brand-text-muted dark:text-slate-400">Duration:</span>
            <span className="font-medium text-brand-text-dark dark:text-brand-text-light">{duration}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/program-path/${title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
          <Button variant="brandOutline" className="w-full justify-between">
            <span>View Details</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
