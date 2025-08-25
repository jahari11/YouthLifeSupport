import React from 'react'
import ProgramTitles from '../Component/ProgramTitles'
import transition from '../Component/transition'

const Programs = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Comprehensive services designed to empower youth and families in our community
          </p>
        </div>
      </div>
      <ProgramTitles />
    </div>
  )
}

export default Programs