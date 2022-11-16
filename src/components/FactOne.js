import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom'

const FactOne = () => {
    return (
        <div>
            <h1> First secret fact</h1>
            <h2>Human Torch made the first appearance of any Marvel hero in the comics</h2>
            <div className="button-div">
                <Link to='/'  ><button id='goHome'>Go back before it too late</button></Link>
                <Link to='/fact-two'><button id='goToFactTwo'>You better not click</button></Link>
            </div>
        </div>
        
    )
 }
//   <button className="pressme">
//     hey
//   </button>
export default FactOne;