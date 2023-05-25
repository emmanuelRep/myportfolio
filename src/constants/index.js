
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
      philter,
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
        title: "UI/UX Designer",
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
          "Collaborated with PM/IM to keep on track with the project plan, timeline, and billing. On average, this saved 3 days of communication per project.",
        ],
      },
      {
        title: "UI/UX Designer and Front End Developer",
        company_name: "Apex Press Media",
        icon: Apex,
        iconBg: "#383E56",
        date: "Jan 2019 - May 2022",
        points: [
          "Implemented newly learned front-end object-oriented programming to develop client server systems. Hence, making it easier for data teams to access, retrieve, and analyze customer data in 30% less time",
          "Instructed a team in the graphic design, prototyping, animations, and deployment of over 10 SEO websites that reduced company ad spend by up to 50%, while improving accessibility to those with disabilities.",
          "Managed a team in the deployment of AWS best practices to allow easy iteration in company cloud infrastructure which improved online fortification of customer data and sped up the global deployment of new web applications by 150%.",
          "Spearheaded the use of design tools figma and adobe cc to design application prototypes, and React.JS to create 10+ responsive SEO landing pages for both company and client, which conceived a 100% increase in user traffic and a 40% decrease in ad spend per client.",
          "Conducted comprehensive user surveys to inform the development of intuitive and impactful user interfaces tailored to the needs of diverse business clients.",
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
    ];
    
    const projects = [
      {
        name: "Philter Mobile App",
        description:
          "Completed: Introducing my spam filter mobile app, blocking unwanted calls, emails, and SMS messages with ease. Regain control of your digital interactions effortlessly.",
        tags: [
          {
            name: "Figma",
            color: "blue-text-gradient",
          },
          {
            name: "Sheets",
            color: "green-text-gradient",
          },
          {
            name: "Adobe CC",
            color: "pink-text-gradient",
          },
        ],
        image: philter,
        source_code_link: "https://nuelvpn03.wixsite.com/philter2",
      },
      {
        name: "ITASC",
        description:
          "Completed: I designed the UI/UX, developed, and hosted a WordPress website for a San Francisco Bay Area IT organization.",
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
        image: itasc,
        source_code_link: "https://itascsolutions.com/",
      },
      {
        name: "DataCore",
        description:
          "In Development: A secure web-based database management system that enables users to efficiently query, update, and manage data based on assigned permissions.",
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
          {
            name: "figma",
            color: "pink-text-gradient"
          }
        ],
        image: data,
        source_code_link: "https://github.com/emmanuelRep/Client-ServerApp",
      },
        
    ];
    
    export { services, technologies, experiences, testimonials, projects };