// import React from 'react'
import PageLayout from '../../HOC/pageLayout'

const pageDetails = {
    title: 'React / Redux',
    back:'/#skills',
    next:'/framework/node',
    nextTitle:'Node.js'
  }

const reactRedux = () => {
    return (
        <PageLayout pageDetails={pageDetails}>
            <p>
                When I started my programming career I learned HTML and interacting with the DOM using 
                vanilla javascript and JQuery. I heard about the benefits of React and 
                decided to explore the framework. After taking a variety of courses, I can attest to the 
                scalability and flexibility of React and currently use it as my go-to framework for building 
                interactive UIs.
            </p>
            <p>
                For larger projects I've used Redux for state-management; however, I've found the 
                context API to be a very useful tool and have used it on a couple of small projects.
                For next steps in state management, I plan on using Apollo Client with GraphQL.
            </p>
            <p>
                Fortunately React is very familiar to React Native. Though I've 
                only created a couple of small react-native test projects, I'm hoping to create a production
                version application in the future.
            </p>
            <p>
                My additional experience with React includes working with websockets with Socket.io, higher
                order components, and Next.js for Server Side Rendered applications (SSR) to increase Search 
                engine optimization (SEO)
            </p>
            <p>
                the following is a list of resources I have used to learn React:
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/react-redux/">Modern React with Redux</a>
                <br />
            <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/react-redux-tutorial/">Advanced React and Redux</a>
                <br />
            <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/node-with-react-fullstack-web-development/">Node with React: Fullstack Web Development</a>
                <br />
            <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/mern-stack-front-to-back/">MERN Stack Front To Back: Full Stack React, Redux & Node.js</a>
                <br />
            <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/the-complete-react-native-and-redux-course/">The Complete React Native + Hooks Course</a>
                <br />
            <a target="_blank" rel="noopener noreferrer" href="https://www.udacity.com/course/react-nanodegree--nd019">Udacity React nanodegree</a>

            

            
        </PageLayout>
    )
}

const details = {
    page: 'react & Redux'
  }

export default reactRedux
