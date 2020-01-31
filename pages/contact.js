import withLayout from '../HOC/mainLayout'
import mainLayout from '../HOC/mainLayout';
import { LinkedIn, GitHub, MailOutline } from '@material-ui/icons';
import "../css/style.css"

const Contact = () => (
    <div>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/craig-macritchie/">
            <LinkedIn style={{ fontSize: 50 }} />
          </a>
          <a href="https://github.com/cmacritchie">
            <GitHub style={{ fontSize: 50 }} />
          </a>
          <a href="mailto:craig.macritchie@gmail.com?subject=Portfolio website">
            <MailOutline style={{ fontSize: 50 }} />
          </a>
        </div>
        <p className="content__text">
          If you have any questions or comments please
          contact me, I'm always looking to improve!
        </p>
    </div>
  );

  const details = {
    page: 'contact'
  }

export default mainLayout(details)(Contact)