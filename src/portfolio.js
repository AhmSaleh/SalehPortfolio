const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://docdro.id/7AgUsYS',
  title: 'React Progress.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ahmed Saleh',
  role: 'Software Engineer',
  description:
    'I am a software engineer working currently for Integrant, inc as a full stack web developer.',
  resume: 'https://docdro.id/I0KdUy6',
  social: {
    linkedin: 'https://eg.linkedin.com/in/ahmdmsaleh',
    github: 'https://github.com/AhmSaleh',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'React Facts',
    description: 'A simple static page using React.JS',
    stack: ['React', 'JS', 'CSS'],
    sourceCode: 'https://github.com/AhmSaleh/React-Facts',
    livePreview: 'https://ahmsaleh.github.io/React-Facts/',
  },
  {
    name: 'OpenSea',
    description: `A static page for the world's first and largest NFT marketplace`,
    stack: ['React', 'JS', 'CSS'],
    sourceCode: 'https://github.com/AhmSaleh/OpenSea',
    livePreview: 'https://ahmsaleh.github.io/OpenSea/',
  },
  {
    name: 'Meme Generator',
    description: `A simple meme generator using imgflip API`,
    stack: ['React', 'JS', 'CSS'],
    sourceCode: 'https://github.com/AhmSaleh/Meme-Generator',
    livePreview: 'https://ahmsaleh.github.io/Meme-Generator/',
  },
  {
    name: 'Advice App',
    description: `SPA which randomly generate advices using adviceslip API`,
    stack: ['React', 'JS', 'CSS'],
    sourceCode: 'https://github.com/AhmSaleh/react-advice-app',
    livePreview: 'https://ahmsaleh.github.io/react-advice-app/',
  },

  {
    name: 'Food Order App',
    description: `A food order app with cart and menu`,
    stack: ['React', 'JS', 'CSS'],
    sourceCode: 'https://github.com/AhmSaleh/Food-Oeder-App/tree/main',
    livePreview: 'https://ahmsaleh.github.io/Food-Order-App/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'Asp.Net',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ahmed.saleh@integrant.com',
}

export { header, about, projects, skills, contact }
