interface TrackMetadataProps {
  contextLines?: string[]
  badges?: string[]
}

export function TrackMetadata({ contextLines = [], badges = [] }: TrackMetadataProps) {
  return (
    <div className="track-metadata">
      {contextLines.length > 0 && (
        <div className="context-lines">
          {contextLines.map((line) => (
            <div key={line} className="context-line">
              {line}
            </div>
          ))}
        </div>
      )}

      {badges.length > 0 && (
        <div className="badge-row">
          {badges.map((badge) => (
            <span key={badge} className="tiny-badge">
              {badge}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
