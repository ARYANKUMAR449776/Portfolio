import React from 'react';
import '../ProjectCard/ProjectCard.css';


const ProjectCard = ({ image, projectTitle, projectDescription, imageLayout }) => {
  return (
    <div className={`project-card-container ${imageLayout}`}> {/*Add image-left or image-right to choose the layout */}
      <div className="project-card-image">
        <img className="project-card-image" src={image} />
      </div>
      <div className={`project-card-title ${imageLayout}`}>
        <h1 className="project-card-title-stroke top">{projectTitle}</h1>
        <h1 className="project-card-title-stroke bottom">{projectTitle}</h1>
      </div>
      <div className='project-card-content'>
        <p className='project-card-description'>{projectDescription}</p>
      </div>
    </div>
  )
}

export default ProjectCard
