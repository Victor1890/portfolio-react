const TERMINAL = '/experiments/terminal.svg';

const Experiments = [
  {
    id: 1,
    image: {
      src: TERMINAL,
      alt: 'API with MongoDB and ASP.NET',
    },
    description: [
      'This API is create with ASP .NET Core and MongoDB.',
      'It is a simple crud to become familiar with the language and its environment',
    ],
    link: {
      href: 'https://github.com/Victor1890/API_REST_MONGO#readme',
      isDisabled: false,
      textLink: 'Link to Code',
    },
  },
  {
    id: 2,
    image: {
      src: TERMINAL,
      alt: 'API with TypeScript, hapi and MongoDB',
    },
    description: [
      "This project was created with the simple fact of learning how to work with the TypeScrpit language and with Hapi (it's like Express)",
    ],
    link: {
      href: 'https://github.com/Victor1890/API_CRUD_TS#readme',
      isDisabled: false,
      textLink: 'Link to Code',
    },
  },
  {
    id: 3,
    image: {
      src: '/experiments/flappy-bird.svg',
      alt: 'Flappy Bird Clone',
    },
    description: [
      'This game is create using Unity3D and something sprite',
      'I was bored and super curious and for some reason I wanted to know how the flappy bird was made, using unity and super how to do it',
    ],
    link: {
      href: 'https://github.com/Victor1890/flappy_bird_unity#readme',
      isDisabled: false,
      textLink: 'Link to Code',
    },
  },
  {
    id: 4,
    image: {
      src: '/experiments/cyberpunk.png',
      alt: 'Cyberpunk 2077 menu inGame',
    },
    description: [
      'This menu is create with HTML and CSS.',
      "'is not responsive'",
      'This menu is inspired by the popular Cyberpunk 2077 video game',
    ],
    link: {
      href: 'https://github.com/Victor1890/Cyberpunk-2077-InGame-Menu',
      isDisabled: false,
      textLink: 'Link to Code',
    },
  },
  {
    id: 5,
    image: {
      src: '/projects/mp3.png',
      alt: 'MP3 Rosario Player',
    },
    description: [
      'An App of music create with C#, Bunifu Framework, NAudio and Taglib-Sharp',
      'This app is a music player that contains the basic functions of any player.',
    ],
    link: {
      href: 'https://github.com/Victor1890/Reproductor_M-sica#readme',
      isDisabled: false,
      textLink: 'Link to Code',
    },
  },
];

export default Experiments;
