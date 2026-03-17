import React from 'react'
import About_Me from '@/components/main-sites/About_Me'

const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <About_Me />
    </div>
  )
}

export default page
