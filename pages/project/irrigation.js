import PageLayout from '../../HOC/pageLayout'


const pageDetails = {
    title: 'Home Irrigation',
    back:'/#projects',
    next:'/project/louisRiel',
    nextTitle:'Louis Riel Houses'
  }

const LouisRiel = () => {
    return (
        <PageLayout pageDetails={pageDetails}>
            <p>
                Home irrigation       
            </p>    
        </PageLayout>
    )
}

export default LouisRiel