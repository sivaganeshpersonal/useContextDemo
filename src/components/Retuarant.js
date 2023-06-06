import React from 'react'
import userContext from '../userContext'
import { useContext } from 'react'

const Retuarant = () => {
    const {user} = useContext(userContext)
    console.log(user)
  return (
    <div className="p-5">
      <p>i am {user.name}</p>
      <p>i am {user.email}</p>
      </div>
  )
}
export default Retuarant