import { Link } from 'react-router-dom';
import './AdminLogin.scss';
import { useEffect, useState } from 'react';

const AdminLogin = () => {

    const baseUrl = 'https://freckle-pretty-snail.glitch.me/';

    const [data, setData] = useState([]);
    
    async function getServerData(url) {
        await fetch(url + '/photos')
                     .then(res => res.json())
                     .then(res => {
                         console.log(res);
                         setData(res);
                     });
    }

    useEffect(() => {
        getServerData(baseUrl)
    }, []);

    const logIn = () => {
        data.forEach(item => {
            if (item.login === document.querySelector('.admin-login__input').value) {
                localStorage.setItem('designlogin', item.login);
                window.location = '/choose-form';
            }
        })
    }

    return (
        <div className="admin-login">
            <input type="text" className="admin-login__input" placeholder='Введите персональный код'/>
            <div onClick={logIn} className="admin-login__button">ВОЙТИ</div>
        </div>
    )
}

export default AdminLogin;