import React from 'react'

const UserFrom = ({ name, setName, age, setAge }) => {
    return (
        <div>
            <input type="text"
                placeholder='Enter your name.'
                value={name}
                onChange={(e) => setName(e.target.value)} />

            <input type="text"
                placeholder='Enter your age.'
                value={age}
                onChange={(e) => setAge(Number(e.target.value))} />
        </div>
    )
}

export default UserFrom