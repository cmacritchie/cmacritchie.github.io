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
                Tracker App is a MERN stack (MongoDB, Express, React-Redux, Node) project that was created to 
                track the stats of several activities. You may have heard the phrase: "If you can't measure it,
                you can't improve it". Tracker App was built so that users can track their progress and improve 
                upon it. I knew that I wanted to take some time off of work to improve my skills in a number
                of technologies and hold myself accountable for my weight, sleep, exercise and programming improvement. 
                Tracker app is a web app that tracks this information for users so that they may improve themselves.
            </p>
            <p>
                The default stats on Tracker App are my own. users can see the stats interface before creating an 
                account and potential employers can see what I've been working on since my last employment.
            </p>
            <p>
                Tracker App is my first personal MERN stack project; it was created using React-Redux on the front 
                end and Node-Express-MongoDB for the backend and database. When a user creates an account, their password
                is encrypted using the bcrypt npm package and they are given a JSON Web Token. The web token is used 
                for authenticating requests; preventing users' stats from being changed by anyone but themselves. 
            </p>
            <p>
                The application uses the Recharts library for graphing and the Materialize library for styling. It 
                isn't particularly flashy, but it acheives what it was meant to do; track stats. Now that I have 
                completed a number of courses and projects I will likely be returning to Tracker App to update it,
                add pagination and fix some bugs. 
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/cmacritchie/trackerapp">Tracker App git repository</a>
            <br />
            <a target="_blank" rel="noopener noreferrer" href="https://macritchie-tracker-app.herokuapp.com/">Visit the Tracker App website deployed on Heroku</a>
        </PageLayout>
    )
}

export default LouisRiel