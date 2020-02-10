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
            <p>
                I began by building RESTful APIs and testing my Routes
                using Postman. Postman is a useful tool because you can make requests and set 
                up scripts to make testing authorized routes easier. 
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
                I enjoy developing Node applications and installing extra libraries using NPM a great tool for 
                scaffolding segments within projects. In particular, the Socket.io library made
                setting up websockets a breeze between client and server.
            </p>
            <p>
                For my next steps I am hoping to use Redis-cache and further improve my knowledge of 
                route testing using JEST.
            </p>
            <p>
                the following is a list of resources I have used to learn Node:
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/">The Complete Node.js Developer Course</a>
                <br />
            <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/advanced-node-for-developers/">Node JS: Advanced Concepts</a>
                <br />
            <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/node-with-react-fullstack-web-development/">Node with React: Fullstack Web Development</a>
                <br />
            <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/mern-stack-front-to-back/">MERN Stack Front To Back: Full Stack React, Redux & Node.js</a>
                

            

        </PageLayout>
    )
}

export default Node
