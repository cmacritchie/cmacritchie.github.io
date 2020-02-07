import PageLayout from '../../HOC/pageLayout'


const pageDetails = {
    title: 'Tracker App',
    back:'/#projects',
    next:'/project/irrigation',
    nextTitle:'Home Irrigation'
  }

const LouisRiel = () => {
    return (
        <PageLayout pageDetails={pageDetails}>
            <p>
                Tracker App      
            </p>    
        </PageLayout>
    )
}

export default LouisRiel