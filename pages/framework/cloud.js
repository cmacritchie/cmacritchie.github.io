// import React from 'react'
import PageLayout from '../../HOC/pageLayout'
// import "../css/style.css"

const pageDetails = {
    title: 'Cloud Technologies',
    back:'/#skills',
    next:'/framework/javascript',
    nextTitle:'Javascript'
  }

const Cloud = () => {
    return (
        <PageLayout pageDetails={pageDetails}>
            <p>
                I began working with Microsoft Azure in a professional setting when I used Azure Active Directory to create
                a small application that required Authorized routes limited to users in the Directory. I also used Azure to 
                perform database backups and attach a Salesforce application to a relay to interact with
                a SQL database.
            </p>
            <p>
                I've poked around the features of AWS and checked out a few of the services. Notably, I used AWS Lambda to 
                create a serverless application with the Pokemon API to create a pokedex on the Amazon Echo.
            </p>
            <p>
                I am currently working on Google cloud and Firebase tutorials and hope to accomplish the Google Cloud Engineer
                Certification before 2021.
            </p>
        </PageLayout>
    )
}



export default Cloud
