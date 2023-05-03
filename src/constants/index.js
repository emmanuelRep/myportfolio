import {
  Apex,
  aws,
  c,
  fbAds,
  googleAds,
  java,
  office,
  python,
  sql,
  php,
  wordpress,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    lavner,
    Jamin,
    itasc,
    worldCup,
    data,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Ads Manager",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      title: "Junior Front End Developer",
      company_name: "Lavner Education",
      icon: lavner,
      iconBg: "#383E56",
      date: "May 2022 - August 2022",
      points: [
        "Designed and implemented web applications along with 3rd party software integrations for customer facing projects which increased customer satisfaction and usability by 40%.",
        "Analyzed the team’s code in collaboration with 3 other developers to provide additional perspective and catch previously missed errors before application deployment, which shortened the time it took to deploy new web applications by 25%.",
        "Tested, debugged, and shipped 1000s of lines of code to various development teams. Hence, leading to a 100% bug-free deployment in all web applications.",
        "Worked with PM/IM to keep on track with the project plan, timeline, and billing. On average, this saved 3 days of communication per project.",
      ],
    },
    {
      title: "Junior Full Stack Developer",
      company_name: "Apex Press Media",
      icon: Apex,
      iconBg: "#383E56",
      date: "Jan 2021 - May 2022",
      points: [
        "Implemented newly learned front-end object-oriented programming to develop client server systems. Hence, making it easier for data teams to access, retrieve, and analyze customer data in 30% less time",
        "Deployed AWS to allow easy iteration in company cloud infrastructure which improved online fortification of customer data and sped up the global deployment of new web applications by 150%",
        "Spearheaded the use of React.JS to create 100+ responsive SEO landing pages for both company and client, which conceived a 100% increase in user traffic, and a 40% decrease in ad spend per client.",
        "Revamped the descriptions of operations and workflow in non-technical terms, facilitating seamless functioning of non-coding teams with minimal disruption, resulting in a noteworthy 50% surge in project delivery.",
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
      name: "Benjamin Olisakwe",
      designation: "COO",
      company: "Doremmy Chicago",
      image: Jamin,
    },
    /*{
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    }, */
  ];
  
  const projects = [
    {
      name: "FIFA Live",
      description:
        "Web-based platform that provides live soccer match updates on all major global soccer leagues and special events like the world cup and the olympics",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient"
        },
      ],
      image: worldCup,
      source_code_link: "https://github.com/emmanuelRep/Icode",
    },
    {
      name: "DataCore",
      description:
        "A secure web-based database management system that enables users to efficiently query, update, and manage data based on assigned permissions.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JSP",
          color: "pink-text-gradient",
        },
        {
          name: "SQL",
          color: "blue-text-gradient",
        },
      ],
      image: data,
      source_code_link: "https://github.com/emmanuelRep/Client-ServerApp",
    },
    {
      name: "ITASC",
      description:
        "A search engine and google ads optimized website built and hosted on wordpress for an Information Technology organization based in the San Francisco bay area.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "googleAds",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: itasc,
      source_code_link: "https://itascsolutions.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };