import React, { useState } from 'react'
import ResturantCrad from './components/ResturantCrad'
import { useContext } from 'react'
import userContext from './userContext'

const Body = (props) => {
    const [anotherUser,setAnotherUser] = useState({
        name: "siva",
        password: "siva@gmail.com"
    })
    function testing() {
      return 'dswdef'
    }
    console.log(testing)
    console.log(typeof(testing))
    
     console.log(typeof(ResturantCrad))
  let {user,setUser} = useContext(userContext)
  
  function clickme () {
    setUser({
      name: "ganesh updated",
        email: "siva@gmail.com"
    })
  }

  return (
    <div className='p-5'>
      <p>{user.name}</p>
      <button onClick={clickme}>updateContext</button>
         {/* <userContext.Provider value={{user:anotherUser,setUser:setAnotherUser}}> */}
         <ResturantCrad/>
         <ResturantCrad/>
         <ResturantCrad/>
         <ResturantCrad/>
         <ResturantCrad/>
         <ResturantCrad/>
         <ResturantCrad/>
         <ResturantCrad/>
         <ResturantCrad/>
        {/* </userContext.Provider>    */}
    </div>
  )
}

export default Body