import withLayout from '../HOC/withLayout'
import welcomeLayout from '../HOC/welcomeLayout'
import Link from 'next/link';
// import style from 'next/css'

// import "../sass/main.scss"
import "../css/style.css"

// const mainStyle = style({ background: 'url(/static/bg.png) no-repeat center center scroll' })

const Welcome = () => {
  return (
    <>
      <Link href="/about">
        <a className="btn btn--white btn--animated btn__header">About</a>
      </Link>
      <Link href="/projects">
        <a className="btn btn--white btn--animated btn__header">Projects</a>
      </Link>
      <Link href="/frameworks">
        <a href="#section-tours" className="btn btn--white btn--animated btn__header">Frameworks</a>
      </Link>
      <Link href="/contact">
        <a href="#section-tours" className="btn btn--white btn--animated btn__header">Contact</a> 
      </Link> 
    </>
  );
}

export default welcomeLayout(Welcome)