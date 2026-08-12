import { Menu, Search } from 'lucide-react'

export function TopNavigation() {
  return (
    <header className="top-navigation">
      <button type="button" className="icon-button" aria-label="菜单">
        <Menu size={18} strokeWidth={2} />
      </button>

      <div className="mode-select">模式选择</div>

      <button type="button" className="icon-button" aria-label="搜索">
        <Search size={18} strokeWidth={2} />
      </button>
    </header>
  )
}
