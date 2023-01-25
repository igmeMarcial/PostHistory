import React from 'react'
import Header from './Header'

function ContentApp({children}) {
  return (
    <div>
        <Header/>
        <div>{children}</div>
    </div>
  )
}

export default ContentApp