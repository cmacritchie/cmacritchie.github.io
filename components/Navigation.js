import { useState, useRef, useEffect } from 'react'
import { Home, Person, Code, ContactMail, FolderOpen } from '@material-ui/icons';

const iconProp = { fontSize: '38px', verticalAlign: 'middle' }

const Navigation = ({ currentTab }) => {
    const [isSticky, setSticky] = useState(false)
    const domRef = useRef();

    useEffect(() => {
        let observer = new IntersectionObserver(function(entries) {
          // console.log(entries[0])
            return setSticky(entries[0].intersectionRatio === 0) 
        }, {
            threshold: [0, 1]
          });
          observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
      }, []);
    return (
        <>
        <div className="#pre-navigation" ref={domRef}></div>
        <div className={`navigation-links ${isSticky ? 'nav_sticky' : 'nav_unsticky'}`}>
          <a className={`navigation-links__button ${currentTab === 'home' && 'current-tab'}`} href="#home">
            <span className="navigation-links__text">
              Home
            </span>
            <span className="navigation-links__icon">
              <Home style={iconProp} />
            </span> 
          </a>
          <a className={`navigation-links__button ${currentTab === 'about' && 'current-tab'}`} href="#about">
            <span className="navigation-links__text">
              About
            </span>
            <span className="navigation-links__icon">
              <Person style={iconProp} />
            </span> 
          </a>
          <a className={`navigation-links__button ${currentTab === 'skills' && 'current-tab'}`} href="#skills">
            <span className="navigation-links__text">
              Skills
            </span>
            <span className="navigation-links__icon">
              <Code style={iconProp} />
            </span> 
          </a>
          <a className={`navigation-links__button ${currentTab === 'projects' && 'current-tab'}`} href="#projects">
            <span className="navigation-links__text">
              Projects
            </span>
            <span className="navigation-links__icon">
              <FolderOpen style={iconProp} />
            </span>
          </a>
          <a className={`navigation-links__button ${currentTab === 'contact' && 'current-tab'}`} href="#contact">
          <span className="navigation-links__text">
              Contact
            </span>
            <span className="navigation-links__icon">
              <ContactMail style={iconProp} />
            </span>
            </a>
        </div>
        </>
    )
}

export default Navigation