import withLayout from '../HOC/informationLayout'
import informationLayout from '../HOC/informationLayout';
import { LinkedIn, GitHub, MailOutline } from '@material-ui/icons';
import "../css/style.css"

const iconProp = { fontSize: '50px', verticalAlign: 'middle' }

const Contact = () => (
    <div className="content__text about-content">
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/craig-macritchie/">
            <LinkedIn style={iconProp} />
          </a>
          <a href="https://github.com/cmacritchie">
            <GitHub style={iconProp} />
          </a>
          <a href="mailto:craig.macritchie@gmail.com?subject=Portfolio website">
            <MailOutline style={iconProp} />
          </a>
        </div>
        <p>
          If you have any questions or comments please
          contact me, I'm always looking to improve!
        </p>
        <br />
        <br />
        <h3>I am currently working on:</h3>
        <h2>DevOps</h2>
    </div>
  );

  const details = {
    page: 'contact'
  }

export default informationLayout(details)(Contact)