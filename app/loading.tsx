import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600 dark:text-blue-400" />
        <p className="text-lg font-medium text-slate-700 dark:text-slate-300">Loading...</p>
      </div>
    </div>
  )
}
