import React from 'react'
import programs from './programs.js'
const ProgramTitles = () => {
  return (
    <div>
        <div className="program-container">
            {programs.map(program => (
                <div className="program0">
                <div className="program00">
                <div className="program-head">
                  <h3>{program.programName}</h3>
                  <p>{program.subHeader}</p>
                </div>
                <div className='program0-img'>
                {Object.values(program.programImage).map((photo) => (
              <img src={photo} alt='photo'/>
            ))}
                </div>
                </div>
                <div className="program0txt">
                    <p>{program.programPgraphs.paragraph1}</p>
                    <p>{program.programPgraphs.paragraph2}</p>
                    <p>{program.programPgraphs.paragraph3}</p>
                    <p>{program.programPgraphs.paragraph4}</p>
                    <p>{program.programPgraphs.paragraph5}</p>
                    <p>{program.programPgraphs.paragraph6}</p>
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default ProgramTitles