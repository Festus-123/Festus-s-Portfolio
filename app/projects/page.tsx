import React from 'react'
import Projects from '@/components/main-sites/MainProjects'

const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <Projects />
    </div>
  )
}

export default page
