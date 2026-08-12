import { useEffect, useMemo, useState } from 'react'
import { PortfolioShell } from './components/PortfolioShell'
import { PhoneViewport } from './components/PhoneViewport'
import { RecommendationFeed } from './components/RecommendationFeed'
import { SimilarVersionsSheet } from './components/SimilarVersionsSheet'
import { TrackPlayer } from './components/TrackPlayer'
import { tracks, type TrackVersion } from './data/tracks'
import { useFeedNavigation } from './hooks/useFeedNavigation'
import { usePlaybackSimulation } from './hooks/usePlaybackSimulation'

function App() {
  const { currentIndex, goToNext, goToPrevious } = useFeedNavigation(tracks.length)
  const { isPlaying, setIsPlaying, progress, setProgress } = usePlaybackSimulation()

  const [liked, setLiked] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [currentVersionId, setCurrentVersionId] = useState(() => tracks[0].versions[0]?.id ?? tracks[0].id)
  const [pendingVersionId, setPendingVersionId] = useState<string | null>(null)
  const [failureVersionId, setFailureVersionId] = useState<string | null>(null)

  const currentTrack = tracks[currentIndex]

  const fallbackVersion: TrackVersion = useMemo(
    () => ({
      id: currentTrack.id,
      title: currentTrack.title,
      artist: currentTrack.artist,
      versionType: '原版',
      artwork: currentTrack.artwork,
    }),
    [currentTrack],
  )

  const currentVersion = useMemo(
    () =>
      currentTrack.versions.find((version) => version.id === currentVersionId) ??
      fallbackVersion,
    [currentTrack.versions, currentVersionId, fallbackVersion],
  )

  const orderedVersions = useMemo(() => {
    if (!currentTrack.versions.length) return []
    const selected = currentTrack.versions.find((version) => version.id === currentVersionId) ?? currentTrack.versions[0]
    return [selected, ...currentTrack.versions.filter((version) => version.id !== selected.id)]
  }, [currentTrack.versions, currentVersionId])

  const showSimilarVersions = currentTrack.versions.length >= 2

  useEffect(() => {
    const nextTrack = tracks[currentIndex]
    const nextDefault = nextTrack.versions[0] ?? fallbackVersion
    setCurrentVersionId((previousVersionId) => {
      const exists = nextTrack.versions.some((version) => version.id === previousVersionId)
      return exists ? previousVersionId : nextDefault.id
    })
    setProgress(0)
    setIsPlaying(true)
  }, [currentIndex, fallbackVersion])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isSheetOpen) {
        setIsSheetOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isSheetOpen])

  const handleTrackChange = (direction: 1 | -1) => {
    if (isSheetOpen) {
      return
    }

    if (direction > 0) {
      goToNext()
    } else {
      goToPrevious()
    }
  }

  const handleVersionSelect = (version: TrackVersion) => {
    if (pendingVersionId || version.id === currentVersionId) {
      return
    }

    setPendingVersionId(version.id)
    setFailureVersionId(null)

    window.setTimeout(() => {
      const shouldFail = false

      if (shouldFail) {
        setFailureVersionId(version.id)
        setPendingVersionId(null)
        window.setTimeout(() => {
          setFailureVersionId(null)
        }, 1500)
        return
      }

      setCurrentVersionId(version.id)
      setProgress(0)
      setIsPlaying(true)
      setPendingVersionId(null)
      setIsSheetOpen(false)
    }, 350)
  }

  const handleSeek = (value: number) => {
    setProgress(value)
  }

  const handleOpenSheet = () => {
    if (!showSimilarVersions) return
    setIsSheetOpen(true)
  }

  return (
    <PortfolioShell>
      <PhoneViewport>
        <RecommendationFeed
          isSheetOpen={isSheetOpen}
          onNext={() => handleTrackChange(1)}
          onPrevious={() => handleTrackChange(-1)}
        >
          <TrackPlayer
            track={currentTrack}
            currentVersion={currentVersion}
            isPlaying={isPlaying}
            progress={progress}
            liked={liked}
            showSimilarVersions={showSimilarVersions}
            onToggleLike={() => setLiked((value) => !value)}
            onTogglePlay={() => setIsPlaying((value) => !value)}
            onSeek={handleSeek}
            onOpenSheet={handleOpenSheet}
            onCloseSheet={() => setIsSheetOpen(false)}
          />
        </RecommendationFeed>

        {showSimilarVersions && (
          <SimilarVersionsSheet
            isOpen={isSheetOpen}
            versions={orderedVersions}
            currentVersionId={currentVersionId}
            pendingVersionId={pendingVersionId}
            failureVersionId={failureVersionId}
            onClose={() => setIsSheetOpen(false)}
            onSelectVersion={handleVersionSelect}
          />
        )}
      </PhoneViewport>
    </PortfolioShell>
  )
}

export default App
