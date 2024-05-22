import React from 'react'

const ProjectListLoading = () => {
  return (
     
          <ul className="space-y-8">
              {Array(3).fill(0).map((_el, index) => (
                  <li key={index} className="mb-4">
                      <div className="w-full h-24 animate-pulse bg-neutral-100 dark:bg-neutral-700">

                      </div>
                  </li>
              ))}
          </ul>
      
  )
}

export default ProjectListLoading