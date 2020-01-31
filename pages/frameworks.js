import withLayout from '../HOC/mainLayout'
import mainLayout from '../HOC/mainLayout';
import fadeInSection from '../HOC/fadeInSection';
import "../css/style.css"
import frameworks from '../icons/frameworks'
import Link from 'next/link';

const Frameworks = () => {

    const prepareframeworks = () => {
        return frameworks.map(item => {
            return (
                <Link key={item.title} href={`/framework/${item.link}`} passHref>
                    <div className="feature-box" >                  
                        <div>
                        <h3>{item.title}</h3>  
                        <picture className="feature-box__image">
                        <img src={require(`../static/icons/${item.icon}`)} />
                        </picture>
                            <p className="feature-box__description">{item.description}</p>
                        </div>
                    </div>
                </Link>
            )
        })
    }

return (
    <div className="modules">
      {prepareframeworks()}
    </div>
  );
}
  const details = {
    page: 'Skills'
  }

export default mainLayout(details)(Frameworks)
// export default fadeInSection(Frameworks)