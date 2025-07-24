import React from 'react'

const BirthdayMessage = ({ age }) => {
    return (
        <div>
            {age ?
                `You will be ${age + 1} next year` :
                `How old are you?`}
        </div>
    )
}

export default BirthdayMessage