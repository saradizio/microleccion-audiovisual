export type Language = 'es' | 'en' | 'it' | 'ca'

export type DesignSystemTranslation = {
  heroLabel: string
  title: string
  lessonsSample: string
  lessonTitleSample: string
  intro: string
  visualElements: string
  paletteTitle: string
  lightPaletteDescription: string
  darkPaletteDescription: string
  foundationsTitle: string
  shape: string
  shapeDescription: string
  icons: string
  iconCaption: string
  decorativeIconsDescription: string
  elevation: string
  raisedCard: string
  elevationDescription: string
  typography: string
  typographyTitle: string
  typographyDescription: string
  mainHeadingRole: string
  secondaryHeadingsRole: string
  normalText: string
  italic: string
  bold: string
  auxiliaryText: string
  mainHeadingSample: string
  secondaryHeadingSample: string
  bodySample: string
  italicSampleLead: string
  level: string
  lesson: string
  previousLesson: string
  headingScalePrimary: string
  headingScaleSecondary: string
  baseText: string
  helperText: string
  headingRange: string
  navigation: string
  linksTitle: string
  linksDescription: string
  headerLink: string
  footerLink: string
  lessonLink: string
  actions: string
  actionsTitle: string
  actionsDescription: string
  showTranscript: string
  themeControl: string
  darkMode: string
  lightMode: string
  otherComponents: string
  languageSelector: string
  languageLabel: string
  stateDescription: string
  transcriptAccordion: string
  transcriptRegion: string
  transcriptTitle: string
  hideTranscript: string
  transcriptDescription: string
  transcriptSample: string
  contrastTextBackground: string
  contrastBackground: string
  contrastHoverTextBackground: string
  contrastOutlineBackground: string
  contrastCardBackground: string
  states: {
    normal: string
    hover: string
    selected: string
    focus: string
    active: string
  }
}

export type Translation = {
  pageTitle: string
  lessons: string
  exercises: string
  contact: string
  mainNavigation: string
  lightMode: string
  darkMode: string
  language: string
  languages: Record<Language, string>
  level: string
  lesson: string
  lessonTitle: string
  videoTitle: string
  videoRegion: string
  transcriptRegion: string
  showTranscript: string
  hideTranscript: string
  transcriptTitle: string
  transcript: string
  previousLesson: string
  previousLessonTitle: string
  nextLesson: string
  nextLessonTitle: string
  lessonNavigation: string
  footerNavigation: string
  privacy: string
  legalNotice: string
  help: string
  designSystem: string
  designSystemPage: DesignSystemTranslation
}

export const translations: Record<Language, Translation> = {
  es: {
    pageTitle: '{lesson} {lessonNumber} | {lessonTitle} | {siteName}',
    lessons: 'Lecciones',
    exercises: 'Ejercicios',
    contact: 'Contacto',
    mainNavigation: 'Navegación principal',
    lightMode: 'Modo claro',
    darkMode: 'Modo oscuro',
    language: 'Idioma',
    languages: {
      es: 'Español',
      en: 'Inglés',
      it: 'Italiano',
      ca: 'Catalán',
    },
    level: 'Nivel',
    lesson: 'Lección',
    lessonTitle: 'Masculino y femenino en español',
    videoTitle: 'Masculino y femenino en español — video de la lección',
    videoRegion: 'Video de la lección',
    transcriptRegion: 'Transcripción del video',
    showTranscript: 'Mostrar transcripción',
    hideTranscript: 'Ocultar transcripción',
    transcriptTitle: 'Transcripción del video',
    transcript:
      'Hola a todos y todas. ¿Qué vamos a hacer hoy? Hoy vamos a ver cómo se construye la palabra masculina, cómo se reconoce y cómo se construye y reconoce la palabra femenina. Sabemos que en español no existen palabras neutras: o son masculinas o son femeninas. Las palabras masculinas terminan en «o», el plural «os». Por ejemplo, «cocinero», «cocineros». Mientras que las palabras femeninas terminan en «a». Por ejemplo, «cocinera», «cocineras». Sabemos que algunas palabras se pueden reconocer fácilmente y es fácil decir que la palabra es, o tiene que ser, femenina. Por ejemplo, «cocinera»: sabemos que es una mujer, entonces «a», femenino. De todas formas, para saber si las palabras normalmente son masculinas o femeninas, hay que aprenderlas de memoria en algunos casos. «La mesa», por ejemplo. Bueno, no existe una regla que nos dice que este objeto tiene que ser femenino; simplemente hay que aprender de memoria. Entonces, «o», masculino; «a», femenino. En algunos casos, la cuestión es bastante obvia: «cocinero», hombre; «cocinera», mujer. En otros casos, como «mesa», hay que aprender de memoria. Gracias.',
    previousLesson: 'Lección anterior',
    previousLessonTitle: 'Los artículos: el, la, los, las',
    nextLesson: 'Lección siguiente',
    nextLessonTitle: 'El plural de los sustantivos',
    lessonNavigation: 'Navegación entre lecciones',
    footerNavigation: 'Enlaces del pie de página',
    privacy: 'Privacidad',
    legalNotice: 'Aviso legal',
    help: 'Ayuda',
    designSystem: 'Sistema de diseño',
    designSystemPage: {
      heroLabel: 'Hola ELE · Guía de interfaz',
      title: 'Sistema de diseño',
      lessonsSample: 'Lecciones',
      lessonTitleSample: 'Los artículos: el, la, los, las',
      intro:
        'Una referencia práctica a los colores, la tipografía y los componentes que hacen que Hola ELE sea coherente y accesible. En cada componente se muestra su ratio de contraste para el tema activo.',
      visualElements: 'Elementos visuales',
      paletteTitle: 'Paleta de colores',
      lightPaletteDescription: 'Colores usados en la página de la lección en modo claro.',
      darkPaletteDescription: 'Solo colores usados por la página principal de la lección en modo oscuro.',
      foundationsTitle: 'Forma, iconos y elevación',
      shape: 'Forma · --radius',
      shapeDescription: 'Radio de 0,625 rem (10 px) para botones, tarjetas y controles.',
      icons: 'Iconos · 18 px',
      iconCaption: 'Siempre acompañados de una etiqueta textual.',
      decorativeIconsDescription: 'Los iconos decorativos se ocultan a tecnologías de apoyo.',
      elevation: 'Elevación · --shadow-soft',
      raisedCard: 'Tarjeta elevada',
      elevationDescription: 'Sombra suave para separar superficies sin sustituir bordes ni señales de foco.',
      typography: 'Tipografía',
      typographyTitle: 'Familias y jerarquía',
      typographyDescription: 'Fraunces se utiliza en los encabezados y Inter en los textos de contenido y los controles.',
      mainHeadingRole: 'Título principal (H1)',
      secondaryHeadingsRole: 'Encabezados secundarios (H2)',
      normalText: 'Texto normal',
      italic: 'Cursiva',
      bold: 'Negrita',
      auxiliaryText: 'Texto auxiliar',
      mainHeadingSample: 'Masculino y femenino en español',
      secondaryHeadingSample: 'Transcripción del video',
      bodySample: 'Hola a todos y todas. ¿Qué vamos a hacer hoy? Hoy vamos a ver cómo se construye la palabra masculina.',
      italicSampleLead: 'Por ejemplo, ',
      level: 'Nivel',
      lesson: 'Lección',
      previousLesson: 'Lección anterior',
      headingScalePrimary: 'Título principal (H1)',
      headingScaleSecondary: 'Encabezados secundarios (H2)',
      baseText: 'Texto base',
      helperText: 'Texto auxiliar',
      headingRange: 'Entre 32 px y 56 px',
      navigation: 'Navegación',
      linksTitle: 'Enlaces',
      linksDescription: 'Muestras estáticas de los estados normal, hover, foco y seleccionado.',
      headerLink: 'Enlace del encabezado',
      footerLink: 'Enlace del pie de página',
      lessonLink: 'Enlace entre lecciones',
      actions: 'Acciones',
      actionsTitle: 'Botones e interruptores',
      actionsDescription: 'Muestras estáticas de los estados normal, hover, foco y activado.',
      showTranscript: 'Mostrar transcripción',
      themeControl: 'Control de tema',
      darkMode: 'Modo oscuro',
      lightMode: 'Modo claro',
      otherComponents: 'Otros componentes',
      languageSelector: 'Selector de idioma',
      languageLabel: 'Idioma',
      stateDescription: 'Muestras estáticas de los estados normal, hover y foco.',
      transcriptAccordion: 'Acordeón de transcripción',
      transcriptRegion: 'Ejemplo de transcripción',
      transcriptTitle: 'Transcripción del video',
      hideTranscript: 'Ocultar transcripción',
      transcriptDescription: 'Permite acceder al contenido hablado sin depender del audio.',
      transcriptSample: 'Hola. Esta es una transcripción de ejemplo. El texto ofrece una alternativa al contenido hablado del vídeo.',
      contrastTextBackground: 'Texto / fondo',
      contrastBackground: 'fondo',
      contrastHoverTextBackground: 'Texto / fondo hover',
      contrastOutlineBackground: 'Contorno / fondo',
      contrastCardBackground: 'Texto de la transcripción / fondo de tarjeta',
      states: {
        normal: 'Normal',
        hover: 'Hover',
        selected: 'Seleccionado',
        focus: 'Foco',
        active: 'Activado',
      },
    },
  },
  en: {
    pageTitle: '{lesson} {lessonNumber} | {lessonTitle} | {siteName}',
    lessons: 'Lessons',
    exercises: 'Exercises',
    contact: 'Contact',
    mainNavigation: 'Main navigation',
    lightMode: 'Light mode',
    darkMode: 'Dark mode',
    language: 'Language',
    languages: {
      es: 'Spanish',
      en: 'English',
      it: 'Italian',
      ca: 'Catalan',
    },
    level: 'Level',
    lesson: 'Lesson',
    lessonTitle: 'Masculine and feminine in Spanish',
    videoTitle: 'Masculine and feminine in Spanish — lesson video',
    videoRegion: 'Lesson video',
    transcriptRegion: 'Video transcript',
    showTranscript: 'Show transcript',
    hideTranscript: 'Hide transcript',
    transcriptTitle: 'Video transcript',
    transcript:
      'Hello everyone. What are we going to do today? Today we are going to see how the masculine form is built and recognized, and how the feminine form is built and recognized. We know that Spanish has no neutral words: words are either masculine or feminine. Masculine words end in «o», and the plural ends in «os». For example, «cocinero», «cocineros». Feminine words end in «a». For example, «cocinera», «cocineras». We know that some words are easy to recognize, and it is easy to say that a word is, or must be, feminine. For example, «cocinera»: we know it refers to a woman, so «a» is feminine. In any case, to know whether words are usually masculine or feminine, sometimes we have to learn them by heart. «La mesa», for example. There is no rule that says this object has to be feminine; we simply have to memorize it. So «o» is masculine and «a» is feminine. In some cases, the distinction is quite obvious: «cocinero» means a man; «cocinera» means a woman. In other cases, such as «mesa», we have to learn the word by heart. Thank you.',
    previousLesson: 'Previous lesson',
    previousLessonTitle: 'Articles: el, la, los, las',
    nextLesson: 'Next lesson',
    nextLessonTitle: 'Plural nouns',
    lessonNavigation: 'Lesson navigation',
    footerNavigation: 'Footer links',
    privacy: 'Privacy',
    legalNotice: 'Legal notice',
    help: 'Help',
    designSystem: 'Design system',
    designSystemPage: {
      heroLabel: 'Hola ELE · Interface guide',
      title: 'Design system',
      lessonsSample: 'Lessons',
      lessonTitleSample: 'Articles: el, la, los, las',
      intro:
        'A practical reference to the colors, typography, and components that make Hola ELE consistent and accessible. Each component shows its contrast ratio for the active theme.',
      visualElements: 'Visual elements',
      paletteTitle: 'Color palette',
      lightPaletteDescription: 'Colors used on the lesson page in light mode.',
      darkPaletteDescription: 'Only colors used by the main lesson page in dark mode.',
      foundationsTitle: 'Shape, icons, and elevation',
      shape: 'Shape · --radius',
      shapeDescription: 'A radius of 0.625 rem (10 px) for buttons, cards, and controls.',
      icons: 'Icons · 18 px',
      iconCaption: 'Always accompanied by a text label.',
      decorativeIconsDescription: 'Decorative icons are hidden from assistive technologies.',
      elevation: 'Elevation · --shadow-soft',
      raisedCard: 'Elevated card',
      elevationDescription: 'A soft shadow separates surfaces without replacing borders or focus indicators.',
      typography: 'Typography',
      typographyTitle: 'Families and hierarchy',
      typographyDescription: 'Fraunces is used for headings, and Inter for body text and controls.',
      mainHeadingRole: 'Main heading (H1)',
      secondaryHeadingsRole: 'Secondary headings (H2)',
      normalText: 'Body text',
      italic: 'Italic',
      bold: 'Bold',
      auxiliaryText: 'Supporting text',
      mainHeadingSample: 'Masculine and feminine in Spanish',
      secondaryHeadingSample: 'Video transcript',
      bodySample: 'Hello everyone. What are we going to do today? Today we are going to see how the masculine form is built.',
      italicSampleLead: 'For example, ',
      level: 'Level',
      lesson: 'Lesson',
      previousLesson: 'Previous lesson',
      headingScalePrimary: 'Main heading (H1)',
      headingScaleSecondary: 'Secondary headings (H2)',
      baseText: 'Body text',
      helperText: 'Supporting text',
      headingRange: 'Between 32 px and 56 px',
      navigation: 'Navigation',
      linksTitle: 'Links',
      linksDescription: 'Static examples of the normal, hover, focus, and selected states.',
      headerLink: 'Header link',
      footerLink: 'Footer link',
      lessonLink: 'Lesson navigation link',
      actions: 'Actions',
      actionsTitle: 'Buttons and switches',
      actionsDescription: 'Static examples of the normal, hover, focus, and active states.',
      showTranscript: 'Show transcript',
      themeControl: 'Theme control',
      darkMode: 'Dark mode',
      lightMode: 'Light mode',
      otherComponents: 'Other components',
      languageSelector: 'Language selector',
      languageLabel: 'Language',
      stateDescription: 'Static examples of the normal, hover, and focus states.',
      transcriptAccordion: 'Transcript accordion',
      transcriptRegion: 'Transcript example',
      transcriptTitle: 'Video transcript',
      hideTranscript: 'Hide transcript',
      transcriptDescription: 'Provides access to spoken content without relying on audio.',
      transcriptSample: 'Hello. This is a sample transcript. The text provides an alternative to the spoken video content.',
      contrastTextBackground: 'Text / background',
      contrastBackground: 'background',
      contrastHoverTextBackground: 'Text / hover background',
      contrastOutlineBackground: 'Outline / background',
      contrastCardBackground: 'Transcript text / card background',
      states: {
        normal: 'Normal',
        hover: 'Hover',
        selected: 'Selected',
        focus: 'Focus',
        active: 'Active',
      },
    },
  },
  it: {
    pageTitle: '{lesson} {lessonNumber} | {lessonTitle} | {siteName}',
    lessons: 'Lezioni',
    exercises: 'Esercizi',
    contact: 'Contatti',
    mainNavigation: 'Navigazione principale',
    lightMode: 'Modalità chiara',
    darkMode: 'Modalità scura',
    language: 'Lingua',
    languages: {
      es: 'Spagnolo',
      en: 'Inglese',
      it: 'Italiano',
      ca: 'Catalano',
    },
    level: 'Livello',
    lesson: 'Lezione',
    lessonTitle: 'Maschile e femminile in spagnolo',
    videoTitle: 'Maschile e femminile in spagnolo — video della lezione',
    videoRegion: 'Video della lezione',
    transcriptRegion: 'Trascrizione del video',
    showTranscript: 'Mostra la trascrizione',
    hideTranscript: 'Nascondi la trascrizione',
    transcriptTitle: 'Trascrizione del video',
    transcript:
      'Ciao a tutti e a tutte. Cosa faremo oggi? Oggi vedremo come si forma la parola maschile, come si riconosce e come si forma e si riconosce la parola femminile. Sappiamo che in spagnolo non esistono parole neutre: le parole sono maschili o femminili. Le parole maschili terminano in «o» e il plurale in «os». Per esempio, «cocinero», «cocineros». Le parole femminili terminano in «a». Per esempio, «cocinera», «cocineras». Sappiamo che alcune parole si possono riconoscere facilmente ed è facile dire che una parola è, o deve essere, femminile. Per esempio, «cocinera»: sappiamo che si riferisce a una donna, quindi «a» è femminile. In ogni caso, per sapere se le parole sono normalmente maschili o femminili, a volte bisogna impararle a memoria. «La mesa», per esempio. Non esiste una regola che stabilisca che questo oggetto debba essere femminile; semplicemente bisogna impararlo a memoria. Quindi «o» è maschile e «a» è femminile. In alcuni casi la distinzione è abbastanza ovvia: «cocinero» indica un uomo; «cocinera» una donna. In altri casi, come «mesa», bisogna imparare la parola a memoria. Grazie.',
    previousLesson: 'Lezione precedente',
    previousLessonTitle: 'Gli articoli: el, la, los, las',
    nextLesson: 'Lezione successiva',
    nextLessonTitle: 'Il plurale dei sostantivi',
    lessonNavigation: 'Navigazione tra le lezioni',
    footerNavigation: 'Link a piè di pagina',
    privacy: 'Privacy',
    legalNotice: 'Note legali',
    help: 'Aiuto',
    designSystem: 'Sistema di design',
    designSystemPage: {
      heroLabel: 'Hola ELE · Guida all’interfaccia',
      title: 'Sistema di design',
      lessonsSample: 'Lezioni',
      lessonTitleSample: 'Gli articoli: el, la, los, las',
      intro:
        'Un riferimento pratico ai colori, alla tipografia e ai componenti che rendono Hola ELE coerente e accessibile. Per ogni componente viene mostrato il rapporto di contrasto del tema attivo.',
      visualElements: 'Elementi visivi',
      paletteTitle: 'Palette di colori',
      lightPaletteDescription: 'Colori utilizzati nella pagina della lezione in modalità chiara.',
      darkPaletteDescription: 'Solo i colori utilizzati nella pagina principale della lezione in modalità scura.',
      foundationsTitle: 'Forma, icone ed elevazione',
      shape: 'Forma · --radius',
      shapeDescription: 'Raggio di 0,625 rem (10 px) per pulsanti, schede e controlli.',
      icons: 'Icone · 18 px',
      iconCaption: 'Sempre accompagnate da un’etichetta testuale.',
      decorativeIconsDescription: 'Le icone decorative sono nascoste alle tecnologie assistive.',
      elevation: 'Elevazione · --shadow-soft',
      raisedCard: 'Scheda sollevata',
      elevationDescription: 'Un’ombra tenue separa le superfici senza sostituire i bordi né gli indicatori di focus.',
      typography: 'Tipografia',
      typographyTitle: 'Famiglie e gerarchia',
      typographyDescription: 'Fraunces viene utilizzato per le intestazioni e Inter per il testo e i controlli.',
      mainHeadingRole: 'Titolo principale (H1)',
      secondaryHeadingsRole: 'Titoli secondari (H2)',
      normalText: 'Testo normale',
      italic: 'Corsivo',
      bold: 'Grassetto',
      auxiliaryText: 'Testo di supporto',
      mainHeadingSample: 'Maschile e femminile in spagnolo',
      secondaryHeadingSample: 'Trascrizione del video',
      bodySample: 'Ciao a tutti e a tutte. Cosa faremo oggi? Oggi vedremo come si forma la parola maschile.',
      italicSampleLead: 'Per esempio, ',
      level: 'Livello',
      lesson: 'Lezione',
      previousLesson: 'Lezione precedente',
      headingScalePrimary: 'Titolo principale (H1)',
      headingScaleSecondary: 'Titoli secondari (H2)',
      baseText: 'Testo di base',
      helperText: 'Testo di supporto',
      headingRange: 'Da 32 px a 56 px',
      navigation: 'Navigazione',
      linksTitle: 'Link',
      linksDescription: 'Esempi statici degli stati normale, hover, focus e selezionato.',
      headerLink: 'Link dell’intestazione',
      footerLink: 'Link del piè di pagina',
      lessonLink: 'Link tra le lezioni',
      actions: 'Azioni',
      actionsTitle: 'Pulsanti e interruttori',
      actionsDescription: 'Esempi statici degli stati normale, hover, focus e attivo.',
      showTranscript: 'Mostra la trascrizione',
      themeControl: 'Controllo del tema',
      darkMode: 'Modalità scura',
      lightMode: 'Modalità chiara',
      otherComponents: 'Altri componenti',
      languageSelector: 'Selettore della lingua',
      languageLabel: 'Lingua',
      stateDescription: 'Esempi statici degli stati normale, hover e focus.',
      transcriptAccordion: 'Fisarmonica della trascrizione',
      transcriptRegion: 'Esempio di trascrizione',
      transcriptTitle: 'Trascrizione del video',
      hideTranscript: 'Nascondi la trascrizione',
      transcriptDescription: 'Consente di accedere al contenuto parlato senza dipendere dall’audio.',
      transcriptSample: 'Ciao. Questa è una trascrizione di esempio. Il testo offre un’alternativa al contenuto parlato del video.',
      contrastTextBackground: 'Testo / sfondo',
      contrastBackground: 'sfondo',
      contrastHoverTextBackground: 'Testo / sfondo hover',
      contrastOutlineBackground: 'Contorno / sfondo',
      contrastCardBackground: 'Testo della trascrizione / sfondo della scheda',
      states: {
        normal: 'Normale',
        hover: 'Hover',
        selected: 'Selezionato',
        focus: 'Focus',
        active: 'Attivo',
      },
    },
  },
  ca: {
    pageTitle: '{lesson} {lessonNumber} | {lessonTitle} | {siteName}',
    lessons: 'Lliçons',
    exercises: 'Exercicis',
    contact: 'Contacte',
    mainNavigation: 'Navegació principal',
    lightMode: 'Mode clar',
    darkMode: 'Mode fosc',
    language: 'Idioma',
    languages: {
      es: 'Espanyol',
      en: 'Anglès',
      it: 'Italià',
      ca: 'Català',
    },
    level: 'Nivell',
    lesson: 'Lliçó',
    lessonTitle: 'Masculí i femení en castellà',
    videoTitle: 'Masculí i femení en castellà — vídeo de la lliçó',
    videoRegion: 'Vídeo de la lliçó',
    transcriptRegion: 'Transcripció del vídeo',
    showTranscript: 'Mostra la transcripció',
    hideTranscript: 'Amaga la transcripció',
    transcriptTitle: 'Transcripció del vídeo',
    transcript:
      'Hola a tothom. Què farem avui? Avui veurem com es forma la paraula masculina, com es reconeix i com es forma i es reconeix la paraula femenina. Sabem que en castellà no hi ha paraules neutres: les paraules són masculines o femenines. Les paraules masculines acaben en «o» i el plural en «os». Per exemple, «cocinero», «cocineros». Les paraules femenines acaben en «a». Per exemple, «cocinera», «cocineras». Sabem que algunes paraules es poden reconèixer fàcilment i és fàcil dir que una paraula és, o ha de ser, femenina. Per exemple, «cocinera»: sabem que es refereix a una dona, així que «a» és femení. De tota manera, per saber si les paraules solen ser masculines o femenines, de vegades cal aprendre-les de memòria. «La mesa», per exemple. No hi ha cap regla que digui que aquest objecte ha de ser femení; simplement cal aprendre-ho de memòria. Per tant, «o» és masculí i «a» és femení. En alguns casos, la qüestió és força evident: «cocinero» és un home; «cocinera», una dona. En altres casos, com «mesa», cal aprendre la paraula de memòria. Gràcies.',
    previousLesson: 'Lliçó anterior',
    previousLessonTitle: 'Els articles: el, la, los, las',
    nextLesson: 'Lliçó següent',
    nextLessonTitle: 'El plural dels substantius',
    lessonNavigation: 'Navegació entre lliçons',
    footerNavigation: 'Enllaços del peu de pàgina',
    privacy: 'Privadesa',
    legalNotice: 'Avís legal',
    help: 'Ajuda',
    designSystem: 'Sistema de disseny',
    designSystemPage: {
      heroLabel: 'Hola ELE · Guia d’interfície',
      title: 'Sistema de disseny',
      lessonsSample: 'Lliçons',
      lessonTitleSample: 'Els articles: el, la, los, las',
      intro:
        'Una referència pràctica dels colors, la tipografia i els components que fan que Hola ELE sigui coherent i accessible. A cada component es mostra la seva ràtio de contrast per al tema actiu.',
      visualElements: 'Elements visuals',
      paletteTitle: 'Paleta de colors',
      lightPaletteDescription: 'Colors utilitzats a la pàgina de la lliçó en mode clar.',
      darkPaletteDescription: 'Només colors utilitzats a la pàgina principal de la lliçó en mode fosc.',
      foundationsTitle: 'Forma, icones i elevació',
      shape: 'Forma · --radius',
      shapeDescription: 'Radi de 0,625 rem (10 px) per a botons, targetes i controls.',
      icons: 'Icones · 18 px',
      iconCaption: 'Sempre acompanyades d’una etiqueta textual.',
      decorativeIconsDescription: 'Les icones decoratives s’amaguen a les tecnologies de suport.',
      elevation: 'Elevació · --shadow-soft',
      raisedCard: 'Targeta elevada',
      elevationDescription: 'Una ombra suau separa les superfícies sense substituir les vores ni els indicadors de focus.',
      typography: 'Tipografia',
      typographyTitle: 'Famílies i jerarquia',
      typographyDescription: 'Fraunces s’utilitza als encapçalaments i Inter als textos de contingut i als controls.',
      mainHeadingRole: 'Títol principal (H1)',
      secondaryHeadingsRole: 'Encapçalaments secundaris (H2)',
      normalText: 'Text normal',
      italic: 'Cursiva',
      bold: 'Negreta',
      auxiliaryText: 'Text auxiliar',
      mainHeadingSample: 'Masculí i femení en castellà',
      secondaryHeadingSample: 'Transcripció del vídeo',
      bodySample: 'Hola a tothom. Què farem avui? Avui veurem com es forma la paraula masculina.',
      italicSampleLead: 'Per exemple, ',
      level: 'Nivell',
      lesson: 'Lliçó',
      previousLesson: 'Lliçó anterior',
      headingScalePrimary: 'Títol principal (H1)',
      headingScaleSecondary: 'Encapçalaments secundaris (H2)',
      baseText: 'Text base',
      helperText: 'Text auxiliar',
      headingRange: 'Entre 32 px i 56 px',
      navigation: 'Navegació',
      linksTitle: 'Enllaços',
      linksDescription: 'Mostres estàtiques dels estats normal, hover, focus i seleccionat.',
      headerLink: 'Enllaç de la capçalera',
      footerLink: 'Enllaç del peu de pàgina',
      lessonLink: 'Enllaç entre lliçons',
      actions: 'Accions',
      actionsTitle: 'Botons i commutadors',
      actionsDescription: 'Mostres estàtiques dels estats normal, hover, focus i activat.',
      showTranscript: 'Mostra la transcripció',
      themeControl: 'Control del tema',
      darkMode: 'Mode fosc',
      lightMode: 'Mode clar',
      otherComponents: 'Altres components',
      languageSelector: 'Selector d’idioma',
      languageLabel: 'Idioma',
      stateDescription: 'Mostres estàtiques dels estats normal, hover i focus.',
      transcriptAccordion: 'Acordió de transcripció',
      transcriptRegion: 'Exemple de transcripció',
      transcriptTitle: 'Transcripció del vídeo',
      hideTranscript: 'Amaga la transcripció',
      transcriptDescription: 'Permet accedir al contingut parlat sense dependre de l’àudio.',
      transcriptSample: 'Hola. Aquesta és una transcripció d’exemple. El text ofereix una alternativa al contingut parlat del vídeo.',
      contrastTextBackground: 'Text / fons',
      contrastBackground: 'fons',
      contrastHoverTextBackground: 'Text / fons hover',
      contrastOutlineBackground: 'Contorn / fons',
      contrastCardBackground: 'Text de la transcripció / fons de la targeta',
      states: {
        normal: 'Normal',
        hover: 'Hover',
        selected: 'Seleccionat',
        focus: 'Focus',
        active: 'Activat',
      },
    },
  },
}
