const projects = [
  {
    id: 1,
    image: {
      src: '/projects/Rick_and_Morty.png',
      alt: 'Rick and Morty Wiki',
    },
    description: [
      'A Single page application, create with React, NextJs and API the Rick and Morty.',
      'Just out of curiosity, I created a Wiki of my favorite animated series to learn a little more about the series.',
    ],
    link: {
      href: 'https://rick-and-morty-wiki-two.vercel.app/',
      isDisabled: false,
      textLink: 'Rick and Morty Wiki',
    },
  },
  {
    id: 2,
    image: {
      src: '/projects/covid-19.png',
      alt: 'COVID-19 Tracker',
    },
    description: [
      'Web application using React, NodeJs, Axios and React Bootstrap.',
      'To know the situation in relation to COVID-19.',
    ],
    link: {
      href: 'https://github.com/Victor1890/COVID-19-Tracker',
      isDisabled: false,
      textLink: 'Link to Code',
    },
  },
  {
    id: 3,
    image: {
      src: '/projects/covid-19-v2.jpg',
      alt: 'COVID-19 Tracker V2',
    },
    description: [
      'Single page application using ReactJS.',
      'To know the situation in relation to COVID-19.',
    ],
    link: {
      href: 'https://covid-19-tracker-blush.vercel.app/',
      isDisabled: false,
      textLink: 'Covid-19 Tracker',
    },
  },
  {
    id: 3,
    image: {
      src: '/projects/juventud_solidaria.png',
      alt: 'Juventud Solidaria',
    },
    description: [
      'A Web Site create with Bootstrap.',
      'This website was created to help people with Covid-19',
    ],
    link: {
      href: 'http://juventudsolidariard.org/',
      isDisabled: false,
      textLink: 'Juventud Solidariard',
    },
  },
  {
    id: 4,
    image: {
      src: '/projects/mp3.png',
      alt: 'MP3 Rosario Player',
    },
    description: [
      'An App of music create with C#, Bunifu Framework, NAudio and Taglib-Sharp',
      'This app is a music player that contains the basic functions of any player.',
    ],
    link: {
      href: 'https://github.com/Victor1890/Reproductor_M-sica',
      isDisabled: false,
      textLink: 'Link to Code',
    },
  },
  {
    id: 5,
    image: {
      src: '/projects/dashboard.svg',
      alt: 'Furt Project',
    },
    description: [
      'An App create with ReactJs and Bootsttrap',
      `The project was created to manage and administer the products of local companies.`,
    ],
    link: {
      href: 'https://frontend-furt-project.vercel.app/',
      isDisabled: false,
      textLink: 'Link to Website',
    },
  },
  {
    id: 6,
    image: {
      src: '/experiments/terminal.svg',
      alt: 'Furt Project Backend',
    },
    description: [
      'An App create with NodeJs, Axios and MongoDB',
      `The project was created to be the Backend part of the Furt project.`,
    ],
    link: {
      href: 'https://github.com/Victor1890/backend_api',
      isDisabled: true,
      textLink: 'Link to Code',
    },
  },
  {
    id: 7,
    image: {
      src: '/projects/charla.png',
      alt: 'Chat React Victor Rosario',
    },
    description: [
      'An App create with NodeJs, React and SocketIO',
      `A chat built with technology like ReactJs, Axios to consume the API and Socket to communicate several clients at the same time in real time.`,
    ],
    link: {
      href: 'https://chat-frontend-react-gamma.vercel.app/',
      isDisabled: false,
      textLink: 'Chat React Victor1890',
    },
  },
];

export default projects;
