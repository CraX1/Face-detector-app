import React from 'react'
import './ImageLinkForm.css'
const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return (
        <div className='FaceDetect'>
            <p className='DetectorHeading'>This detector will detect any faces in your pictures.Try it!!</p>
            <div className='center'>
                <div className='center inputBox'>
                    <input className='center' type="text" onChange={onInputChange}/>
                    <button onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm
