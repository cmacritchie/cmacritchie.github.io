// import React from 'react'
import pageLayout from '../../HOC/pageLayout'
// import "../css/style.css"

const Node = () => {
    return (
        <div>
            Node Js is a great framework, truly inspiring, very good!
        </div>
    )
}

const details = {
    page: 'Node.js'
  }

export default pageLayout(details)(Node)
