import React, { useState } from 'react'

const isVisible = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle message
            </button>
            {isVisible && (<p>This is visible</p>)}
        </div>
    )
}

export default isVisible