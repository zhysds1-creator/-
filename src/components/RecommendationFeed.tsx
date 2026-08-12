import type { PointerEvent, ReactNode, WheelEvent } from 'react'
import { useRef } from 'react'

interface RecommendationFeedProps {
  children: ReactNode
  isSheetOpen: boolean
  onNext: () => void
  onPrevious: () => void
}

export function RecommendationFeed({
  children,
  isSheetOpen,
  onNext,
  onPrevious,
}: RecommendationFeedProps) {
  const dragStartY = useRef<number | null>(null)
  const wheelAccumulator = useRef(0)

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (isSheetOpen) {
      return
    }

    wheelAccumulator.current += event.deltaY
    if (Math.abs(wheelAccumulator.current) > 52) {
      if (wheelAccumulator.current > 0) {
        onNext()
      } else {
        onPrevious()
      }
      wheelAccumulator.current = 0
    }
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragStartY.current = event.clientY
  }

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStartY.current === null) {
      return
    }

    const delta = event.clientY - dragStartY.current
    if (Math.abs(delta) > 80) {
      if (delta > 0) {
        onPrevious()
      } else {
        onNext()
      }
    }

    dragStartY.current = null
  }

  return (
    <div
      className="recommendation-feed"
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {children}
    </div>
  )
}
