
  import {
    Apex,
    aws,
    java,
    sql,
    wordpress,
      mobile,
      backend,
      creator,
      web,
      javascript,
      html,
      css,
      reactjs,
      redux,
      tailwind,
      git,
      threejs,
      lavner,
      Jamin,
      itasc,
      data,
      philter,
      figma,
      material,
      novviMain,
      itascMain,
      movieLand,
      shot,
      memeGen,
      typescript,
      scss,
      jira,
      nightwatch,
      angular,
      circleci,
      html5,
      qwil,
      lsq,
      lsq1,
      qwil1,
      napa1,
    } from "../assets";
    
    export const navLinks = [
      {
        id: "about",
        title: "About",
      },
      {
        id: "work",
        title: "Work",
      },
      {
        id: "contact",
        title: "Contact",
      },
    ];
    
    const services = [
      {
        title: "Front End Developer",
        icon: web,
      },
      {
        title: "UI Developer",
        icon: mobile,
      },
      {
        title: "UI/UX Designer",
        icon: backend,
      },
      {
        title: "Product Designer",
        icon: creator,
      },
    ];
    
    const technologies = [
      {
        name: "HTML 5",
        icon: html5,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "Typescript",
        icon: typescript
      },
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Angular",
        icon: angular,
      },
      {
        name: "SCSS",
        icon: scss,
      },
      {
        name: "Figma",
        icon: figma,
      },
      {
        name: "nightwatchJS",
        icon: nightwatch,
      },
      {
        name: "git",
        icon: git,
      },
      {
        name: "circleci",
        icon: circleci
      },
      {
        name: "aws",
        icon: aws,
      },
      {
        name: "wordpress",
        icon: wordpress,
      },
    ];
    
    const experiences = [
      {
        title: "Lead Front-End Developer",
        company_name: "LSQ",
        icon: lsq,
        iconBg: "#383E56",
        date: "September 2023 - Present",
        points: [
          "Develop 150+ UI/UX designs into scalable, accessible, and highly responsive Angular and React applications, generating over $2 million in revenue.",
          "Participate in agile/scrum meetings with stakeholders to architect client solutions, leading to over 20 new clients onboard.",
          "Integrate frontend components with .NET, Go, NodeJS REST APIs and GraphQl to create data-rich applications, resulting in a 50% increase in client retention.",
          "Integrate Snyk security to secure over 50 CI/CD code pipelines, which has increased pipeline security strength by over 80%.",
          "Architect customer account security solutions after LSQ acquires Qwil, leading to a 100% drop in account breaches and half a million dollars in generated revenue.",
          "Lead the front-end development of Qwil’s customer UI, resulting in a 95% drop in customer contract terminations.",
          "Utilize NightwatchJS to unit and e2e test platform code for bug-free app deployments, which has decreased application outages by 80%."
        ],
      },
      {
        title: "Front-End Engineer and UI Designer",
        company_name: "Contractor",
        icon: Apex,
        iconBg: "#383E56",
        date: "July 2019 – September 2023",
        points: [
          "Architected React applications for over 5 businesses, increasing their revenue by over $200k.",
          "Designed and developed data-rich REST APIs for client applications, leading to a 60% increase in customer growth.",
          "Led agile/scrum meetings with stakeholders to define project scope which reduced development time by 40%.",
        ],
      },
    ];
    
    const testimonials = [
      {
        testimonial:
          "Emmanuel is incredibly detailed and passionate about what he does, and it shows in the quality of his work.",
        name: "Nik Tzaprev",
        designation: "Developer Manager",
        company: "LSQ",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        testimonial:
          "Emmanuel is a highly critical developer that is not afraid to take on new challenges.",
        name: "Chris Fontaine",
        designation: "Manager",
        company: "LSQ",
        image: Jamin,
      },
    ];
    
    const projects = [
      {
        name: "Novvi Properties",
        description:
          "Novvi properties Dubai's upcoming website features predictable google maps api location search, responsive mobile-first design, and intuitive high end property listings.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "materialUI",
            color: "green-text-gradient",
          },
          {
            name: "google-maps-api",
            color: "pink-text-gradient",
          },
        ],
        image: novviMain,
        live_code_link: "https://www.tinyurl.com/novvi",
        source_code_link: "https://github.com/emmanuelRep/Novvi/tree/master",
      },
      {
        name: 'LSQ',
        description: 'LSQ is a leading supply chain finance firm. My tasks include the complete redesign and development of the main website, and active management of their angular applications.',
        tags: [
          {
            name: 'angular',
            color: "pink-text-gradient"
          },
          {
            name: 'react',
            color: "blue-text-gradient"
          },
        ],
        image: lsq1,
        live_code_link: "https://lsq.com/",
        source_code_link: "https://github.com/emmanuelRep/",
      },
      {
        name: 'Qwil',
        description: 'Qwil is an automated payments and liquidity provider. My tasks include the implementation of multi factor authentication for account users, and active management of their react ecosystem.',
        tags: [
          {
            name: 'react',
            color: "blue-text-gradient"
          },
          {
            name: 'firebase',
            color: "green-text-gradient"
          },
        ],
        image: qwil1,
        live_code_link: "https://app.qwil.com/",
        source_code_link: "https://github.com/emmanuelRep/",
      },
      {
        name: 'Napa',
        description: 'Napa is a popular Thai restaurant and lounge based in Orlando. My tasks included the development of their new website and a custom implementation of a booking system.',
        tags: [
          {
            name: 'Next',
            color: "blue-text-gradient"
          },
          {
            name: 'typescript',
            color: "green-text-gradient"
          },
        ],
        image: napa1,
        live_code_link: "https://www.napavybes.com/",
        source_code_link: "https://github.com/emmanuelRep/",
      },
      {
        name: "ITASC Solutions",
        description:
          "ITASC Solutions San Francisco's website features a highly intuitive site-map, search engine optimization, highly responsive design, and was designed specifically to cater to the B2B operation model of the organization.",
        tags: [
          {
            name: "Javascript",
            color: "green-text-gradient",
          }
          ],
        image: itascMain,
        live_code_link: 'https://itascsolutions.com/',
        source_code_link: "https://github.com/emmanuelRep",
      },
      {
        name: "Movie Land",
        description:
          "Movie land is an online movie database where users can go to find out information on past, present, and upcoming movie titles. It features the use of the OMDB API, and a highly responsive design",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "tailwindCSS",
            color: "green-text-gradient",
          },
          {
            name: "restAPI",
            color: "pink-text-gradient",
          },
        ],
        image: movieLand,
        live_code_link: "https://lustrous-gaufre-57b2e7.netlify.app/",
        source_code_link: "https://github.com/emmanuelRep/movieBase",
      },
      {
        name: '365 Concierge',
        description: '365 Concierge is an upcoming vacation booking and car rental web applicaion that is currently in the design stage.',
        tags: [
          {
            name: "figma",
            color: 'green-text-gradient'
          },
        ],
        image: shot,
        source_code_link: 'https://github.com/emmanuelRep/',
        live_code_link: 'https://www.figma.com/file/bMtmp9ZwatPuvene3V1m8D/365-Dubai?type=design&node-id=0%3A1&mode=design&t=GC1dnSeUxIQUA16g-1',
      },
        
    ];
    
    export { services, technologies, experiences, testimonials, projects };
