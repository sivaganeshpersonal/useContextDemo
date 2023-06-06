import logo from './logo.svg';
import './App.css';
// import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import userContext from './userContext';
import { useState } from 'react';

function App() {
  const [user,setUser] = useState({
    name: "ganesh",
    email: "ganesh@gmail.com"
  })
  // let x = 1
  return (
      <>
      <Header/>
      <userContext.Provider value={{user:user,setUser:setUser} }>
      <Body/>
      <Footer/>
      </userContext.Provider>
      </>
  );
}

export default App;
