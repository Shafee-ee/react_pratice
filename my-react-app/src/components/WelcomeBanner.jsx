import React from 'react';
import { useUser } from './UserContext';


const WelcomeBanner = () => {
    const { name, setName, age, setAge } = useUser();

    return (
        <div>
            <h3>{name ? `Welcome,${name}!, you are ${age} years old` : `Please enter your Name`}</h3>
        </div>
    )
}

export default WelcomeBanner