import React from 'react'

const WelcomeBanner = ({ name, age }) => {
    return (
        <div>
            <h3>{name ? `Welcome,${name}!, you are ${age} years old` : `Please enter your Name`}</h3>
        </div>
    )
}

export default WelcomeBanner