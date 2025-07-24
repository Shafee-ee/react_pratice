import React from 'react'

const LogInDemo = ({ isLoggedIn }) => {
    return (
        <div>
            <h1>Is the User Logged in?</h1>
            {isLoggedIn ? (<p>user is logged In</p>) : (<p>User is not logged in</p>)}
        </div>
    )
}

export default LogInDemo