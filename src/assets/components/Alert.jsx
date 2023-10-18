import React from 'react'


const Alert = ({ mensaje, color }) => {
    console.log('entre a alert')
    return (
        <div className={color}>{mensaje}</div>
    )
}



export default Alert