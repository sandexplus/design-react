import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer__main">
            <div className="footer__main__title">Если вы не нашли нужную услугу, свяжитесь с нами</div>
            <Link className='footer__main__btn' to={'/communicate'}>Связаться</Link>
        </footer>
    )
}

export default Footer;