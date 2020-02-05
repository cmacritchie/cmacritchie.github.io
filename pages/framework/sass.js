// import React from 'react'
import pageLayout from '../../HOC/pageLayout'
// import "../css/style.css"

const Sass = () => {
    return (
        <>
            <p>
                In the past I've used numerous styling libraries including boostrap, Material-UI, and Materialize. Styling was
                an after thought most of the time when developing applications. Recently I took a couple of courses to learn
                styling using CSS3 and SASS. Though I'm not an expert at styling and design, I hope to improve and use SASS in upcoming
                projects.
            </p>
        </>
    )
}

const details = {
    page: 'CSS3 & SASS'
  }

export default pageLayout(details)(Sass)
