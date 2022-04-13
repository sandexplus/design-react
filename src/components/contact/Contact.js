import './Contact.scss';
import { Link } from 'react-router-dom';

const Contact = () => { 
    return (
        <div className="contact">
            <Link to="/communicate" className="contact__btn">
                Связаться с нами
            </Link>
        </div>
    )
}

export default Contact;