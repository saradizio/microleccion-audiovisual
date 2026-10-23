export type Language = 'es' | 'en' | 'it' | 'ca'

export type Translation = {
  pageTitle: string
  home: string
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
}

export const translations: Record<Language, Translation> = {
  es: {
    pageTitle: '{lesson} {lessonNumber} | {lessonTitle} | {siteName}',
    home: 'Inicio',
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
  },
  en: {
    pageTitle: '{lesson} {lessonNumber} | {lessonTitle} | {siteName}',
    home: 'Home',
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
  },
  it: {
    pageTitle: '{lesson} {lessonNumber} | {lessonTitle} | {siteName}',
    home: 'Home',
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
  },
  ca: {
    pageTitle: '{lesson} {lessonNumber} | {lessonTitle} | {siteName}',
    home: 'Inici',
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
  },
}
