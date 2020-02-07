// import React from 'react'
import PageLayout from '../../HOC/pageLayout'
// import "../css/style.css"
const pageDetails = {
    title: 'Javascript',
    back:'/#skills',
    next:'/framework/react',
    nextTitle:'React / Redux'
  }

const Javascript = () => {
    return (
        <PageLayout pageDetails={pageDetails}>
            <p>
                My Javascript carreer started off  when I learned vanilla javascript, then eventually moved to JQuery. I really liked the 
                syntax and maleability of javascript so I decided to study other javascript libraries including React, Node.js, Next.js
                among other npm packages
            </p>
            <p>
                Recently, I started looking at data structures and algorithms by looking at stephen Griders' course on Udemy.
                I enjoy working on MERN stack projects and trying out new libraries.  
            </p>
            <p>
                I am familiar with ES6 syntax and currently learning more about ES7. 
            </p>
        </PageLayout>
    )
}

export default Javascript
