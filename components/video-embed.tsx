interface VideoEmbedProps {
  src: string
  title: string
}

export function VideoEmbed({ src, title }: VideoEmbedProps) {
  return (
    <div className="aspect-video relative overflow-hidden rounded-md">
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}
