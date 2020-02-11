import withLayout from '../HOC/blocksLayout'
import informationLayout from '../HOC/informationLayout';
import "../css/style.css"

const About = () => (
    <div className="content__text">
      <picture className="about-image"> 
          <source media="(max-width: 799px)" srcSet={require(`../assets/better2.jpg`)} />
          <source media="(min-width: 800px)" srcSet={require(`../assets/better3.jpg`)}/>  
          <img srcSet={require('../assets/better3.jpg')} alt="craig macritchie" />
      </picture>
      <p>
        Hi! My name is Craig MacRitchie and I'm a full stack developer & data scientist 
        based in Calgary, Alberta. I enjoy working with new technologies, building applications, and
        attending software meetups. I'm currently looking for new opportunities and looking 
        forward to working on new projects.  
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