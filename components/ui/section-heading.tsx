import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animations/fade-in"

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center" | "right"
  titleClassName?: string
  descriptionClassName?: string
}

export function SectionHeading({
  badge,
  title,
  description,
  className,
  align = "center",
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className,
      )}
    >
      <div className="space-y-2">
        {badge && (
          <FadeIn delay={0.1}>
            <Badge className="bg-brand-light text-brand-blue hover:bg-brand-light dark:bg-brand-blue/20 dark:text-brand-blue">
              {badge}
            </Badge>
          </FadeIn>
        )}
        <FadeIn delay={0.2}>
          <h2
            className={cn(
              "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-text-dark dark:text-brand-text-light",
              titleClassName,
            )}
          >
            {title}
          </h2>
        </FadeIn>
        {description && (
          <FadeIn delay={0.3}>
            <p
              className={cn(
                "max-w-[900px] text-brand-text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-300",
                {
                  "mx-auto": align === "center",
                  "ml-auto": align === "right",
                },
                descriptionClassName,
              )}
            >
              {description}
            </p>
          </FadeIn>
        )}
      </div>
    </div>
  )
}
