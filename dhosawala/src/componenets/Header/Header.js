import React from 'react'
import "../Header/Header.scss"
import { Hamburger, Logo } from '../../icons'



const Header = () => {
    return (<>


        <div className='Header'>
            <div className='logo'><Logo/></div>
            <ul>
                <li>About US</li>
                <li>franchise</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>
            <div className='menu'><Hamburger/></div>
        </div>
    </>
    )
}

export default Header