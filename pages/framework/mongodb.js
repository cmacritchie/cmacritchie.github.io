// import React from 'react'
import pageLayout from '../../HOC/pageLayout'
// import "../css/style.css"

const Node = () => {
    return (
        <>
            <p>
                I've used MongoDB for a number of my projects. The NoSQL, document-based database
                has helped me make things really good.
            </p>
        </>
    )
}

const details = {
    page: 'Mongodb'
  }

export default mainLayout(details)(Node)
