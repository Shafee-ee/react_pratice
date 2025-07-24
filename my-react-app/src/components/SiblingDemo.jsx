import React, { useState } from 'react';
import WelcomeBanner from './WelcomeBanner';
import InputForm from './InputForm';

const SiblingDemo = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    return (
        <div>
            <h2>Shared state across Siblings</h2>
            <InputForm name={name} setName={setName} age={age} setAge={setAge} />
            <WelcomeBanner name={name} age={age} />
        </div>
    )
}

export default SiblingDemo