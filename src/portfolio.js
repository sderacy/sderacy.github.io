const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'SD.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sterly Deracy',
  role: 'Full Stack Developer',
  description:
    'I am continuously learning new frameworks and programming languages! I find that the best way to practice these tools is to use them, so I am usually working on different side projects. Currently, I am working in ReactJS! When I am not busy coding, I can be found playing 8-ball, video games, or tennis!',
  social: {
    linkedin: 'https://www.linkedin.com/in/sterlyderacy/',
    github: 'https://www.github.com/sderacy',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'The G.O.O.N. Card',
    description:
      'LinkTree and other applications have a static set of links that can be shared with other users, which is inconvenient if you want to share your LinkedIn with an employer but your instagram with a friend. The G.O.O.N., the most flexible networking application available, mitigates this issue by leeting the user select the handles they want to share on the fly!',
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'NodeJS',
      'ExpressJS',
      'Bootstrap',
      'SQLite',
      'Google Charts API',
      'Web Speech API',
      'Git',
      'Github',
    ],
    sourceCode: 'https://www.github.com/sderacy/gooncard',
    livePreview: 'https://www.github.com/sderacy/gooncard',
  },
  {
    name: 'HackTCNJ',
    description:
      'HALO is a web application that alleviates hackathon operations. From handling registration to hacker and organizer management, HALO works as a resource management tool for all organizers.',
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Django',
      'Git',
      'Github',
    ],
    sourceCode: 'https://www.github.com/tcnj-acm/halo',
    livePreview: 'https://www.hacktcnj.com',
  },
  {
    name: "Wally's Adventure",
    description:
      'Hello! Welcome to Wallys Adventure! This is a simple arcade game that features Wally the Steam Whistle, the last steam whistle to be heard in Trenton. The idea for this game came from a class project that explored the relationship between Wally and the man who preserved him, William Lloyd Miller.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Rails', 'PostgreSQL'],
    sourceCode: 'https://www.github.com/sderacy/wallysadventure',
    livePreview: 'https://www.bit.ly/wallysadventure',
  },
  {
    name: 'AMSTR - ACCR Management System Tracker',
    description:
      "ACCR is a nonprofit that works to provide additional support for defendants in the Atlantic region since the defendants in this area are overworked with too many cases. We created a system to record when the ACCR staff, lawyers, and other legal workers donate time, money, and efforts into the organization's efforts through a timesheet based system which also uses a database to store and collect the data. We plan to make this system as seamless as possible so that it is both efficient and effective, while maintaining all functionality.",
    stack: ['HTML', 'CSS', 'JavaScript', 'Rails', 'PostgreSQL'],
  },
]

const skills = [
  'Android Studio',
  'AngularJS',
  'Bootstrap',
  'C',
  'Canva',
  'C++',
  'CSS',
  'Django',
  'ExpressJS',
  'Figma',
  'Flask',
  'Git & Github',
  'HTML',
  'Ionic Framework',
  'Java',
  'JavaScript',
  'Kotlin',
  'MariaDB',
  'MySQL',
  'NodeJS',
  'PHP',
  'PostgreSQL',
  'Python',
  'Rails',
  'React',
  'Ruby',
  'TypeScript',
  'Wix',
  'Wordpress',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sderacy@mail.com',
}

export { header, about, projects, skills, contact }
