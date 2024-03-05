import React from 'react'
import "../ImageComponent/ImageComponent.scss"

import logoImage from '../../assets/Llogo.png'

const ImageComponent = (props) => {
    return (
        <>
            <div className="main">

                <div className="container">
                    <div className='image1'><img src={props.logoImage} alt="" /></div>
                    <div className="text">
                        <h2>{props.knowus}</h2>
                        <h1>{props.title}</h1>
                        <div className='image2'><img src={props.logoImage} alt="" /></div>
                        <p>Dosawa is the best South Indian restaurant brand that has more than a decade of experience in serving authentic and contemporary delicacies of South Indian cuisine. <br /> <br />

                            We are established to breathe a new life into the traditional south Indian cuisine and present it to the world in a new light. At Dosawala street, we endeavour to cater a unique menu to food conscious customers by modernising traditional south Indian recipes into healthier & tastier dishes. <br /> <br />

                            Dosawala unique in its concept has varying franchise based on site availability and expertise in feasibility analytics in the food & beverage industry. <br /> <br />

                            We have designed our menu very cautiously that ensures the authentic taste of the South. Some of the most popular food items on our menu are Idli, Dosa, Special Chula Dosa Vada, Uthappam, Upma, Rice, and rice.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageComponent