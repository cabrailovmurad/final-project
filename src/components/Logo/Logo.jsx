import React from 'react';
import logo from '../../images/logo.webp';
import { Link } from 'react-router-dom';



const Logo = () => {
  return (
    <div className='logo'>
<Link to="/">
<img src={logo} alt='oxxxymiron' />

</Link>


    </div>
  );
};

export default Logo;