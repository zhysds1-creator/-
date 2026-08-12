import type { ReactNode } from 'react'

interface PhoneViewportProps {
  children: ReactNode
}

export function PhoneViewport({ children }: PhoneViewportProps) {
  return <div className="phone-viewport">{children}</div>
}
