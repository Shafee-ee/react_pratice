import React from 'react'

const InputForm = ({ name, setName, age, setAge }) => {
    return (
        <div>
            <input type="text"
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <input type="number"
                placeholder='Enter your age'
                value={age}
                onChange={(e) => setAge(e.target.value)} />
        </div>
    )
}

export default InputForm