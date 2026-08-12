interface MediaArtworkProps {
  artwork: string
  alt: string
}

export function MediaArtwork({ artwork, alt }: MediaArtworkProps) {
  return (
    <div className="media-artwork">
      <img src={artwork} alt={alt} />
    </div>
  )
}
