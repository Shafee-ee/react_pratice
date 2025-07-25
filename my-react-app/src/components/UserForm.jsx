import React from 'react';
import { useUser } from './UserContext';

const UserForm = () => {
    const { name, setName, age, setAge } = useUser();

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

export default UserForm