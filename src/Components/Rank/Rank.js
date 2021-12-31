import React from 'react'
import "./Rank.css"
const Rank = ({entries,userName}) => {
    return (
        <div>
            <div className='Rank'>
                <p>Hey, {userName} your current Entry count is... <br/>{entries}</p>
            </div>
        </div>
    )
}
export default Rank
