import React from 'react'
import './Project-card.css'

function ProjectCard({project}) {
  return (
    <div className='project-card'>
      <div className="project-info">
        <label className='project-title'>{project.title}</label>
        <div className="project-links">
            {/* {project.demo && (
                <a href={project.demo} className='project-link'>
                    <div className="link-button">
                        <i class="fi fi-rr-globe"></i>Demo
                    </div>
                </a>
            )} */}
            {project.github && (
                <a href={project.github} className='project-link'>
                <div className="link-button">
                  <i class="devicon-github-original colored"></i>Github
                </div>
            </a>
            )}
        </div>
        <p>{project.about}</p>
        <div className='project-tags'>
          {project.tags.map((tag) => {
            return <label className='tag'>{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} alt="projectPhoto" className='project-photo' />
    </div>
  )
}

export default ProjectCard
