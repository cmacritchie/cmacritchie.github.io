// import React from 'react'
import pageLayout from '../../HOC/pageLayout'
// import "../css/style.css"

const Node = () => {
    return (
        <>
            I've only started using Docker recently, but I can see how it can be useful for 
            devops. I've used docker to containerize a fullstack javascript project and handle
            routing using NGINX. Although I'm still getting familiar with docker, I plan on 
            becoming more familiar with it in the future. 
        </>
    )
}

const details = {
    page: 'Docker'
  }

export default pageLayout(details)(Node)
