import React from 'react'
import './Skills.css'
import Seperator from '../../common/seperator/Seperator'
import { SkillsData } from '../../data/skills'
import SkillCard from './Skill-card';

function Skills() {
  const data = SkillsData;
  return (
    <div className='skills'>
      <Seperator />
      <label className='section-title'>Skills</label>
      <div className="skills-container">
        {data.map( (item) => {
          return(
            <div className="skills-section">
              <label className='skills-section-title'>{item.type}</label>
              <div className="skills-list">
                {
                  item.list.map( (skill => {
                    return(
                      <SkillCard skill={skill} />
                    )
                  }))
                }
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
