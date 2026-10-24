import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import type { Translation } from '../i18n'
import { Icon } from './Icon'
import { Button } from './ui/Button'

type TranscriptLabels = Pick<
  Translation,
  'transcriptRegion' | 'transcriptTitle' | 'showTranscript' | 'hideTranscript'
>

type TranscriptProps = {
  id: string
  transcript: string
  copy: TranscriptLabels
  headingLevel?: 2 | 3
  initiallyVisible?: boolean
}

function renderTranscript(text: string): ReactNode[] {
  return text.split(/(«[^»]+»)/g).map((part, index) => {
    if (part.startsWith('«') && part.endsWith('»')) {
      return (
        <span key={index}>
          «<em lang="es">{part.slice(1, -1)}</em>»
        </span>
      )
    }

    return part
  })
}

export function Transcript({
  id,
  transcript,
  copy,
  headingLevel = 2,
  initiallyVisible = false,
}: TranscriptProps) {
  const [isVisible, setIsVisible] = useState(initiallyVisible)
  const Heading = headingLevel === 3 ? 'h3' : 'h2'
  const showButtonRef = useRef<HTMLButtonElement>(null)
  const hideButtonRef = useRef<HTMLButtonElement>(null)
  const previousVisibility = useRef(isVisible)

  useEffect(() => {
    if (previousVisibility.current !== isVisible) {
      if (isVisible) {
        hideButtonRef.current?.focus()
      } else {
        showButtonRef.current?.focus()
      }
      previousVisibility.current = isVisible
    }
  }, [isVisible])

  return (
    <section
      className={`transcript ${isVisible ? 'transcript-expanded' : 'transcript-collapsed'}`}
      aria-label={copy.transcriptRegion}
    >
      <div className="transcript-card">
        <div
          id={id}
          className="transcript-panel"
          aria-hidden={!isVisible}
          inert={!isVisible}
        >
          <div className="transcript-content">
            <Heading>{copy.transcriptTitle}</Heading>
            <p>{renderTranscript(transcript)}</p>
          </div>
        </div>
      </div>
      {isVisible ? (
        <Button
          className="transcript-hide-button"
          type="button"
          variant="primary"
          aria-expanded={true}
          aria-controls={id}
          onClick={() => setIsVisible(false)}
          ref={hideButtonRef}
        >
          <span>{copy.hideTranscript}</span>
          <Icon name="transcript-hide" />
        </Button>
      ) : (
        <Button
          className="transcript-show-button"
          type="button"
          variant="primary"
          aria-expanded={false}
          aria-controls={id}
          onClick={() => setIsVisible(true)}
          ref={showButtonRef}
        >
          <span>{copy.showTranscript}</span>
          <Icon name="transcript-show" />
        </Button>
      )}
    </section>
  )
}
