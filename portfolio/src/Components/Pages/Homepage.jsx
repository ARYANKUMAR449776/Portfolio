import React, { useEffect, useRef } from 'react';
import './Homepage.css';
import { assets } from '../../assets/assets';

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

      <div class="project-text-wrapper">
        <h1 class="stroke top">PROJECTS</h1>
        <h1 class="stroke bottom">PROJECTS</h1>
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
    </div>
  );
};

export default Homepage;