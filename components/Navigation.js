import { useState, useRef, useEffect } from 'react'
import { Home, Person, Code, ContactMail, FolderOpen } from '@material-ui/icons';

const Navigation = (props) => {
    const [isSticky, setSticky] = useState(false)
    const domRef = useRef();

    useEffect(() => {
        let observer = new IntersectionObserver(function(entries) {
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
          <a className="navigation-links__button" href="#home">
            <span className="navigation-links__text">
              Home
            </span>
            <span className="navigation-links__icon">
              <Home style={{ fontSize: '4vh' }} />
            </span> 
          </a>
          <a className="navigation-links__button" href="#about">
            <span className="navigation-links__text">
              About
            </span>
            <span className="navigation-links__icon">
              <Person style={{ fontSize: '4vh' }} />
            </span> 
          </a>
          <a className="navigation-links__button" href="#skills">
            <span className="navigation-links__text">
              Skills
            </span>
            <span className="navigation-links__icon">
              <Code style={{ fontSize: '4vh' }} />
            </span> 
          </a>
          <a className="navigation-links__button" href="#projects">
            <span className="navigation-links__text">
              Projects
            </span>
            <span className="navigation-links__icon">
              <FolderOpen style={{ fontSize: '4vh' }} />
            </span>
          </a>
          <a className="navigation-links__button" href="#contact">
          <span className="navigation-links__text">
              Contact
            </span>
            <span className="navigation-links__icon">
              <ContactMail style={{ fontSize: 50 }} />
            </span>
            </a>
        </div>
        </>
    )
}

export default Navigation