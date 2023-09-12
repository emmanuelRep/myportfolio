
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
        icon: html,
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
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Material UI",
        icon: material,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "Three JS",
        icon: threejs,
      },
      {
        name: "Figma",
        icon: figma,
      },
      {
        name: "Java",
        icon: java,
      },
      {
        name: "SQL",
        icon: sql,
      },
      {
        name: "git",
        icon: git,
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
        title: "Freelance UI and Front-End Developer",
        company_name: "Novvi Properties",
        icon: lavner,
        iconBg: "#383E56",
        date: "July 2023 - Present",
        points: [
          "Leading Agile/SCRUM stakeholder meetings to define project goals, and gather insights for a cross-platform, mobile-friendly website, that will result in streamlined decision-making and accelerated development.",
          "Collaborating with the Marketing Director to create a user persona and roadmap for high-end clients, which will result in tailored wireframes and Figma models that ensure an exceptional user experience.",
          "Developing dynamic React.js front-end to efficiently render and manage Salesforce CRM data in JSON format alongside multiple reusable components that will lead to a reduced load time and improved user experience.",
          "Employing AppContext for streamlined state management and GIT for versioning. Hence, enhancing performance while avoiding prop drilling.",
          "Leveraging the Google Maps API to dynamically display over 50 property listings on an interactive map, to enhance the user's location-based search experience.",
          "Utilizing Material UI API for cross-platform compatibility, ensuring consistent and responsive design across mobile and tablet versions.",
        ],
      },
      {
        title: "Front-End Developer Intern",
        company_name: "Lavner Education",
        icon: lavner,
        iconBg: "#383E56",
        date: "May 2022 - August 2022",
        points: [
          "Coordinated closely with the Summer Director to ensure the timely delivery of React code to over 5 camps, ensuring they were prepared for daily lectures.",
          "Cooperated with other team members to diligently debug over 5 react code versions daily, ensuring they remained consistently bug-free and lecture ready.",
          "Led the design and development of web user interfaces using React, serving as educational tools for over 300 children across 15 camps. Hence, leading to a strong foundational understanding of React among the students.",
        ]
      },
      {
        title: "Freelance UI and Front-End Developer",
        company_name: "ITASC Solutions",
        icon: Apex,
        iconBg: "#383E56",
        date: "December 2021 – May 2022",
        points: [
          "Crafted a tailored WordPress website aligned with client specifications, catering to the B2B model of ITASC Solutions.",
          "Initiated Agile stakeholder meetings to collaborate with key stakeholders at ITASC Solutions, defining project objectives and aligning development priorities. Hence, leading to a 40% reduction in development time.",
          "Designed and implemented a Become-a-Partner pipeline, resulting in a remarkable 80% boost in business partnership strength.",
          "Customized HTML, CSS, and JavaScript to enhance performance, cross-platform compatibility, and responsive design, resulting in a user-focused and standards-compliant website.",
          "Leveraged SEMrush for SEO optimization of the website, resulting in an impressive 40% increase in Google rankings for the client's favored compliance services",
        ],
      },
    ];
    
    const testimonials = [
      {
        testimonial:
          "Emmanuel is incredibly detailed and passionate about what he does, and it shows in the quality of his designs and work.",
        name: "Dana Singer",
        designation: "Director",
        company: "Lavner Education",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        testimonial:
          "Emmanuel cares about his work and clients. He built up our ecommerce store from the ground up and got us hundreds of new visitors per day when he ran our online marketing.",
        name: "Benjamin Olis",
        designation: "COO",
        company: "Doremmy",
        image: Jamin,
      },
    ];
    
    const projects = [
      {
        name: "Novvi Properties",
        description:
          "Novvi properties Dubai's upcoming website features predictable google maps api location search, responsive mobile-first design, intuitive high end property listing designs, user OAuth login, and many more.",
        tags: [
          {
            name: "ReactJS",
            color: "blue-text-gradient",
          },
          {
            name: "MaterialUI",
            color: "green-text-gradient",
          },
          {
            name: "Google-Maps-API",
            color: "pink-text-gradient",
          },
          {
            name: "Salesforce-API",
            color: "blue-text-gradient"
          }
        ],
        image: novviMain,
        live_code_link: "https://www.tinyurl.com/novvi",
        source_code_link: "https://github.com/emmanuelRep/Novvi/tree/master",
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
          },
          {
            name: "HTML",
            color: "pink-text-gradient",
          },
          {
            name: "CSS",
            color: "green-text-gradient",
          },
          {
            name: "figma",
            color: "pink-text-gradient"
          },
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
            name: "ReactJS",
            color: "blue-text-gradient",
          },
          {
            name: "tailwindCSS",
            color: "green-text-gradient",
          },
          {
            name: "RestAPI",
            color: "pink-text-gradient",
          },
        ],
        image: movieLand,
        live_code_link: "https://lustrous-gaufre-57b2e7.netlify.app/",
        source_code_link: "https://github.com/emmanuelRep/movieBase",

      },

      {
        name: 'Meme Generator',
        description: 'In Developement: A fun react web application that lets the user create their own memes for social media utilizing the Imgflip Rest API.',
        tags: [
          {
            name: 'ReactJS',
            color: "blue-text-gradient"
          },
          {
            name: 'RestAPI',
            color: "pink-text-gradient"
          },
        ],
        image: memeGen,
        live_code_link: "https://github.com/emmanuelRep/",
        source_code_link: "https://github.com/emmanuelRep/",
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