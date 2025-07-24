import React from 'react'

const Greeting = ({ name }) => {
    return (
        <div>
            <p>{name ? `Hi ${name}` : "Whats your name?"}</p>
        </div>
    )
}

export default Greeting