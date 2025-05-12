import React from 'react';
import '../ProjectCard/ProjectCard.css';


const ProjectCard = ({ image, projectTitle, projectDescription, imageLayout, tags = [] }) => {
  return (
    <div className={`project-card-container ${imageLayout}`}> {/*Add image-left or image-right to choose the layout */}
      <div className="project-card-image">
        <img className="project-card-image" src={image} />
      </div>
      <div className='seaparationLine'></div>
      <div className={`project-card-content ${imageLayout}`}>
        <h1 className={`project-card-title ${imageLayout}`}>
          {projectTitle.split(" ").map((word, index) => (
            <span
              key={index}
              style={{ color: index === 0 ? "white" : "#393939" }}
            >
              {" "+word}
            </span>
          ))}
        </h1>
        <p className='project-card-description'>{projectDescription}</p>
        <ul className={`project-card-tags-container ${imageLayout}`}>
          {tags.map((tag, index) => (
            <li key={index} className='project-card-tags'>
              <span className='project-card-tag'>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard
