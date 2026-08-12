import { Heart, MessageCircle, MoreVertical, Share2 } from 'lucide-react'

interface PlayerActionsProps {
  liked: boolean
  onToggleLike: () => void
  likes: string
  comments: string
  shares: string
}

export function PlayerActions({
  liked,
  onToggleLike,
  likes,
  comments,
  shares,
}: PlayerActionsProps) {
  return (
    <div className="player-actions">
      <div className="action-cluster">
        <button
          type="button"
          className={`action-button ${liked ? 'liked' : ''}`}
          onClick={onToggleLike}
          aria-label="喜欢"
        >
          <Heart size={18} strokeWidth={2} fill={liked ? 'currentColor' : 'none'} />
        </button>

        <div className="stat-pill">
          <MessageCircle size={16} strokeWidth={2} />
          <span>{comments}</span>
        </div>

        <div className="stat-pill">
          <Share2 size={16} strokeWidth={2} />
          <span>{shares}</span>
        </div>
      </div>

      <div className="toolbar-end">
        <div className="stat-mini">{likes}</div>
        <button type="button" className="action-button muted" aria-label="更多操作">
          <MoreVertical size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}
