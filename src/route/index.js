// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()


// ================================================================


var header = {
  name: {
    firstname: "Ivan",
    lastname: "Ivanov",
  },
  position: "Junior Fullstack JS Developer",
  salary: "600$ в місяць",
  address: "Bilobrovs'kyi Lane, 5 Kharkiv, Ukraine",
};

var footer = {
  contacts: {
    email: {
      text: "ivanov@mail.com",
      href: "mailto:ivanov@mail.com",
    },
    phone: {
      text: "+380670000123",
      href: "tel:+380670000123",
    },
    linkedin: {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/ivan-test",
    },
  },
};

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume | Summary",
    },

    header,

    main: {
      summary: {
        title: "Other experience",
        text: "Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project.Good team player, every colleague is a friend to me.",
      },
      experience: {
        title: "Summary",
        text: "Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.",
      },
    },

    footer,
  })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume | Skills",
    },

    header,

    main: {
      hobbies: [
        {
          name: "Reading",
          isMain: true,
        },
        {
          name: "Cycling",
          isMain: true,
        },
        {
          name: "Cooking",
          isMain: false,
        },
        {
          name: "Gardening",
          isMain: true,
        },
      ],
      skills: [
        {
          name: "HTML",
          point: 10,
          isTop: true,
        },
        {
          name: "Handlebars",
          point: 8,
        },
        {
          name: "VS Code",
          point: 10,
          isTop: true,
        },
        {
          name: "Git",
          point: 7,
          isTop: false,
        },
        {
          name: "Terminal",
          point: 10,
        },
        {
          name: "NPM",
          point: 6,
        },
        {
          name: "React.js",
          point: 0,
        },
        {
          name: "PHP",
          point: null,
        },
      ],

    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume | Education",
    },

    header,

    main: {

      certificates: [
        {
          name: "JavaScript Starter",
          id: 1,
        },
        {
          name: "JavaScript Base",
          id: 2,
        },
        {
          name: "HTML5",
          id: 3,
        },
        {
          name: "CSS3",
          id: 4,
        },
      ],

      educations: [
        {
          name: "University of London",
          isEnd: true,
        },
        {
          name: "University of Sheffield",
          isEnd: true,
        },
        {
          name: "University of Toronto",
          isEnd: true,
        },
        {
          name: "University of Arizona",
          isEnd: false,
        },
      ],
    },

    footer,
  })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: "Resume | Work",
    },

    header,

    main: {
      works: [
        {
          position: "Junior Fullstack Developer",
          company: {
            name: "IT Brains",
            url: "https://it-brains.com.ua/",
          },
          duration: {
            from: "10.10.2022",
            to: null,
          },

          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: "https://resume-ivanov.com.ua/",
              about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatum.",
              stackAmount: 3,
              awardAmount: 500,
              stacks: [
                {
                  name: 'React.js'
                },
                {
                  name: 'HTML / CSS'
                },
                {
                  name: 'Node.js'
                },
              ],
              awards: [
                {
                  name: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                  name: 'Blanditiis, voluptatum.'
                }
              ],
            },
          ],
        },
      ]
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bio', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('bio', {

    layout: "bio",
    name: 'Albert Einstein',
    birthdate: 'March 14, 1879',
    birthplace:
      'Ulm, Kingdom of Württemberg, German Empire',
    deathdate: 'April 18, 1955',
    deathplace: 'Princeton, New Jersey, United States',
    nationality: 'Swiss, German, American',
    occupation: 'Theoretical Physicist',
    known_for: [
      'Theory of Relativity',
      'E=mc²',
      'Photoelectric Effect',
      'Brownian Motion',
    ],
    education: [
      {
        degree: 'Doctor of Philosophy',
        field: 'Physics',
        institution: 'University of Zurich',
        year: 1905,
      },
    ],
    notable_publications: [
      {
        title: 'On the Electrodynamics of Moving Bodies',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
      {
        title:
          'Does the Inertia of a Body Depend Upon Its Energy Content?',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
    ],
    partners: [
      {
        name: 'Mileva Marić',
        relationship: 'First wife',
        years: '1903-1919',
      },
      {
        name: 'Elsa Einstein',
        relationship:
          "Second wife, also Einstein's first cousin",
        years: '1919-1936',
      },
    ],
    awards: [
      {
        title: 'Nobel Prize in Physics',
        year: 1921,
        description:
          'Awarded for his explanation of the photoelectric effect',
      },
    ],
    influences: [
      'Isaac Newton',
      'James Clerk Maxwell',
      'Hermann Minkowski',
    ],
    influenced: [
      'Niels Bohr',
      'Erwin Schrödinger',
      'Werner Heisenberg',
      'Richard Feynman',
    ],
    quotes: [
      'Imagination is more important than knowledge.',
      'I have no special talent. I am only passionately curious.',
      'The important thing is not to stop questioning.',
      'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    ],
    major_discoveries: [
      {
        title: 'Photoelectric Effect',
        year: 1905,
        description:
          'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
      },
    ],
    contributions: {
      title: 'Inventions',
      description:
        'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
      year: 'Late 15th to early 16th century',
      field: 'Invention',
    },
  })
})

// ================================================================

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
