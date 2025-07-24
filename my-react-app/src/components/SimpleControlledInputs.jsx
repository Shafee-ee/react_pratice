import React, { useState } from 'react'

const SimpleControlledInputs = () => {

    const [name, setName] = useState('');

    return (
        <div>
            <input type="text"
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <p>Hello, {name || "Guest user"}!</p>
        </div>
    )
}

export default SimpleControlledInputs