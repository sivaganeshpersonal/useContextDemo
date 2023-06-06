import React from 'react'
import userContext from './userContext'
import { useContext } from 'react'

const Footer = () => {
    const {user} = useContext(userContext)
    // const x = useContext(userContext)

  return (
    <div className='p-5'><p>i am footer {user.name}</p></div>
  )
}

export default Footer