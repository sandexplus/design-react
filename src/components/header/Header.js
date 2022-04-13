import './Header.scss';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../assets/img/btnLogo.svg';
import HeaderMenu from '../../assets/img/btnMenu.png';
import HeaderLogo_black from '../../assets/img/btnLogo_black.svg';
import HeaderClose from '../../assets/img/btnClose.svg';

const Header = () => {

    const openCloseMenu = () => {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('menu_show');
        if (menu.classList.contains('menu_show')) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'scroll';
        }
        
    }

    return (
        <header className='header'>
            <div className="header__shadow"></div>
            <div className="header__inner">
                <Link to='/' onClick={document.body.style.overflowY = 'scroll'} className="header__link">
                    <img src={HeaderLogo} alt="Logo" />
                </Link>
                <button onClick={openCloseMenu} className="header__burger">
                    <img src={HeaderMenu} alt="Menu" />
                </button>
            </div>
            <div className="menu">
                <div className="menu__header">
                    <Link to='/' onClick={document.body.style.overflowY = 'scroll'} className="menu__logo">
                        <img src={HeaderLogo_black} alt="Logo" />
                    </Link>
                    <button onClick={openCloseMenu} className="menu__close">
                        <img src={HeaderClose} alt="Menu" />
                    </button>
                </div>
                <div className="menu__inner">
                    <div className="menu__item">
                        <Link to={'/service'} className="menu__link">Услуги</Link>
                        <Link to={'/communicate'} className="menu__link">Оставить заявку</Link>
                    </div>
                    <div className="menu__item">
                        <div className="menu__top">
                            <div className="menu__title">SMRQ</div>
                            <div className="menu__descr">Это студия дизайна и брендинга
                            <br></br>Уже 3 года мы погомаем нашим клиентам увеличивать показатели их бизнесов, потому что ко всем задачам мы подходим осмысленно и со вкусом</div>
                        </div>
                        <div className="menu__mid">
                            <div className="menu__title">Контакты</div>
                            <a href='#' className="menu__mail">smrq.studio@gmail.com</a>
                            <a href="#" type='tel' className="menu__tel">8 999 453 52 23</a>
                        </div>
                        <div className="menu__bot">
                            <a href="#" className="menu__social">
                                <img src="" alt="Vk" />
                            </a>
                            <a href="#" className="menu__social">
                                <img src="" alt="WhatsApp" />
                            </a>
                            <a href="#" className="menu__social">
                                <img src="" alt="Telegram" />
                            </a>
                            <a href="#" className="menu__social">
                                <img src="" alt="Viber" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;