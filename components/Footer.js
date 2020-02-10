import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__links">
            <Link href="/#home" passHref>
                <a>
                    Home
                </a>    
            </Link>
            <Link href="/#about" passHref>
                <a>
                    About
                </a>
            </Link>
            <Link href="/#skills" passHref>
               <a>
                    Skills
               </a>
            </Link>
            <Link href="/#projects" passHref>
               <a>
                    Projects
               </a>
            </Link>
            <Link href="/#contact" passHref>
                <a>
                    Contact
                </a>    
            </Link>
            </div>
            <div>
                <p>Craig MacRitchie February 2020</p>
                <p>icons from <a className="footer__link" href="https://icons8.com/">Icons8</a></p> 
            </div>
        </footer>
    )
}

export default Footer