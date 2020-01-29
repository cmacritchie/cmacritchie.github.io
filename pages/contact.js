import withLayout from '../HOC/mainLayout'
import mainLayout from '../HOC/mainLayout';
import "../css/style.css"

const Contact = () => (
    <div>
      <p>Hi My name is Craig This is a contact me page</p>
    </div>
  );

  const details = {
    page: 'contact'
  }

export default mainLayout(details)(Contact)