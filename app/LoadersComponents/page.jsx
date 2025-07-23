import React from 'react'
import layout from './layout'
import DefaultPage from './DefaultPage'


function page() {
  return (
    <div className='flex justify-center items-center h-full'>
        <DefaultPage/>
      <layout/>
    </div>
  )
}

export default page
