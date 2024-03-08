import React from 'react'
import "./HomeSlide3.scss"
import Dhosawala from "../../assets/Dhosawala.png"
import Image1 from "../../assets/Image1.png"
import Image2 from "../../assets/Image2.png"
import Image3 from "../../assets/Image3.png"

const HomeSlide3 = () => {
    return (
        <div>
            <div className="mainHS3">
                <div className="top">
                    <h2>
                        discover
                    </h2>
                    <h1>
                        Special dish
                    </h1>
                </div>
                <div className="btm">
                    <div className="bottom1">
                        <div>
                            <img src={Image1} alt="" />
                            <h5>Kara Mura</h5>
                            <h6>Masala dosa</h6>
                        </div>
                        <div>
                            <img src={Image2} alt="" />
                            <h5>Rava schezwan Dosa</h5>
                            <h6>supreme dosai</h6>
                        </div>
                        <div>
                            <img src={Image3} alt="" />
                            <h5>Cone shape</h5>
                            <h6>Special masala dosa</h6>
                        </div>
                    </div>
                    <div className="bottom2">
                        <img src={Dhosawala} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSlide3