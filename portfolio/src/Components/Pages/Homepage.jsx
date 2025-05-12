import React, { useEffect, useRef } from 'react';
import './Homepage.css';
import { assets } from '../../assets/assets';
import ProjectCard from '../ProjectCard/ProjectCard';

const Homepage = () => {
  const containerRef = useRef(null);

  const scrollerImages = [
    assets.FlexworkspaceCE,
    assets.Plantify,
    assets.PagePilotCE,
    assets.Plantify2,
    assets.MainBodyImage1
  ];

  const duplicatedImages = [...scrollerImages, ...scrollerImages]; // Duplicate images for seamless looping

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({ left: -container.offsetWidth / 3, behavior: 'smooth' }); // Scroll by one image width
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({ left: container.offsetWidth / 3, behavior: 'smooth' }); // Scroll by one image width
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Set initial scroll position to the middle of the duplicated images
    container.scrollLeft = container.scrollWidth / 2;

    const handleScroll = () => {
      // Seamless scrolling logic
      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth / 2 - container.offsetWidth;
      } else if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = container.scrollWidth / 2;
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage">
      <section className="homepageSection1Container">
        <div>
          <p className="homepage-phrase">COMPILING DREAMS INTO DEPLOYABLE REALITIES</p>
        </div>
        <div className="homepageImages">
          <img className="homeImageDimensions" src={assets.MainBodyImage1} alt="BodyImage1" />
          <img className="homeImageDimensions" src={assets.MainBodyImage2} alt="BodyImage2" />
        </div>
      </section>

      <div className="project-text-wrapper">
        <h1 className="stroke top">PROJECTS</h1>
        <h1 className="stroke bottom">PROJECTS</h1>
      </div>

      <section className="homepageSection2Wrapper">
        <button className="homepageSection2Button Left" onClick={scrollLeft}>
          <img src={assets.LeftArrowIcon} alt="Scroll Left" className="buttonIcon" />
        </button>
        <div className="homepageSection2Container" ref={containerRef}>
          {duplicatedImages.map((image, index) => (
            <img key={index} className="scrollImage" src={image} alt={`Image ${index}`} />
          ))}
        </div>
        <button className="homepageSection2Button Right" onClick={scrollRight}>
          <img src={assets.RightArrowIcon} alt="Scroll Right" className="buttonIcon" />
        </button>
      </section>

      <section className="homepageSection3Container">
        <ProjectCard
          image={assets.Plantify}
          projectTitle="Plantify"
          projectDescription="Plantify is a Kotlin-based 
          Android application designed to help plant lovers
          manage and care for their green companions with ease. 
          Built using Jetpack Compose, Firebase, and Google
          APIs, the app allows users to track watering schedules, sunlight needs,
           and personalize each plant with custom nicknames and favorites.
          Whether you're a seasoned gardener or a new plant parent, 
          Plantify simplifies plant care through interactive UI 
          components, real-time reminders, and a growing plant database."
          imageLayout="image-left"
          tags={['Kotlin', 'Jetpack Compose', 'Android Studio', 'Firebase Firestore', 'Firebase Auth', 'Google APIs', 'Role-based Authentication']}
        />

        <ProjectCard
          image={assets.PagePilotCE}
          projectTitle="Page Pilot"
          projectDescription="The Book Management System is a web-based application built using ASP.NET Core MVC and C#. It enables administrators to manage a catalog of books with secure JWT-based authentication and role-based access. The backend is powered by SQL Server and RESTful APIs, while the UI offers a responsive and intuitive interface. The system supports full CRUD operations and proper separation of concerns using the MVC design pattern. This project showcases expertise in secure web development, structured backend integration, and database-driven workflows suitable for enterprise-level use cases in educational or organizational environments."
          imageLayout="image-right"
          tags={['ASP.NET Core', 'MVC', 'C#', 'SQL Server', 'JWT', 'REST API']}
        />

        <ProjectCard
          image={assets.FlexworkspaceCE}
          projectTitle="Flex Workspace"
          projectDescription="Flex Workspace is a full-stack office 
          space rental platform developed using the MERN stack.
           It enables users to browse, book, and manage office s
           paces while providing admins with a dashboard to maintain 
           listings. Authentication is handled using JWT, and CRUD functionality 
           is implemented across the application. The UI is responsive and 
           optimized for desktop and mobile users. The platform demonstrates
            end-to-end web development skills, secure authentication flows, 
          and modern UI design tailored for business use cases"
          imageLayout="image-left"
          tags={['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'MERN Stack', 'RESTful APIs', 'Role-based Authentication']}

        />

          <ProjectCard  
          image={assets.Nexus}
          projectTitle="Nexus Point Solutions"
          projectDescription="Nexus Point Solutions is a full-stack SaaS project management platform developed using the MERN stack. It includes distinct interfaces for users and administrators, with role-based access control and premium subscription integration via Stripe. Admins can manage site content while users access tools and newsletters. The backend uses RESTful APIs and MongoDB for data persistence. Built within an Agile team environment, this project emphasizes production-level architecture, modular design, and seamless full-stack integration. It reflects the ability to build scalable web applications, handle authentication securely, and design business-ready solutions for SaaS-based platforms with subscription models."
          imageLayout="image-right"
          tags={['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Stripe', 'REST API']}
        />


        <ProjectCard
          image={assets.Moov}
          projectTitle="Moov"
          projectDescription="Moov is a movie rental desktop application developed using .NET Core and C#. It allows users to rent, return, and manage movies with a role-based access system. The application features a clean WinForms interface and uses Entity Framework and LINQ for efficient data querying. SQL Server powers the backend data storage, supporting rental history, late fee calculations, and availability tracking. This project demonstrates proficiency in desktop development, clean architectural practices, and effective use of object-oriented programming. It reflects strong understanding of CRUD operations, data modeling, and building responsive desktop interfaces using modern Microsoft technologies."
          imageLayout="image-left"
          tags={['.NET Core', 'C#', 'WinForms', 'Entity Framework', 'LINQ', 'SQL Server']}
        />

        

      

        <ProjectCard
          image={assets.EmergencyDevice}
          projectTitle="Emergency Alert Device"
          projectDescription="The Emergency Alert Device is an IoT-based solution built using Arduino and Embedded C/C++. It uses sensors to monitor drowning situations and critical vitals, triggering alerts in real time when thresholds are breached. Designed for high-stakes environments like pools or hospitals, the system is compact and responsive. It can be extended with a desktop dashboard for logging using .NET and WinForms. This project demonstrates hands-on experience with hardware integration, sensor calibration, and embedded system design, emphasizing real-time responsiveness and fail-safe mechanisms in safety-critical applications."
          imageLayout="image-right"
          tags={['Arduino', 'Embedded C', 'IoT', 'Sensors']}
        />

      </section>
    </div>
  );
};

export default Homepage;