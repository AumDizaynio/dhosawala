import React from 'react'
import Logo from '../../icons/Logo'
import Hambuger from '../../icons/Hamburger'
import "../Header/Header.scss"



const Header = () => {
    return (<>


        <div className='Header'>
            <div className='logo'><Logo /></div>
            <ul>

                <li>About US</li>
                <li>franchise</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>
            <div className='menu'><Hambuger /></div>
        </div>
    </>
    )
}

export default Header