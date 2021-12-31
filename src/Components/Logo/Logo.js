import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import FaceId from './FaceId.png' 

const Logo = () => {
    return (
        <div className='Logo'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner"><img src={FaceId} alt="png" /> </div>
            </Tilt>
        </div>
    )
}

export default Logo