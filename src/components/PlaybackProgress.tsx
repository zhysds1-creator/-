interface PlaybackProgressProps {
  progress: number
  onSeek: (value: number) => void
}

export function PlaybackProgress({ progress, onSeek }: PlaybackProgressProps) {
  return (
    <div className="playback-progress-wrap">
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={progress}
        onChange={(event) => onSeek(Number(event.target.value))}
        aria-label="播放进度"
      />
    </div>
  )
}
