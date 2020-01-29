import withLayout from '../HOC/mainLayout'
import mainLayout from '../HOC/mainLayout';
import "../css/style.css"

const About = () => (
    <div>
      <p>Hi My name is Craig This is an about me page</p>
    </div>
  );

  const details = {
    page: 'about'
  }

export default mainLayout(details)(About)