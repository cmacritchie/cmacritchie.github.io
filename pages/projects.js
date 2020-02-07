import FadeInSection from '../HOC/fadeInSection';
import blocksLayout from '../HOC/blocksLayout';
import "../css/style.css"
import projects from '../icons/projects'
import Link from 'next/link';
// require('../static/Louis_Riel.jpg')

const Projects = () => {

    const prepareProjects = () => {
        return projects.map(item => {
            return (
                <FadeInSection key={item.title}>
                    <Link href={`/project/${item.link}`} passHref>
                        <div className="feature-box" >                  
                            <div>
                                <h3>{item.title}</h3>
                                
                                <picture className="feature-box__image"> 
                                    {/* <source media="(max-width: 799px)" srcSet={require(`../static/thumbnails/${item.thumbnailSmall}`)} />
                                    <source media="(min-width: 800px)" srcSet={require(`../static/thumbnails/${item.thumbnailLarge}`)}/> */}
                                    <img srcSet={require(`../static/thumbnails/${item.thumbnailSmall}`)} alt="louis riel" />
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
      {prepareProjects()}
    </div>
  );
}
  const details = {
    page: 'projects'
  }

export default blocksLayout(details)(Projects)