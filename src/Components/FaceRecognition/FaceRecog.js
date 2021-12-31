import React from 'react'
import './FaceRecognition.css'

const FaceRecog = ({imageUrl, box}) => {
    return (
        <div className='center'>
            <div className='facerec'>
                <img id='inputImage' srcSet={imageUrl} alt=""  width='500px' height='auto'/>
                <div className="boundinBox" style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}></div>
            </div>
         </div>    
    )
}

export default FaceRecog
