const Info = {
  name: 'Justin Tang',
  title: 'Software Engineer',
  links:
    {
      email: 'mailto:tangjustin2@gmail.com',
      linkedin: 'https://www.linkedin.com/in/justintang510/',
      github: 'https://github.com/justintang510/',
    },
  bio: [
    `I am a software developer specializing in JavaScript, React, CSS, Node.js and systems design. I am passionate about building user-friendly applications and designing aesthetic user interfaces.`,
    `I've previously worked as a Senior Quality Analyst for the Monetization Support Team at Meta. My experience at Meta inspired me to pursue software engineering so that I can solve more complex problems and leave a bigger impact on the industry.`,
    `When I'm not programming, I enjoy lifting weights, discovering new music, watching esports and reading. I also coach a competitive VALORANT team in my free time.`
  ],
  projects: [
    {
      id: 0,
      name: 'Trail Companions',
      desc: 'A full-stack web application providing a community for hikers and crowd-sourced reviews for trails. Includes Google Sign-In, information on trails, comments, photos uploads, user profiles, friends and event planning.',
      stack: 'React | Node.js | PostgreSQL | AWS | Next.js | Firebase',
      url: 'https://github.com/Klippan-BO',
      image: 'https://i.imgur.com/2knfZOL.png',
    },
    {
      id: 1,
      name: 'E-Commerce UI',
      desc: 'A front-end web application built to interact with modern e-commerce APIs. Includes an image gallery/carousel, product descriptions, styles and sizes, bookmarking and a reviews and ratings system.',
      stack: 'React | Node.js | webpack | Babel | Styled Components',
      url: 'https://github.com/Baratheon-Stags/front-end-capstone',
      image: 'https://i.imgur.com/sULfCgI.png',
    },
    {
      id: 2,
      name: 'E-Commerce API',
      desc: 'An e-commerce API scaled to support thousands of requests per second and 30M+ rows of data. Utilizes an NGINX load balancer that distributes incoming traffic across several AWS EC2 instances in order to handle increases in throughput.',
      stack: 'Node.js | PostgreSQL | AWS | NGINX | Postman | k6 | Loader.io',
      url: 'https://github.com/Samosas-SDC/reviews-api',
      image: 'https://i.imgur.com/vRy0TR5.png',
    },
  ],
};

export default Info;
