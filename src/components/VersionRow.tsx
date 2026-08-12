import { LoaderCircle } from 'lucide-react'
import type { TrackVersion } from '../data/tracks'

interface VersionRowProps {
  version: TrackVersion
  isCurrent: boolean
  isPending: boolean
  isFailure: boolean
  onClick: (version: TrackVersion) => void
}

export function VersionRow({
  version,
  isCurrent,
  isPending,
  isFailure,
  onClick,
}: VersionRowProps) {
  return (
    <button
      type="button"
      className={`version-row ${isCurrent ? 'is-current' : ''} ${isPending ? 'is-pending' : ''}`}
      onClick={() => onClick(version)}
      aria-label={`切换到 ${version.title}`}
      disabled={isPending || isCurrent}
    >
      <div className="version-artwork">
        <img src={version.artwork} alt={version.title} />
      </div>

      <div className="version-text">
        <div className="version-title-line">{version.title}</div>
        <div className="version-meta-line">
          {version.artist} · {version.versionType}
        </div>
      </div>

      <div className="version-status">
        {isCurrent ? (
          <div className="current-status">
            <span className="equalizer">
              <i />
              <i />
              <i />
            </span>
            <span>当前播放</span>
          </div>
        ) : isPending ? (
          <span className="spinner-state">
            <LoaderCircle size={14} className="spinner" />
          </span>
        ) : isFailure ? (
          <span className="failure-state">暂时无法播放</span>
        ) : null}
      </div>
    </button>
  )
}
