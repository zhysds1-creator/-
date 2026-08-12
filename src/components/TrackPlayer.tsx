import type { Track, TrackVersion } from '../data/tracks'
import { BottomNavigation } from './BottomNavigation'
import { MediaArtwork } from './MediaArtwork'
import { PlayerActions } from './PlayerActions'
import { PlaybackProgress } from './PlaybackProgress'
import { SimilarVersionsEntry } from './SimilarVersionsEntry'
import { TopNavigation } from './TopNavigation'
import { TrackMetadata } from './TrackMetadata'

interface TrackPlayerProps {
  track: Track
  currentVersion: TrackVersion
  isPlaying: boolean
  progress: number
  liked: boolean
  showSimilarVersions: boolean
  onToggleLike: () => void
  onTogglePlay: () => void
  onSeek: (value: number) => void
  onOpenSheet: () => void
  onCloseSheet: () => void
}

export function TrackPlayer({
  track,
  currentVersion,
  isPlaying,
  progress,
  liked,
  showSimilarVersions,
  onToggleLike,
  onTogglePlay,
  onSeek,
  onOpenSheet,
  onCloseSheet,
}: TrackPlayerProps) {
  return (
    <div className="player-screen" style={{ backgroundColor: track.dominantColor }}>
      <div className="screen-inner">
        <TopNavigation />

        <div className="player-content">
          <MediaArtwork artwork={currentVersion.artwork} alt={`${currentVersion.title} artwork`} />

          <TrackMetadata contextLines={track.contextLines} badges={track.badges} />

          <div className="title-block">
            <div className="title-row">
              <h1>{currentVersion.title}</h1>
              {track.badges?.slice(0, 2).map((badge) => (
                <span key={badge} className="tiny-badge title-badge">
                  {badge}
                </span>
              ))}
            </div>
            <div className="artist-line">{currentVersion.artist}</div>
          </div>

          {showSimilarVersions ? (
            <SimilarVersionsEntry count={track.versions.length} onClick={onOpenSheet} />
          ) : null}

          <PlayerActions
            liked={liked}
            onToggleLike={onToggleLike}
            likes={track.socialStats.likes}
            comments={track.socialStats.comments}
            shares={track.socialStats.shares}
          />

          <PlaybackProgress progress={progress} onSeek={onSeek} />
        </div>

        <BottomNavigation isPlaying={isPlaying} onTogglePlay={onTogglePlay} />
      </div>

      <button type="button" className="screen-hidden-close" aria-label="关闭相似版本" onClick={onCloseSheet} />
    </div>
  )
}
