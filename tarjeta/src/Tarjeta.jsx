import React from 'react';
import './style.css';
const Tarjeta = () => {
  return (
    <div className='card' style={{width: 368 + 'px'}}> 
      <picture className='card-img-top' src={require('./img/cactus.png')}style={{width: 100 + '%'}}/>
      <div className='card-body'>
        <div className='cosa'><h5 id='nose' className='btn'>Design</h5></div>  
        <h4 className='card-title'>Embracing Minimalism</h4>
        <p id='descripcion' className='card-text'>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
        <p id='autora'>Annie Sprat</p>
      </div>
    </div>
  );
}

export default Tarjeta;