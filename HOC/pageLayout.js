import { useState, useRef, useEffect } from 'react'
import "../css/style.css"
import DynamicNavigation from "../components/DynamicNavigation"


const PageLayout = ({ children, pageDetails }) => {
    const [isSticky, setSticky] = useState(false)
    const domRef = useRef();

    useEffect(() => {
        let observer = new IntersectionObserver(function(entries) {
            return setSticky(entries[0].intersectionRatio === 0) 
        }, {
            threshold: [0, 1],
            rootMargin: '-56px 0px 0px 0px' //top, right, bottom left
          });
          observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
      }, []);

    return (

        <div className="">
            <DynamicNavigation pageDetails={pageDetails} isSticky={isSticky} />
            <div className="#pre-navigation" ref={domRef}></div>
            <div className="headster">
                <h1 className={`headster__text-box ${isSticky ? 'disappear' : 'appear'}`}>{pageDetails.title}</h1>
                <div className="underline"></div>
            </div>
            <div className="page-container">
                <div className="content">
                    { children }
                </div>
                
            </div>
        </div>
    )
}

export default PageLayout