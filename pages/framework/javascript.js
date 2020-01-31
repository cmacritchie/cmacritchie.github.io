// import React from 'react'
import pageLayout from '../../HOC/pageLayout'
// import "../css/style.css"

const Node = () => {
    return (
        <>
            <p>
                My Javascript carreer started off  when I learned vanilla javascript, then eventually Jquery. I really liked the 
                syntax and maleability of javascript so I decided to study other javascript libraries including React, Node.js, Next.js
                and other npm packages
            </p>
            <p>
                Recently, I started looking at data structures and algorithms by looking at stephen Griders' course on Udemy.
                I really enjoy working on MERN stack projects. 
            </p>
        </>
    )
}

const details = {
    page: 'Javascript'
  }

export default pageLayout(details)(Node)
