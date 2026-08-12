import { useCallback, useState } from 'react'

export function useFeedNavigation(total: number) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToIndex = useCallback(
    (index: number) => {
      if (total <= 1) {
        return
      }

      const nextIndex = (index + total) % total
      setCurrentIndex(nextIndex)
    },
    [total],
  )

  const goToNext = useCallback(() => {
    goToIndex(currentIndex + 1)
  }, [currentIndex, goToIndex])

  const goToPrevious = useCallback(() => {
    goToIndex(currentIndex - 1)
  }, [currentIndex, goToIndex])

  return {
    currentIndex,
    setCurrentIndex,
    goToNext,
    goToPrevious,
  }
}
