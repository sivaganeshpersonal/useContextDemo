import React from 'react'
import userContext from './userContext'
import { useContext } from 'react'

const Header = () => {
    const {user} = useContext(userContext)
  return ( 
    <div className="p-5">
      {/* <userContext.Consumer>
        {value=> <p>iam header {value.user.name}</p> }
      </userContext.Consumer> */}
        <p>iam header {user.name}</p>
        </div> 
  )
}

export default Header