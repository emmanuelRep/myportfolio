
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
        title: "Front-End Developer",
        company_name: "LSQ",
        icon: lsq,
        iconBg: "#383E56",
        date: "September 2023 - Present",
        points: [
          "Developing 150+ UI/UX designs into scalable and highly responsive usable angular applications to enhance the user experience of over 200+ clients and employees.",
          "Participating in Agile/SCRUM meetings with project managers and UI/UX designers to obtain concise project directions in a SPRINT manner. Hence, ensuring consistent on-time project deliveries.",
          "Integrating angular frontend components with .NET and Go APIs to consume data in a RESTful manner. Leading to advances and simplifications in user experience.",
          "Integrated Snyk testing into the CI/CD pipeline to secure and prevent the deployments of over 1000 outdated dependencies to production.",
        ],
      },
      {
        title: "Front-End Developer",
        company_name: "Qwil",
        icon: qwil,
        iconBg: "#383E56",
        date: "October 2023 - Present",
        points: [
          "Collaborating with a team of backend developers to develop user-facing multi-factor authentication to strengthen user account security, leading to a 100% drop in payment account breaches.",
          "Optimizing class-based react applications to speed up user account sign-in flow by 80%.",
          "Leading front-end development of custom client-facing applications to personalize the experience of over 10 new clients.",
          "Integrating Firebase and Django API with the front-end to secure new clients within Google Cloud.",
          "Utilized Nightwatch JS for e2e and unit testing on projects to simulate user experience and ensure that 1000s of lines of code all function flawlessly."
        ]
      },
      {
        title: "Freelance UI and Front-End Developer",
        company_name: "Contractor",
        icon: Apex,
        iconBg: "#383E56",
        date: "December 2021 – September 2023",
        points: [
          "Led Agile/SCRUM stakeholder meetings for over 4 clients to define project goals, and gather data-driven insights which sped up development and reduced delivery time by over 3 weeks.",
          "Developed dynamic React.js applications to consume Salesforce API data for a leading Dubai-based real estate client, which resulted in the successful rendering of over 50 property listings for clients, and drove company interactions up by over 70%.",
          "Employed GIT for versioning 1000s of lines of code. Hence, ensuring effective quality assurance and a 100% bug-free deployment.",
          "Leveraged the Google Maps API to dynamically display over 50 real estate properties in an interactive map format, which enhanced user location-based search experience and a 100% increase in site traffic.",
          "Utilized Material UI for cross-platform compatibility, ensuring consistent and responsive design across mobile and tablet versions for clients.",
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
            name: 'wordpress',
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
            name: 'wordpress',
            color: "blue-text-gradient"
          },
          {
            name: 'javascript',
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
            name: "wordpress",
            color: "blue-text-gradient",
          },
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