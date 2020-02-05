// import React from 'react'
import pageLayout from '../../HOC/pageLayout'
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

export default pageLayout(details)(GoogleCloud)
