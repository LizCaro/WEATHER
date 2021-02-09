import React from 'react'
import './Loading.css'

function Loading() {
    return (
        <div className="center">
        <div className="lds-spinner "><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading
