// import React from 'react'
import mainLayout from '../../HOC/mainLayout'
// import "../css/style.css"

const GoogleCloud = () => {
    return (
        <>
            <p>
                Google Cloud
            </p>
        </>
    )
}

const details = {
    page: 'Google Cloud'
  }

export default mainLayout(details)(GoogleCloud)
