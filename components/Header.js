import Link from 'next/link';


const Header = () => (
  <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
    
    <label  className="navigation__button">
      <span className="navigation__icon">&nbsp;</span>
    </label>

    <div className="navigation__background">&nbsp;</div>

    <nav className="navigation__nav">
      <ul className="navigation__list">
          <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>About Natous</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Your benfits</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Popular tours</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Stories</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Book now</a></li>
      </ul>
    </nav>
    
    
    {/* <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link> */}
  </div>
);

export default Header;