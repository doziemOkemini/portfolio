import React from 'react'
import './Work-card.css'

function WorkCard({item}) {
  return (
    <div className='work-card'>
      {/* <img src={item.CompanyLogo} className='work-logo' alt='work-logo' /> */}
      <div className="work-info">
        <label className='company-name'>{item.company}</label>
        <div className='work-dates'>
            <label>{item.dateJoining}</label> to <label>{item.dateEnd}</label>
        </div>
        <div className='work-desc'>
            <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard
