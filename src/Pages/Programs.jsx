import React from 'react'
import ProgramTitles from '../Component/ProgramTitles'
import transition from '../Component/transition'

const Programs = () => {
  return (
    <div>
      <div className="a-i-container">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className="e-p-overlay">
          <h1>Programs</h1>
        </div>
      </div>
      <ProgramTitles />
    </div>
  )
}

export default Programs