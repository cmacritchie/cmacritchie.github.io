
import PageLayout from '../../HOC/pageLayout'


const pageDetails = {
    title: 'Louis Riel Houses',
    back:'/#projects',
    next:'/project/scraping',
    nextTitle:'Sedi Web Scraping'
  }

const LouisRiel = () => {
    return (
        <PageLayout pageDetails={pageDetails}>
            <p>
                The Louis Riel House application is a volounteer project for the Louis Riel School in Calgary Alberta.
                The project is meant to be similar to the house system in the Harry Potter books. Teachers login to the
                application using their google account and are authenticated by google Oauth2. An admin user can grant
                or restrict site access to users by whitelisting email addresses or deleting accounts.
            </p>
            <p>  
                Once authenticated, teachers can award points to houses when a student of that house performs a 
                note-worthy action such as answering a question correctly, performing well on a test, doing a good deed. 
                Teachers can update / delete their awarded points while admin users can delete anyone's points   
            </p>    
            <p>
                React, using the Context API, compose the front-end portion of this application. The Socket.IO client library
                is used so that viewers get a live update when house points are awarded. Higher Order Components are used for 
                route handling when a user doesn't have sufficient priveleges. 
            </p>
            <p>
                Node.js, Express and MongoDB form the back end of this application. Middleware was used in this application to
                authenticate user Roles, while Google strategy with Passport.js was selected to verify and add users with emails
                that had been whiteListed. 
            </p>
            <p>
                <b>take a look at the source code HERE</b>
            </p>
        </PageLayout>
    )
}

export default LouisRiel