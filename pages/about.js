import withLayout from '../HOC/blocksLayout'
import informationLayout from '../HOC/informationLayout';
import "../css/style.css"

const About = () => (
    <div className="content__text">
      <picture className="about-image"> 
          <source media="(max-width: 799px)" srcSet={require(`../static/better2.jpg`)} />
          <source media="(min-width: 800px)" srcSet={require(`../static/better3.jpg`)}/>  
          <img srcSet={require('../static/better3.jpg')} alt="craig macritchie" />
      </picture>
      <p>
        Hi! My name is Craig MacRitchie and I'm a full Stack developer based in Calgary.
        I enjoy working with a number of different technologies, though I have a passion 
        for working with javascript. I've worked with a number of data science technologies
        and hope to learn more in the future.  
      </p>
    </div>
  );

  const details = {
    page: 'about me'
  }


export default informationLayout(details)(About)


// backend moving towards microservices
// ide plugins
// tech:
// 80% java
// rest is GO 
// database: mongo => postgres and event source 
// event source database as a log
// event store is the database application CQRS
// backend developer

// fair amount of chain 3 layers above 
// quality of people especialy from a tech perspective

// ember 
// tight nit team 
// not tied to a team as much as the backend 