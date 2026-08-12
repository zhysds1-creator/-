import { useEffect, useState } from 'react'

export function usePlaybackSimulation() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isPlaying) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setProgress((current) => Math.min(current + 0.6, 100))
    }, 180)

    return () => window.clearInterval(timer)
  }, [isPlaying])

  return {
    isPlaying,
    setIsPlaying,
    progress,
    setProgress,
  }
}
