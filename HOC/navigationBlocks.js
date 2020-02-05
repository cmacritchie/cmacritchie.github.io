import { useState, useRef, useEffect } from 'react'

const navigationBlock = ({ viewSection, children }) => {
    // const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        // if(entries[0].isIntersecting){
            // console.log(entries[0].intersectionRatio)
            // console.log(entries[0].intersectionRatio, entries[0].isVisible )
            console.log(entries[0])
            viewSection(entries[0].intersectionRatio)
        // }
        }, {
            threshold:[0, 1]
        });

      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
      <div ref={domRef}>
        {children}
      </div>
    );
  }

export default navigationBlock