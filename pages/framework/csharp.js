// import React from 'react'
import PageLayout from '../../HOC/pageLayout'
// import "../css/style.css"

const pageDetails = {
    title: 'C#',
    back:'/#skills',
    next:'/framework/aspnet',
    nextTitle:'.NET / .NET Core'
  }

const Csharp = () => {
    return (
        <PageLayout pageDetails={pageDetails}>
            <p>
                C# was the first language that I used to create Desktop applications and was the first language
                I used to learn object oriented software development. C# is a versatile programming language that
                I've used to create command line applications, desktop applications, server applications and
                even used it in a Unity application to create a phone based VR submarine game.            
            </p>    
            <p>
                I started learning design patterns with Headfirst Design Patterns. The book uses Java as the 
                programming language so I decided to read the book and refactor the code to C#. 
                
                The github repository 
                for the C# design patterns can be found here: 
            </p>
            <p>Head first design patterns</p>
            <p>Github repository for design patterns: </p>
        </PageLayout>
    )
}



export default Csharp
