import withLayout from '../HOC/informationLayout'
import blocksLayout from '../HOC/blocksLayout';
import FadeInSection from '../HOC/fadeInSection';
import "../css/style.css"
import frameworks from '../icons/frameworks'
import Link from 'next/link';

const Frameworks = () => {

    const prepareframeworks = () => {
        return frameworks.map(item => {
            return (
              <FadeInSection key={item.title}>
                <Link href={`/framework/${item.link}`} passHref>
                    <div className="feature-box" >                  
                        <div>
                        <h3>{item.title}</h3>  
                        <picture className="feature-box__image">
                        <img src={require(`../assets/icons/${item.icon}`)} />
                        </picture>
                            <p className="feature-box__description">{item.description}</p>
                        </div>
                    </div>
                </Link>
              </FadeInSection>
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

export default blocksLayout(details)(Frameworks)
// export default fadeInSection(Frameworks)