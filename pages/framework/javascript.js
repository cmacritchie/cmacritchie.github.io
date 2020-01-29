// import React from 'react'
import mainLayout from '../../HOC/mainLayout'
// import "../css/style.css"

const Node = () => {
    return (
        <p>
            Javascript
        </p>
    )
}

const details = {
    page: 'Node.js'
  }

export default mainLayout(details)(Node)
