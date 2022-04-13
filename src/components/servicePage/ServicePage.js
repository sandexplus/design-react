import './ServicePage.scss';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

const ServicePage = () => {
    return (
        <>  
        <Header/>
        <main className='service'>
            <div className="service__inner">
                <Link to={'/brand'} className="service__link">Брендинг</Link>
                <Link to={'/polygraph'} className="service__link">Полиграфия</Link>
                <Link to={'/web-design'} className="service__link">Web-дизайн</Link>
                <Link to={'/advertise'} className="service__link">Реклама</Link>
                <Link to={'/social'} className="service__link">Социальные сети</Link>
            </div>
        </main>
        </>
    )
}

export default ServicePage;