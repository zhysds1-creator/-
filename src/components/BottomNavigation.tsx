import { Play, Pause } from 'lucide-react'

interface BottomNavigationProps {
  isPlaying: boolean
  onTogglePlay: () => void
}

export function BottomNavigation({ isPlaying, onTogglePlay }: BottomNavigationProps) {
  return (
    <nav className="bottom-navigation" aria-label="底部导航">
      <button type="button" className="nav-link is-muted" aria-label="发现">
        发现
      </button>
      <button type="button" className="nav-link is-active" aria-label="听抖音">
        听抖音
      </button>

      <button
        type="button"
        className="play-toggle"
        onClick={onTogglePlay}
        aria-label={isPlaying ? '暂停' : '播放'}
      >
        {isPlaying ? <Pause size={20} strokeWidth={2} /> : <Play size={20} strokeWidth={2} />}
      </button>

      <button type="button" className="nav-link is-muted" aria-label="会员">
        会员
      </button>
      <button type="button" className="nav-link is-muted" aria-label="我的">
        我的
      </button>
    </nav>
  )
}
