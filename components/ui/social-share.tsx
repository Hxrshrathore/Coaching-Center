"use client"

import { Facebook, Twitter, Linkedin, Mail, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

interface SocialShareProps {
  url: string
  title: string
  description?: string
  className?: string
}

export function SocialShare({ url, title, description = "", className = "" }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const shareLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-4 w-4" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4" />,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    },
    {
      name: "Email",
      icon: <Mail className="h-4 w-4" />,
      url: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
    },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(
      () => {
        toast({
          title: "Link copied!",
          description: "The link has been copied to your clipboard.",
        })
      },
      (err) => {
        console.error("Could not copy text: ", err)
      },
    )
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${link.name}`}
        >
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            {link.icon}
            <span className="sr-only">Share on {link.name}</span>
          </Button>
        </a>
      ))}
      <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={copyToClipboard} aria-label="Copy link">
        <LinkIcon className="h-4 w-4" />
        <span className="sr-only">Copy link</span>
      </Button>
    </div>
  )
}
