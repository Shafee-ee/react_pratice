import React, { useState } from 'react';
import Greeting from './Greetings';

const MiniForms = () => {
    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedName(name.trim());
        setName('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <button type="submit"> Submit</button>
            </form>

            <Greeting name={submittedName} />
        </div>
    )
}

export default MiniForms