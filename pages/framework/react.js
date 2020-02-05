// import React from 'react'
import pageLayout from '../../HOC/pageLayout'
// import "../css/style.css"

const Node = () => {
    return (
        <>
            <p>
                After learning HTML and interacting with the DOM using vanilla javascript and JQuery,
                I decided to learn React as I heard it was great for code reuse and scailability.

                I took a couple of courses and found that I really enjoyed working with React and 
                use it as my go-to framework for building interactive UIs. 
            </p>
            <p>
                For larger projects I've used Redux for state-management; however, I've found the 
                context API to be a very useful too and have used it on a couple of small projects.
            </p>
            <p>
                making dynamic websites has been really easy with React; I've also found that the 
                ability to make higher Order components to be really useful to include additional functionality
                to components.
            </p>
            <p>
                The nice thing about React is that it is very familiar to React Native. Though I've 
                only created a couple of small react-native test projects, I'm hoping to create a production
                version application in the future.
            </p>
        </>
    )
}

const details = {
    page: 'react & Redux'
  }

export default pageLayout(details)(Node)
