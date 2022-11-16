import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom'

const FactTwo = () => {
    return (
        <div>
            <h1> Second secret fact</h1>
            <h2>There is a frog with the powers of Thor.
                The amphibian is named Throg and wields the Frog Mjolnir. This frog also resembles the amphibian Thor himself once turned into. </h2>
            <div className="button-div">
            <Link to='/fact-one'  ><button id='goHome'>hey buddy..stop</button></Link>
            <Link to='/fact-three'><button id='goToFactThree'>At this point just click it</button></Link>
            </div>
        </div>
        
    )
 }
  <button className="pressme">
    
  </button>
export default FactTwo;