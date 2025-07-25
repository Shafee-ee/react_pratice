import React from 'react';
import { useUser } from './UserContext';


const Greeting = () => {
    const { name, setName, age, setAge } = useUser();

    return (

        <div>
            <p>{name ? `Hi ${name}` : "Whats your name?"}</p>
        </div>
    )
}

export default Greeting    