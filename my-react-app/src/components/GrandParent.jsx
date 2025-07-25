import { useState } from 'react';
import { UserContext } from './UserContext';
import UserForm from './UserForm';
import Greeting from './Greeting';
import BirthdayMessage from './BirthdayMessage';

const GrandParent = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    return (
        <div>
            <UserContext.Provider value={{ name, setName, age, setAge }}>
                <h2>GrandParent state Management</h2>
                <UserForm />
                <Greeting />
                <BirthdayMessage />
            </UserContext.Provider>
        </div>
    )

}
export default GrandParent