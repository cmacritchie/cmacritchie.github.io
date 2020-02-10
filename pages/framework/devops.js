// import React from 'react'
import PageLayout from '../../HOC/pageLayout'
// import "../css/style.css"
const pageDetails = {
    title: 'DevOps',
    back:'/#skills',
    next:'/framework/python',
    nextTitle:'Python'
  }

const DevOps = () => {
    return (
        <PageLayout pageDetails={pageDetails}>
            <p>
                In 2019 after putting together a couple of projects I learned about DevOps and how it can 
                expedite repetitive tasks, shorten systems development life cycle, and provide solid
                software quality with continuous delivery.
            </p>
            <p>
                Agile Software development and DevOps are two methodologies that go hand in hand to deliver quality software.
                Professionally, I have worked in a Agile software environment where we would conduct daily scrums, two
                week sprints, and code reviews. JIRA software was used to track issues throughout the development process
            </p>
            <p>
                I use git and github which aligns with the majority of developers who use source control and
                online repository solutions. Professionally, I have used Azure DevOps to build, test, conduct pull 
                request, and deploy code with Continuous Intergration (CI) and Continuous Deployment (CD) pipelines.
            </p>
            <p>
                In early 2020, I began exploring Docker and DockerHub. I created containers for front-end UI servers and
                backend Node.js Servers and used an NGINX to route requests to the backend and front end servers. Next I used
                Travis CI to set up a continuous integration pipeline. 
            </p>
            <p>
                Although, I am not an expert in DevOps, I aspire to learn more and have made improving DevOps 
                practices my primary goal for 2020. 
            </p>
        </PageLayout>
    )
}

const details = {
    page: 'Docker'
  }

export default DevOps
