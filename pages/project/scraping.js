import PageLayout from '../../HOC/pageLayout'


const pageDetails = {
    title: 'Sedi Web Scraping',
    back:'/#projects',
    next:'/project/tracker',
    nextTitle:'Tracker App'
  }

const LouisRiel = () => {
    return (
        <PageLayout pageDetails={pageDetails}>
            <p>
                For my application to Mawer Investment Management I was given a programming challenge as part of
                my interview process. The challenge was to get all the Insider information from the SEDI website
                (System for Electronic Disclosure by Insiders). 
            </p>
            <p>
                After doing some research (SEDI doesn't have any external APIs), I chose Python and the 
                'Beautiful Soup' library to conduct the web scraping. 
            </p> 
            <p>
                Retrieving the information I needed was a little tricky because SEDI doesn't contain pagination and 
                there is no set url for beginning the HTML parsing. I ended up taking a SEDI network request and modifying 
                it using Postman to understand how the SEDI website grabbed information. If too many insiders were returned,
                the request would fail causing another problem. After understanding how the queries worked
                I was able to set up a script that would iterate through all the records while throttling the requests to
                prevent failure.    
            </p>    
            <p>
                While taking a look at the site through Chrome Devtools I noticed that many of the table rows and cells that 
                needed to be scrapped didn't contain any identifying attributes besides the width. This caused a headache, but
                it was still manageable. after the records had been scrapped from the page, they were inserted into a MySQL 
                database for further querying. 
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/cmacritchie/sediscraping">SEDI web scraping git repository</a>
        </PageLayout>
    )
}

export default LouisRiel