import React from 'react'
import { useUser } from './UserContext';



const BirthdayMessage = () => {
    const { name, setName, age, setAge } = useUser();

    return (
        <div>
            {age ?
                `You will be ${age + 1} next year` :
                `How old are you?`}
        </div>
    )
}

export default BirthdayMessage