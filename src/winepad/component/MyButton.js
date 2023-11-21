import React from 'react'

function MyButton(props) {
    return props.href
        ? <a {...props} />
        : <button {...props} />
}


export default MyButton