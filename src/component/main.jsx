//family-container.jsx
import React from 'react';
import Main from './card';
import './main.css'

const Container = (props) => {
    const { messageOne, messageTwo, messageThree } = props;
  
    return (
      <div className="container_one">
        <div className="additional-text">{messageOne}</div>
        <div className="container_two">
          <div className="additional-text">{messageTwo}</div>
          <div className='container_three'>
            <div className="additional-text">{messageThree}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Container;