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
          image={assets.FlexworkspaceCE}
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
          tags={['Kotlin', 'Jetpack Compose', 'Android Studio', 'Firebase Firestore', 'Firebase Auth', 'Google APIs','Role-based Authentication']}
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
          imageLayout="image-right"
          tags={['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'MERN Stack', 'RESTful APIs' , 'Role-based Authentication']}

        />

      </section>
    </div>
  );
};

export default Homepage;