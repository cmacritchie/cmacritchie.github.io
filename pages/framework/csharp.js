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
                I used to learn object oriented software development. I've created command line applications, 
                desktop applications, server applications and even used it in a Unity application to create 
                a phone based VR submarine game.            
            </p>    
            <p>
                I started learning design patterns with Headfirst Design Patterns. The book uses Java as the 
                programming language so I decided to read the book and refactor the code to C#. 
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/cmacritchie/design-patterns">Head First Design Patterns in C# github</a>
        </PageLayout>
    )
}



export default Csharp
