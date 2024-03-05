import React from 'react'
import Call from '../../icons/Call'
import Instagram from '../../icons/Instagram'
import X from '../../icons/X'
import Fb from '../../icons/Fb'
import "../Footer/Footer.scss"
import ImageBunch from '../../assets/ImageBunch.png'

const Footer = () => {
    return (
        <>
            <div className="main">

                <div className="footer">
                    <ul className='I1'>
                        <h3 className='tags' >
                            Address
                        </h3>
                        <p>
                            <span>Head Office:</span> Ground Floor, Savan Mall, behind Kargil Petrol Pump Ahmedabad contact@dosawalaindia.com
                        </p>
                    </ul>
                    <ul className='I2'>
                        <h3 className='tags' >
                            Store contacts:
                        </h3>
                        <div className="I2-child">
                            <p>Sola road: 82380 11324</p>
                            <p>Vaishnodevi: 6396772263</p>
                            <p>Bhavnagar: 8145337482</p>
                            <p>Mundra: 87358 82755</p>
                        </div>
                    </ul>
                    <ul className='I3'>
                        <h3 className='tags' >User Link</h3>
                        <div className="I3-child">
                            <li>Our story</li>
                            <li>download menu</li>
                            <li>vison and growth</li>
                            <li>franchise</li>
                        </div>
                    </ul>
                    <ul className='I4'>
                        <h3 className='tags' >Social Media</h3>
                        <div className="I4-child">
                            <div>
                                <p><Fb /></p>
                                <span>Facebook</span>
                            </div>
                            <div>
                                <p><X /></p>
                                <span>twitter</span>
                            </div>
                            <div>
                                <p><Instagram /></p>
                                <span>instagram </span>
                            </div>
                            <div>
                                <p><Call /></p>
                                <span>8510957376</span>
                            </div>
                        </div>
                    </ul>
                    <ul className='I5'>
                        <h3 className='tags'>Instagram</h3>
                        <div><img src={ImageBunch} alt="" /></div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer