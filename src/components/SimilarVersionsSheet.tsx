import { AnimatePresence, motion } from 'framer-motion'
import type { TrackVersion } from '../data/tracks'
import { VersionRow } from './VersionRow'

interface SimilarVersionsSheetProps {
  isOpen: boolean
  versions: TrackVersion[]
  currentVersionId: string
  pendingVersionId: string | null
  failureVersionId: string | null
  onClose: () => void
  onSelectVersion: (version: TrackVersion) => void
}

export function SimilarVersionsSheet({
  isOpen,
  versions,
  currentVersionId,
  pendingVersionId,
  failureVersionId,
  onClose,
  onSelectVersion,
}: SimilarVersionsSheetProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="sheet-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
        >
          <motion.div
            className="similar-versions-sheet"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 360, damping: 32, mass: 0.9 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.y > 90 || info.velocity.y > 500) {
                onClose()
              }
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sheet-grabber" />
            <div className="sheet-header">相似版本</div>

            <div className="sheet-list">
              {versions.map((version) => (
                <VersionRow
                  key={version.id}
                  version={version}
                  isCurrent={version.id === currentVersionId}
                  isPending={pendingVersionId === version.id}
                  isFailure={failureVersionId === version.id}
                  onClick={onSelectVersion}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
