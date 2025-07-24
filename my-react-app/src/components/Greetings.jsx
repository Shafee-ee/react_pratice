import React from 'react'

const Greetings = ({ name }) => {
    return (
        <div>
            {name ? (<p>Hello, {name}</p>) : (<p>Enter your name and click on submit</p>)}

        </div>
    )
}

export default Greetings