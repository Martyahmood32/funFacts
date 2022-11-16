import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom'

const FactThree = () => {
    return (
        <div>
            <h1> Last secret fact</h1>
            <h2>Michael Jackson once tried to buy Marvel Comics 
during the early 90s. The reason? He wanted to star as Spider-Man in his version of the movie. </h2>
            <div className="button-div">
            <Link to='/fact-two'  ><button id='goHome'>What's the point of clicking me</button></Link>
            <Link to='/'><button id='goToFactThree'>Go home...seriously</button></Link>
            </div>
            </div>

        
    )
 }
  <button className="pressme">
    
  </button>
export default FactThree;