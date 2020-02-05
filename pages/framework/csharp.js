// import React from 'react'
import pageLayout from '../../HOC/pageLayout'
// import "../css/style.css"

const Csharp = () => {
    return (
        <>
            <p>
               C# was the first language that I used to create Desktop applications and was the first language
                I used for object oriented software development. I've used it to 
               create command line appliactions to varios SQL procedures and created numerous desktop applications.

               I've used C# professionaly in ASP.Net and .Net Core Applications               
            </p>     
            <p>
                I started learning design patterns when I read Headfirst Design Patterns. The book uses Java as the 
                programming language so I decided to read the book and refactor the code to C#. The github repository 
                for the C# design patterns can be found here: <strong>Head first design patterns</strong>
            </p>
        </>
    )
}

const details = {
    page: 'C#'
  }

export default pageLayout(details)(Csharp)
