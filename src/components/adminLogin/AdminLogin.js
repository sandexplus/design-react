import { Link } from 'react-router-dom';
import './AdminLogin.scss';

const AdminLogin = () => {
    return (
        <div className="admin-login">
            <input type="text" className="admin-login__input" placeholder='Введите персональный код'/>
            <Link to={'/choose-form'} className="admin-login__button">ВОЙТИ</Link>
        </div>
    )
}

export default AdminLogin;