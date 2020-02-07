// import React from 'react'
import PageLayout from '../../HOC/pageLayout'
// import "../css/style.css"

const pageDetails = {
    title: 'Node.js',
    back:'/#skills',
    next:'/framework/databases',
    nextTitle:'Databases'
  }

const Node = () => {
    return (
        <PageLayout pageDetails={pageDetails}>
            <p>
                I started using Node.js after I became familiar with React. I liked how 
                versatile it was and how easy it was to set up a server using the 
                Express framework. 
            </p>
            <p><strong>postman?</strong></p>
            <p>
                I began by building RESTful APIs and testing my Routes
                using Postman. I found Postman really useful because you could make requests and set 
                up scripts which made testing authorized routes a lot easier. 
            </p>
            <p>
                I eventually set up authorization routes for creating users, encrypting their password using
                the bcrypt library, and storing users in a mongodb database using Mongoose ODM. users were 
                assigned JSON Web Tokens (JWT) to authorize access to protected routes. In a different project
                I used the passport.js library to leverage a google strategy allowing users to login to the application
                using google authentication. I added an extra layer of authentication to only allow users on a 
                whitelist to have login priveleges.
            </p>
            <p> 
                I really like using Node and I found installing extra libraries using NPM a great tool for 
                scaffolding parts which otherwise were tricky to do. In particular, the Socket.io library made
                setting up websockets a breeze between client and server.
            </p>
            <p>
                For my next steps I am hoping to use Redis-cache and further improve my knowledge of 
                route testing using JEST.
            </p>
            <p>
                The following is a list of resources I used to Learn Node
            </p>
            <p>
                <strong>Insert Links, Node resource</strong>
            </p>
            <p>
                <strong>Projects that use Node</strong>
            </p>

        </PageLayout>
    )
}

export default Node
