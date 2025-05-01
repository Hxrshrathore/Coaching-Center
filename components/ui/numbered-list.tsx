import { cn } from "@/lib/utils"

interface NumberedListProps {
  items: {
    title: string
    description: string
  }[]
  className?: string
  numberClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  itemClassName?: string
}

export function NumberedList({
  items,
  className,
  numberClassName,
  titleClassName,
  descriptionClassName,
  itemClassName,
}: NumberedListProps) {
  return (
    <ol className={cn("space-y-6", className)}>
      {items.map((item, index) => (
        <li key={index} className={cn("flex items-start gap-4", itemClassName)}>
          <div
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold",
              numberClassName,
            )}
          >
            {index + 1}
          </div>
          <div className="space-y-1">
            <h3 className={cn("font-medium leading-none", titleClassName)}>{item.title}</h3>
            <p className={cn("text-sm text-slate-500 dark:text-slate-400", descriptionClassName)}>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
