// import withLayout from '../HOC/withLayout'
import FadeInSection from '../HOC/fadeInSection'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navigation from '../components/Navigation'
// import style from 'next/css'

// import "../sass/main.scss"
import "../css/style.css"

// import Frameworks from 
// import Projects from "./projects"

const DynamicAbout = dynamic(() => import("./about"))
const DynamicFrameworks = dynamic(() => import("./frameworks"))
const DynamicProjects = dynamic(() => import("./projects"))
const DynamicContact = dynamic(()=>import("./contact"))



// const mainStyle = style({ background: 'url(/static/bg.png) no-repeat center center scroll' })

const HomePage = () => {
  return (
      <>
      <style jsx>{`
      .header {
        height: 90vh;
        background-image: linear-gradient(
          
          rgba(30, 144, 255, 0.5),
          rgba(3, 37, 69, 0.5)
          ),
          url(../../static/mountain2.jpg);
        background-repeat: repeat-x; 
        background-size: cover;
        background-position: left;
        position: relative; 

      }
    }

    @media screen and (max-width: 700px) {
      .header{
        background-position: center;
          background-image: linear-gradient(
              rgba(130, 201, 228, 0.5),
              rgba(30, 144, 255, 0.5)
              ),
              url(../../static/mountain2_phone.jpg);
      }
    }
    `}</style>
      <div className="container">
        <header className="header" id="home">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Craig MacRitchie</span>
              <div className="heading-primary--container">
                <div className="heading-primary--sub heading-primary--sub--1">Full-Stack Developer</div>
                <div className="heading-primary--sub heading-primary--sub--2">Data Scientist</div>
                <div className="heading-primary--sub heading-primary--sub--3">Engineer in Training</div>
              </div>
            </h1> 
          </div>   
        </header>
        <Navigation />
        <div className="body">       
          <div className="sections" id="about">
            <FadeInSection>
              <DynamicAbout />
            </FadeInSection>
          </div>
          <div className="sections" id="skills">
            <FadeInSection>
              <DynamicFrameworks />
            </FadeInSection>
          </div>
          <div className="sections" id="projects">
            <FadeInSection>
              <DynamicProjects />
            </FadeInSection>
          </div>   
          <div className="sections" id="contact">
            <FadeInSection>
                <DynamicContact />
            </FadeInSection>
          </div>
        </div> 
        <footer>
          Thanks to <a href="https://icons8.com/">Icons8 </a>for supplying icons 
        </footer>
      </div>
  </>
  )
}

export default HomePage