// import React from 'react'
import pageLayout from '../../HOC/pageLayout'
// import "../css/style.css"

const Node = () => {
    return (
        <>
            <p>
                I started using Node.js after I became familiar with React. I liked how 
                versatile it was and how easy it was to set up a server using the 
                <strong>Express</strong> framework. 
            </p>
            <p>
                From there I started building <strong>RESTful APIs</strong> and tested my Routes
                using Postman. I found Postman really useful because you could make requests and set 
                up scripts which made testing authorized routes a lot easier. 
            </p>
            <p>
                I eventually set up authorization routes for creating users, encrypting their password using
                the bcrypt library, and storing users in a mondodb database using Mongoose ODM. users were 
                assigned JSON Web Tokens (JWT) to authorize access to protected routes. In a different project
                I used the passport.js library to leverage a google strategy allowing users to login to the application
                using google authentication. I added an extra layer of authentication to only allow users on a 
                whitelist to have login priveleges.
            </p>
            <p> 
                I really like using node and I found installing extra libraries using NPM a great tool for 
                scaffolding parts which were tricky to do.
            </p>
            <p>
                For my next steps I am hoping to use Redis-cache and further improve my knowledge of 
                route testing using JEST.
            </p>

        </>
    )
}

const details = {
    page: 'Node.js'
  }

export default pageLayout(details)(Node)
