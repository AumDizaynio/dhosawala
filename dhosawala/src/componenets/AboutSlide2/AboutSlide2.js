import React from 'react'
import { GreenCall, GreenMail } from '../../icons'
import Board from "../../assets/Board.png"
import "./AboutSlide2.scss"

const AboutSlide2 = () => {
    return (
        <div className='mainblock'>
            <div className="left">
                <h1>Contact us for more info</h1>
                <div className='leftl'>
                    <div className='l1'> <GreenMail /> <p>franchise@dosawalaindia.com</p></div>
                    <div className='l2'> <GreenCall /><p>+91  8510957376 </p> </div>
                    <p className='l3'>Varieties of Traditional South FoodFirst time in Gujarat, Introducing Unlimited south Indian Meal with 51 Delicious south Indian items.</p>
                </div>
            </div>
            <div className="right">
                <img src={Board} alt="" />
            </div>
        </div>
    )
}

export default AboutSlide2