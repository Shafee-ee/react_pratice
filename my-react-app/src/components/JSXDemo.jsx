import React from 'react'

const JSXDemo = (props) => {

    return (
        <div>
            <h2>Hello,{props.name}</h2>
            <p>Your lucky Number is {props.luckyNumber}</p>
            <h2>This is the JSX Demo Component</h2>
        </div>
    )
}

export default JSXDemo