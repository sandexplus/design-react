import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ServiceContentTemplate from '../serviceContentTemplate/ServiceContentTemplate';
import './ServiceTemplate.scss';

const ServiceTemplate = (props) => {
    return (
        <>
        <Header/>
        <main className='main'>
            <aside className="main__menu">
                <Link className='main__link' to={'/brand'}>Брендинг</Link>
                <Link className='main__link' to={'/polygraph'}>Полиграфия</Link>
                <Link className='main__link' to={'/web-design'}>Web-дизайн</Link>
                <Link className='main__link' to={'/advertise'}>Реклама</Link>
                <Link className='main__link' to={'/social'}>Социальные сети</Link>
            </aside>
            <article className="main__content">
                <div className="main__suptitle">{props.suptitle}</div>
                <h1 className="main__title">{props.title}</h1>
                <div className="main__templates">
                    {
                        props.content.map((item, i) => {
                            const dir = i % 2 === 0 ? 0 : 1;
                            return (
                                <ServiceContentTemplate 
                                key={Math.random()}
                                dir={dir} 
                                name={item.name}
                                descr={item.descr}
                                imgs={item.imgs}/>
                            )
                        })
                    }
                </div>
            </article>
        </main>
        <Footer/>
        </>
    )
}

export default ServiceTemplate;