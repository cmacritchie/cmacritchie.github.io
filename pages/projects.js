import withLayout from '../HOC/mainLayout'
import mainLayout from '../HOC/mainLayout';
import "../css/style.css"
import projects from '../icons/projects'
import Link from 'next/link';
// require('../static/Louis_Riel.jpg')

const Projects = () => {

    const prepareProjects = () => {
        return projects.map(item => {
            return (
                <Link key={item.title} href={`/project/${item.link}`} passHref>
                    <div className="feature-box" >                  
                        <div>
                            <h3>{item.title}</h3>
                            
                            <picture className="feature-box__image"> 
                                <source media="(max-width: 799px)" srcSet={require(`../static/thumbnails/${item.thumbnailSmall}`)} />
                                <source media="(min-width: 800px)" srcSet={require(`../static/thumbnails/${item.thumbnailLarge}`)}/>
                                <img srcSet={require('../static/thumbnails/Louis_Riel1.jpg')} alt="louis riel" />
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
      {prepareProjects()}
    </div>
  );
}
  const details = {
    page: 'projects'
  }

export default mainLayout(details)(Projects)