import React, { useContext } from 'react'
import Items from '../Components/Items'
import { AuthContext } from '../context/AuthContext';

function Landing() {

  return (
    <div className="container mt-5">
      
      <Items/>
    </div>
  )
}

export default Landing