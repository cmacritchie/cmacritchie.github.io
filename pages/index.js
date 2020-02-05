// import withLayout from '../HOC/withLayout'
import { useEffect, useState } from 'react'
import FadeInSection from '../HOC/fadeInSection'
import NavigationBlock from '../HOC/navigationBlocks'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navigation from '../components/Navigation'
// import style from 'next/css'
// import { useState} from 'react'
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
  const [highlighted, setHighlighted] = useState('home');

  useEffect(() => {

    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if((entry.intersectionRect.height / entry.rootBounds.height) > 0.6) {
          setHighlighted(entry.target.id)
        } 
      })
      }, {
          rootMargin: '0px 0px -60% 0px', //top, right, bottom left
          // threshold:[0.01, 0.20, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] 
          threshold:[0, 0.5, 0.1, 0.15, 0.2, 0.25, 0.4, 0.6, 0.8, 1] 
      });
      

      let elements = document.querySelectorAll('.navigation-block');

      for (let elm of elements) {
        observer.observe(elm);
      }


    return () => {
      for (let elm of elements) {
        observer.unobserve(elm);
      }
    }
  }, []);

// console.log(highlighted)

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
      {/* <NavigationBlock viewSection={(value)=>{
        if(highlightSection.section ==='home' || value > highlightSection.value )
        setHighlighted({section:'home', value})
        }}> */}
        <header className="header navigation-block" id="home">
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
        {/* </NavigationBlock> */}
        <Navigation currentTab ={highlighted} />
        <div className="body">       
          <div className={`sections navigation-block`} id="about">
            <FadeInSection>
            {/* <NavigationBlock viewSection={(value)=>{
              if(highlightSection.section ==='about' || value > highlightSection.value )
              setHighlighted({section:'about', value})
              }}> */}

            
              <DynamicAbout />
              {/* </NavigationBlock> */}
            </FadeInSection>
          </div>
          <div className={`sections navigation-block`} id="skills">
            <FadeInSection>
            {/* <NavigationBlock viewSection={(value)=>{
        if(highlightSection.section ==='skills' || value > highlightSection.value )
        setHighlighted({section:'skills', value})
        }}> */}

              <DynamicFrameworks />
              {/* </NavigationBlock> */}
            </FadeInSection>
          </div>
          <div className={`sections navigation-block`} id="projects">
            <FadeInSection>
            {/* <NavigationBlock viewSection={(value)=>{
              if(highlightSection.section ==='projects' || value > highlightSection.value )
              setHighlighted({section:'projects', value})
              }}> */}

              <DynamicProjects />
              {/* </NavigationBlock> */}
            </FadeInSection>
          </div>   
          <div className={`sections navigation-block`} id="contact">
            <FadeInSection>
            {/* <NavigationBlock viewSection={(value)=>{
            if(highlightSection.section ==='contact' || value > highlightSection.value )
              setHighlighted({section:'contact', value})
              }}>  */}

                <DynamicContact />
                {/* </NavigationBlock> */}
            </FadeInSection>
          </div>
        </div> 
        <footer className="footer">
          <div>
              <p>Home</p>
              <p>contact</p>
              <p>about</p>
              <p>projects</p>
              <p>skills</p>
          </div>
          <div>
            <p>Craig MacRitchie February 2020</p>
            <p>icons from <a className="footer__link" href="https://icons8.com/">Icons8</a></p> 
          </div>
        </footer>
      </div>
  </>
  )
}

export default HomePage