import { ArrowForwardIos } from '@material-ui/icons';
import Link from 'next/link';

const iconProp = { fontSize: '38px', verticalAlign: 'middle' }

const DynamicNavigation = ({ isSticky, pageDetails: { back, next, title, nextTitle } }) => {
    return (
        <>
        <div className="nav_sticky navigation-links">
            <div className="navigation-links__button">
                <Link href={back} passHref> 
                    <div>
                        <span className="navigation-links__text">
                            Back 
                        </span>
                        <span className="navigation-links__icon flip">
                            <ArrowForwardIos style={iconProp} />
                        </span> 
                    </div>
                </Link> 
            </div>           
            <div className={`navigation-links__page`}>
                <span className={!isSticky ? 'disappear' : 'appear'}>
                    {title}
                </span>
            </div>
            <div className="navigation-links__button">
                <Link  href={next} passHref> 
                <div>
                    <span className="navigation-links__text">
                        {nextTitle}
                    </span>
                    <span className="navigation-links__icon">
                        <ArrowForwardIos style={iconProp} />
                    </span> 
                </div>
                </Link>
            </div>
        </div>
        </>
    )
}

export default DynamicNavigation