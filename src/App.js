import React from 'react';
import { Container} from '@material-ui/core';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth/Auth';
import Orders from './components/Orders/Orders';

const App = () => {
  
  const user = JSON.parse(localStorage.getItem('profile'))
   
  return (
    <>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" exact element={!user ? <Navigate to={"/auth"}/> : <Home/>} />
          <Route path="/auth" exact element={ user ? <Navigate to={"/"}/> : <Auth/> }/>
          <Route path="/search" exact element={<Home/>}/>
          <Route path="/orders" exact element={<Orders/>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App