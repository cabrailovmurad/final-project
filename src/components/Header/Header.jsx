import React from 'react'
import Logo from '../Logo/Logo';
import ScrollAnimation from 'react-animate-on-scroll';
import { MENU } from '../../utils/constants';



const Header = () => (
 <section className='header'>
    <div className='container'>
        <header>
<Logo />
<nav className='menu'>

{MENU.map(({link,name})=>
<ScrollAnimation key={link} className='menu-item'>

</ScrollAnimation>
)}

</nav>

        </header>
    </div>
 </section>
);
export default Header;