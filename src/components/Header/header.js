import React from 'react';
import '../../styles/base.css'
import './header.css'
import Aux from '../../HOC/Aux';



const Header = props =>{
    return(
        <Aux>
            <header className='header'>
                <div className='body-containter'>
                    <h1>Indecision App</h1>
                    <h2>Put your hands in the life of a computer</h2>
                </div>
            </header>
        </Aux>
    )
}


export default Header;
