// import React from 'react'
import PageLayout from '../../HOC/pageLayout'
// import "../css/style.css"

const pageDetails = {
    title: 'Databases',
    back:'/#skills',
    next:'/framework/devops',
    nextTitle:'DevOps'
  }

const Databases = () => {
    return (
        <PageLayout pageDetails={pageDetails}>
            <p>
                My experience with relational Databases started off with SQL, learning various Create, Read, Update, Delete (CRUD)
                operations. I've used numerous SQL Database Management Systems throughout my career including MySQL, SQL, 
                some PostgreS, and some SQLite, though I've mainly used Microsoft SQL Server in a professional context
            </p>
            <p>
                I've used MongoDB for a number of my personal projects. The NoSQL, document-based database
                has helped me make projects highly scalable and agile. Aggregate operations have made it easy to 
                query multiple documents together.
            </p>
            <p>
                I have some experience with GraphQL; I'm planning on learning more in the near future and using
                Neo4j as a graph database management system.
            </p>
        </PageLayout>
    )
}

export default Databases
