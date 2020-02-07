// import React from 'react'
import PageLayout from '../../HOC/pageLayout'
// import "../css/style.css"

const pageDetails = {
    title: 'ASP.NET /.NET Core',
    back:'/#skills',
    next:'/framework/styleSheets',
    nextTitle:'Style Sheets'
  }

const AspNet = () => {
    return (
        <PageLayout pageDetails={pageDetails}>
            <p>
                ASP.NET MVC (Model View Controller) is the first web application framework I used to maintain 
                a full stack application in a professional setting. The front end used HTML, Bootstrap 3. JQuery, and
                Razor Pages. On the backend there were Routes written in C# and used entity framework ORM to interact
                with the SQL database.  
            </p>
            <p>
                In 2018 the aforementioned ASP.NET application was using some older and outdated technology, prompting the 
                codebase to be refactored to .NET Core with a React-Redux front end. The application had a focus on
                responsive web design, and used Azure active directory to whitelist employees and EntityFrameworkCore
                ORM. Testing was completed using XUnit.et which helped catch failing broken unit tests when running integration with Azure DevOps. 
            </p>
        </PageLayout>
    )
}

export default AspNet
