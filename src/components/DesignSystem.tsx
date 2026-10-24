import { Icon } from './Icon'
import { Transcript } from './Transcript'
import type { DesignSystemTranslation, Language } from '../i18n'

type PaletteColor = {
  hex: string
  tokens: string[]
}

const lightPalette: PaletteColor[] = [
  { hex: '#fdf8f0', tokens: ['--background', '--page-bg'] },
  { hex: '#231814', tokens: ['--foreground', '--text-color'] },
  { hex: '#fff', tokens: ['--card'] },
  { hex: '#020618', tokens: ['--card-foreground'] },
  { hex: '#a7391e', tokens: ['--primary', '--accent-color'] },
  { hex: '#fefbf8', tokens: ['--primary-foreground'] },
  { hex: '#f2e6d6', tokens: ['--secondary', '--surface-color'] },
  { hex: '#3b2922', tokens: ['--secondary-foreground'] },
  { hex: '#f1eae0', tokens: ['--muted'] },
  { hex: '#645049', tokens: ['--muted-foreground', '--muted-color'] },
  { hex: '#07502c', tokens: ['--accent-foreground'] },
  { hex: '#006133', tokens: ['--ring', '--focus-color'] },
  { hex: '#000', tokens: ['--video'] },
  { hex: '#74301f4d', tokens: ['--shadow-soft'] },
  { hex: '#e2e8f0', tokens: ['--border', '--input', '--border-color'] },
]

const darkPalette: PaletteColor[] = [
  { hex: '#1c1917', tokens: ['--background', '--page-bg'] },
  {
    hex: '#fdf8f0',
    tokens: ['--foreground', '--text-color', '--card-foreground'],
  },
  { hex: '#29231f', tokens: ['--card'] },
  { hex: '#e89a7f', tokens: ['--primary', '--accent-color'] },
  { hex: '#231814', tokens: ['--primary-foreground'] },
  { hex: '#3b332e', tokens: ['--secondary'] },
  { hex: '#f2e6d6', tokens: ['--secondary-foreground'] },
  { hex: '#332d29', tokens: ['--muted'] },
  { hex: '#cab9b0', tokens: ['--muted-foreground', '--muted-color'] },
  { hex: '#c3eac9', tokens: ['--accent-foreground'] },
  { hex: '#b5e3c7', tokens: ['--ring', '--focus-color'] },
  { hex: '#000', tokens: ['--video'] },
  { hex: '#74301f4d', tokens: ['--shadow-soft'] },
  { hex: '#51473f', tokens: ['--border', '--input', '--border-color'] },
]

function PaletteColor({
  color,
}: {
  color: PaletteColor
}) {
  return (
    <article className="ds-palette-color">
      <div
        className="ds-palette-swatch"
        style={{ backgroundColor: color.hex }}
        aria-hidden="true"
      />
      <div className="ds-palette-color-copy">
        <code>{color.hex}</code>
        <span>{color.tokens.join(', ')}</span>
      </div>
    </article>
  )
}

type LinkExampleKind = 'header' | 'footer' | 'lesson'
type LinkExampleState = 'Normal' | 'Hover' | 'Seleccionado' | 'Foco'

function LinkStates({
  kind,
  label,
  copy,
}: {
  kind: LinkExampleKind
  label: string
  copy: DesignSystemTranslation
}) {
  const states: LinkExampleState[] =
    kind === 'lesson'
      ? ['Normal', 'Hover', 'Foco']
      : ['Normal', 'Hover', 'Foco', 'Seleccionado']
  const contrastByState: Record<
    LinkExampleState,
    { light: string; dark: string }
  > =
    kind === 'header'
      ? {
          Normal: {
            light: 'Texto / fondo: 17,32:1',
            dark: 'Texto / fondo: 14,66:1',
          },
          Hover: {
            light: 'Texto / fondo hover: 14,51:1',
            dark: 'Texto / fondo hover: 12,83:1',
          },
          Seleccionado:
            { light: 'Texto / fondo: 6,47:1', dark: 'Texto / fondo: 6,91:1' },
          Foco: {
            light: 'Contorno / fondo: 7,62:1',
            dark: 'Contorno / fondo: 10,91:1',
          },
        }
      : kind === 'footer'
        ? {
            Normal: {
              light: 'Texto / fondo: 14,08:1',
              dark: 'Texto / fondo: 11,69:1',
            },
            Hover: {
              light: 'Texto / fondo: 14,08:1',
              dark: 'Texto / fondo: 11,69:1',
            },
            Seleccionado: {
              light: 'Texto / fondo: 5,26:1',
              dark: 'Texto / fondo: 5,51:1',
            },
            Foco: {
              light: 'Contorno / fondo: 6,19:1',
              dark: 'Contorno / fondo: 8,70:1',
            },
          }
        : {
            Normal: {
              light:
                'Lección anterior / fondo: 7,54:1\nTítulo / fondo: 17,32:1',
              dark:
                'Lección anterior / fondo: 8,18:1\nTítulo / fondo: 14,66:1',
            },
            Hover: {
              light:
                'Lección anterior / fondo: 7,54:1\nTítulo / fondo: 17,32:1',
              dark:
                'Lección anterior / fondo: 8,18:1\nTítulo / fondo: 14,66:1',
            },
            Seleccionado: { light: '', dark: '' },
            Foco: {
              light: 'Contorno / fondo: 7,20:1',
              dark: 'Contorno / fondo: 12,31:1',
            },
          }

  const stateLabels: Record<LinkExampleState, string> = {
    Normal: copy.states.normal,
    Hover: copy.states.hover,
    Seleccionado: copy.states.selected,
    Foco: copy.states.focus,
  }
  const formatContrast = (value: string) =>
    value
      .replace(
        'Lección anterior / fondo',
        `${copy.previousLesson} / ${copy.contrastBackground}`,
      )
      .replace(
        'Título / fondo',
        `${copy.mainHeadingRole} / ${copy.contrastBackground}`,
      )
      .replace('Texto / fondo hover', copy.contrastHoverTextBackground)
      .replace('Texto / fondo', copy.contrastTextBackground)
      .replace('Contorno / fondo', copy.contrastOutlineBackground)

  return (
    <div className={`ds-link-states ds-link-states--${kind}`}>
      <h3>{label}</h3>
      <div className="ds-link-state-grid">
        {states.map((state) => {
          const stateClass =
            state === 'Hover'
              ? 'is-hover'
              : state === 'Seleccionado'
                ? 'is-selected'
                : state === 'Foco'
                  ? 'is-focus'
                : ''
          const isSelected = state === 'Seleccionado'
          const linkClass = `link ds-state-sample ${stateClass} ${
            kind === 'footer' ? 'ds-footer-link-example' : ''
          } ${kind === 'lesson' ? 'lesson-link previous-lesson' : ''}`

          return (
            <div className="ds-link-state" key={state}>
              <span className="ds-type-role">{stateLabels[state]}</span>
              {kind === 'lesson' ? (
                <span
                  aria-hidden="true"
                  className={linkClass}
                  aria-current={isSelected ? 'page' : undefined}
                >
                  <span className="lesson-link-heading">
                    <Icon name="arrow-left" />
                    <span className="lesson-link-direction">{copy.previousLesson}</span>
                  </span>
                  <span className="lesson-link-title">
                    {copy.lessonTitleSample}
                  </span>
                </span>
              ) : (
                <span
                  aria-hidden="true"
                  className={linkClass}
                  aria-current={isSelected ? 'page' : undefined}
                >
                  {kind === 'header' ? copy.lessonsSample : copy.title}
                </span>
              )}
              <span className="ds-link-state-contrast">
                <span className="ds-link-contrast-light">
                  {formatContrast(contrastByState[state].light)}
                </span>
                <span className="ds-link-contrast-dark">
                  {formatContrast(contrastByState[state].dark)}
                </span>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

type ButtonExampleKind = 'transcript-show' | 'theme-toggle'
type ButtonExampleState = 'Normal' | 'Hover' | 'Foco' | 'Activado'

function ButtonStates({
  kind,
  label,
  copy,
}: {
  kind: ButtonExampleKind
  label: string
  copy: DesignSystemTranslation
}) {
  const isThemeToggle = kind === 'theme-toggle'
  const states: ButtonExampleState[] = isThemeToggle
    ? ['Normal', 'Hover', 'Foco', 'Activado']
    : ['Normal', 'Hover', 'Foco']
  const contrastByState: Record<ButtonExampleState, { light: string; dark: string }> =
    isThemeToggle
      ? {
          Normal: { light: 'Texto / fondo: 17,32:1', dark: 'Texto / fondo: 14,66:1' },
          Hover: { light: 'Texto / fondo: 14,51:1', dark: 'Texto / fondo: 12,83:1' },
          Foco: { light: 'Contorno / fondo: 7,20:1', dark: 'Contorno / fondo: 12,31:1' },
          Activado: { light: 'Texto / fondo: 17,32:1', dark: 'Texto / fondo: 14,66:1' },
        }
      : {
          Normal: { light: 'Texto / fondo: 6,27:1', dark: 'Texto / fondo: 7,72:1' },
          Hover: { light: 'Texto / fondo: 6,02:1', dark: 'Texto / fondo: 8,43:1' },
          Foco: { light: 'Contorno / fondo: 7,20:1', dark: 'Contorno / fondo: 12,31:1' },
          Activado: { light: '', dark: '' },
        }

  const stateLabels: Record<ButtonExampleState, string> = {
    Normal: copy.states.normal,
    Hover: copy.states.hover,
    Foco: copy.states.focus,
    Activado: copy.states.active,
  }
  const formatContrast = (value: string) =>
    value
      .replace('Texto / fondo hover', copy.contrastHoverTextBackground)
      .replace('Texto / fondo', copy.contrastTextBackground)
      .replace('Contorno / fondo', copy.contrastOutlineBackground)

  return (
    <div className={`ds-button-states ds-button-states--${kind}`}>
      <h3>{label}</h3>
      <div className="ds-button-state-grid">
        {states.map((state) => {
          const stateClass =
            state === 'Hover'
              ? 'is-hover'
              : state === 'Foco'
                ? 'is-focus'
                : state === 'Activado'
                  ? 'is-active'
                  : ''

          return (
            <div className="ds-button-state" key={state}>
              <span className="ds-type-role">{stateLabels[state]}</span>
              <span
                aria-hidden="true"
                className={`button ds-button-sample ${
                  isThemeToggle
                    ? 'button--outline theme-toggle'
                    : 'button--primary transcript-button'
                } ${stateClass}`}
              >
                {isThemeToggle ? (
                  <>
                    <span className="ds-theme-sample-light">
                      <Icon name="moon" />
                      <span>{copy.darkMode}</span>
                    </span>
                    <span className="ds-theme-sample-dark">
                      <Icon name="sun" />
                      <span>{copy.lightMode}</span>
                    </span>
                  </>
                ) : (
                  <>
                    <span>{copy.showTranscript}</span>
                    <Icon name="transcript-show" />
                  </>
                )}
              </span>
              <span className="ds-button-state-contrast">
                <span className="ds-link-contrast-light">
                  {formatContrast(contrastByState[state].light)}
                </span>
                <span className="ds-link-contrast-dark">
                  {formatContrast(contrastByState[state].dark)}
                </span>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

type SelectExampleState = 'Normal' | 'Hover' | 'Foco'

function LanguageSelectStates({
  copy,
  languageName,
}: {
  copy: DesignSystemTranslation
  languageName: string
}) {
  const states: SelectExampleState[] = ['Normal', 'Hover', 'Foco']
  const contrastByState: Record<
    SelectExampleState,
    { light: string; dark: string }
  > = {
    Normal: {
      light: 'Texto / fondo: 17,32:1',
      dark: 'Texto / fondo: 14,66:1',
    },
    Hover: {
      light: 'Texto / fondo: 14,51:1',
      dark: 'Texto / fondo: 12,83:1',
    },
    Foco: {
      light: 'Contorno / fondo: 7,20:1',
      dark: 'Contorno / fondo: 12,31:1',
    },
  }

  const stateLabels: Record<SelectExampleState, string> = {
    Normal: copy.states.normal,
    Hover: copy.states.hover,
    Foco: copy.states.focus,
  }
  const formatContrast = (value: string) =>
    value
      .replace('Texto / fondo hover', copy.contrastHoverTextBackground)
      .replace('Texto / fondo', copy.contrastTextBackground)
      .replace('Contorno / fondo', copy.contrastOutlineBackground)

  return (
    <div className="ds-button-state-grid">
      {states.map((state) => {
        const stateClass =
          state === 'Hover' ? 'is-hover' : state === 'Foco' ? 'is-focus' : ''

        return (
          <div className="ds-button-state" key={state}>
            <span className="ds-type-role">{stateLabels[state]}</span>
            <div className="ds-select-demo ds-select-state-sample" aria-hidden="true">
              <div className="select-control">
                <span className="select-label">
                  <Icon name="globe" />
                  <span>{copy.languageLabel}</span>
                </span>
                <div className="select-field">
                  <span className={`select language-select ${stateClass}`}>
                    <span>{languageName}</span>
                    <Icon className="language-caret" name="chevron-down" />
                  </span>
                </div>
              </div>
            </div>
            <span className="ds-button-state-contrast">
              <span className="ds-link-contrast-light">
                {formatContrast(contrastByState[state].light)}
              </span>
              <span className="ds-link-contrast-dark">
                {formatContrast(contrastByState[state].dark)}
              </span>
            </span>
          </div>
        )
      })}
    </div>
  )
}

export function DesignSystem({
  copy,
  language,
  languageName,
}: {
  copy: DesignSystemTranslation
  language: Language
  languageName: string
}) {
  return (
    <main className="design-system-main" id="inicio" lang={language}>
      <article className="design-system" aria-labelledby="design-system-title">
        <header className="ds-hero">
          <p className="ds-eyebrow">{copy.heroLabel}</p>
          <h1 id="design-system-title">{copy.title}</h1>
          <p>{copy.intro}</p>
        </header>

        <section className="ds-section" id="paleta" aria-labelledby="ds-color-title">
          <div className="ds-section-heading">
            <p className="ds-eyebrow">01 · {copy.visualElements}</p>
            <h2 id="ds-color-title">{copy.paletteTitle}</h2>
          </div>
          <section
            className="ds-palette-theme ds-palette-theme--light"
            aria-labelledby="light-palette-title"
          >
            <h3 id="light-palette-title">{copy.lightMode}</h3>
            <p>{copy.lightPaletteDescription}</p>
            <div className="ds-palette-grid">
              {lightPalette.map((color) => (
                <PaletteColor
                  key={`${color.hex}-${color.tokens.join('-')}`}
                  color={color}
                />
              ))}
            </div>
          </section>
          <section
            className="ds-palette-theme ds-palette-theme--dark"
            aria-labelledby="dark-palette-title"
          >
            <h3 id="dark-palette-title">{copy.darkMode}</h3>
            <p>{copy.darkPaletteDescription}</p>
            <div className="ds-palette-grid">
              {darkPalette.map((color) => (
                <PaletteColor
                  key={`${color.hex}-${color.tokens.join('-')}`}
                  color={color}
                />
              ))}
            </div>
          </section>
          <div className="ds-foundations">
            <div className="ds-section-heading ds-foundations-heading">
              <h2>{copy.foundationsTitle}</h2>
            </div>
            <div className="ds-foundation-grid">
              <article className="ds-foundation-card">
                <span className="ds-token-label">{copy.shape}</span>
                <div className="ds-radius-sample" aria-hidden="true" />
                <p>
                  {copy.shapeDescription}
                </p>
              </article>
              <article className="ds-foundation-card">
                <span className="ds-token-label">{copy.icons}</span>
                <div className="ds-icon-samples">
                  <Icon name="moon" />
                  <Icon name="transcript-show" />
                  <span>{copy.iconCaption}</span>
                </div>
                <p>{copy.decorativeIconsDescription}</p>
              </article>
              <article className="ds-foundation-card">
                <span className="ds-token-label">{copy.elevation}</span>
                <div className="ds-shadow-sample">{copy.raisedCard}</div>
                <p>{copy.elevationDescription}</p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="ds-section"
          id="tipografia"
          aria-labelledby="ds-type-title"
        >
          <div className="ds-section-heading">
            <p className="ds-eyebrow">02 · {copy.typography}</p>
            <h2 id="ds-type-title">{copy.typographyTitle}</h2>
            <p>{copy.typographyDescription}</p>
          </div>
          <div className="ds-type-grid">
            <article className="ds-type-card">
              <p className="ds-token-label">--font-heading · Fraunces, serif</p>
              <div className="ds-type-example">
                <span className="ds-type-role">{copy.mainHeadingRole}</span>
                <p className="ds-sample-display">{copy.mainHeadingSample}</p>
              </div>
              <div className="ds-type-example">
                <span className="ds-type-role">{copy.secondaryHeadingsRole}</span>
                <p className="ds-sample-heading">{copy.secondaryHeadingSample}</p>
              </div>
            </article>
            <article className="ds-type-card">
              <p className="ds-token-label">--font-body · Inter, sans-serif</p>
              <div className="ds-type-example">
                <span className="ds-type-role">{copy.normalText}</span>
                <p className="ds-sample-body">{copy.bodySample}</p>
              </div>
              <div className="ds-type-example">
                <span className="ds-type-role">{copy.italic}</span>
                <p className="ds-sample-body">
                  {copy.italicSampleLead}<em lang="es">cocinero</em>, <em lang="es">cocineros</em>.
                </p>
              </div>
              <div className="ds-type-example">
                <span className="ds-type-role">{copy.bold}</span>
                <p className="ds-sample-lesson-meta">
                  {copy.level} A1 <span aria-hidden="true">·</span> {copy.lesson} 3
                </p>
              </div>
              <div className="ds-type-example">
                <span className="ds-type-role">{copy.auxiliaryText}</span>
                <p className="lesson-link-direction">{copy.previousLesson}</p>
              </div>
            </article>
          </div>
          <div className="ds-heading-scale">
            <div><span>{copy.headingScalePrimary}</span><strong>{copy.headingRange}</strong></div>
            <div><span>{copy.headingScaleSecondary}</span><strong>24 px</strong></div>
            <div><span>{copy.baseText}</span><strong>16 px</strong></div>
            <div><span>{copy.helperText}</span><strong>14 px</strong></div>
          </div>
        </section>

        <section className="ds-section" id="enlaces" aria-labelledby="ds-links-title">
          <div className="ds-section-heading">
            <p className="ds-eyebrow">03 · {copy.navigation}</p>
            <h2 id="ds-links-title">{copy.linksTitle}</h2>
            <p>{copy.linksDescription}</p>
          </div>
          <div className="ds-link-states-list">
            <LinkStates kind="header" label={copy.headerLink} copy={copy} />
            <LinkStates kind="footer" label={copy.footerLink} copy={copy} />
            <LinkStates kind="lesson" label={copy.lessonLink} copy={copy} />
          </div>
        </section>

        <section className="ds-section" id="botones" aria-labelledby="ds-buttons-title">
          <div className="ds-section-heading">
            <p className="ds-eyebrow">04 · {copy.actions}</p>
            <h2 id="ds-buttons-title">{copy.actionsTitle}</h2>
            <p>{copy.actionsDescription}</p>
          </div>
          <div className="ds-button-states-list">
            <ButtonStates
              kind="transcript-show"
              label={copy.showTranscript}
              copy={copy}
            />
            <ButtonStates
              kind="theme-toggle"
              label={copy.themeControl}
              copy={copy}
            />
          </div>
        </section>

        <section
          className="ds-section"
          id="otros-componentes"
          aria-labelledby="ds-other-components-title"
        >
          <div className="ds-section-heading">
            <p className="ds-eyebrow">05 · {copy.otherComponents}</p>
            <h2 id="ds-other-components-title">{copy.languageSelector}</h2>
          </div>
          <div className="ds-other-component">
            <p>{copy.stateDescription}</p>
            <LanguageSelectStates
              copy={copy}
              languageName={languageName}
            />
          </div>
          <div className="ds-other-component">
            <h2>{copy.transcriptAccordion}</h2>
            <p>{copy.transcriptDescription}</p>
            <div className="ds-transcript-demo">
              <Transcript
                id="design-system-transcript"
                transcript={copy.transcriptSample}
                copy={copy}
                initiallyVisible
              />
            </div>
            <p className="ds-component-note">
              {copy.contrastCardBackground}:{' '}
              <span className="ds-link-contrast-light">20,16:1</span>
              <span className="ds-link-contrast-dark">14,66:1</span>.
            </p>
          </div>
        </section>

      </article>
    </main>
  )
}
