import { ChevronRight } from 'lucide-react'

interface SimilarVersionsEntryProps {
  count: number
  onClick: () => void
}

export function SimilarVersionsEntry({ count, onClick }: SimilarVersionsEntryProps) {
  return (
    <button type="button" className="similar-versions-entry" onClick={onClick} aria-label="打开相似版本">
      <span>相似版本 · {count}</span>
      <ChevronRight size={18} strokeWidth={2} />
    </button>
  )
}
