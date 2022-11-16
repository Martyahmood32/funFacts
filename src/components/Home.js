import React from 'react';
import { Link } from 'react-router-dom'

const Home =() => {
    return (
        <div className="App">
        <h1>Marvel Facts</h1>
          
      
         <h2 >"I have always included minority characters in my stories, often as heroes. We live in a diverse society—in fact, a diverse world, and we must learn to live in peace and with respect for each other."-Stan Lee</h2>
  

       <Link to='/fact-one' ><button id='homeButton' onClick='enlarge()'>Don't click!!!</button></Link>
       </div>
       
);
}

export default Home