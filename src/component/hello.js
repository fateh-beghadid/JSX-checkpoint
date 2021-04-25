import React, { Component } from 'react';
import './hello.css' 
import Logo from '../img/react.svg';
import image from '../img/html.svg';
import photo from '../img/css.svg';
import photoJs from '../img/js.svg'

class hello extends Component {
  
    state = {  }
    render() { 
        
        return ( 
            <div className='container'>
                <h1 className='Blue'>im blue</h1>
               
                 <h1 className='green'>im green</h1>

                 <h1 className='red'>im red</h1>
                  <span className='logo-svg'>
                 <img src={Logo} alt="React Logo" />
                 <img src={image} alt="html Logo" />
                 <img src={photo} alt="css Logo" />
                 <img src={photoJs} alt="js Logo" />
                
                </span>
                </div>
         
            

        )}
}
 
export default hello  ;