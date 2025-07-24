import { useState } from 'react';
import UserForm from './UserForm';
import Greeting from './Greeting';
import BirthdayMessage from './BirthdayMessage';

const GrandParent = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return (
        <div>
            <h2>GrandParent state Management</h2>

            <UserForm name={name} setName={setName} age={age} setAge={setAge} />
            <Greeting name={name} />
            <BirthdayMessage age={age} />
        </div>
    )

}
export default GrandParent