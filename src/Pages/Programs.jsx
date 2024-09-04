import React from 'react'
import ProgramTitles from '../Component/ProgramTitles'
import transition from '../Component/transition'

const Programs = () => {
  return (
    <div>
      <div className="a-i-container">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center text-white text-center text-5xl bg-black/50'>
          <h1>Our Programs</h1>
        </div>
      </div>
      <ProgramTitles />
    </div>
  )
}

export default Programs