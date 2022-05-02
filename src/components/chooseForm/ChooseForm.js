import { Link } from 'react-router-dom';
import './ChooseForm.scss';

const ChooseForm = () => {
    return (
        <div className="choose-page">
            <h1 className="choose-title">Выберите блок с работами</h1>
            <div className="choose__container">
                <Link to={'/add-project1'} className="choose__item choose__item-first">
                    <div className="choose__block"></div>
                    <div className="choose__block"></div>
                    <div className="choose__block"></div>
                </Link>
                <Link to={'/add-project2'} className="choose__item choose__item-second">
                    <div className="choose__block"></div>
                    <div className="choose__block"></div>
                </Link>
                <Link to={'/add-project3'} className="choose__item choose__item-third">
                    <div className="choose__block"></div>
                    <div className="choose__block"></div>
                    <div className="choose__block"></div>
                </Link>
            </div>
        </div>
    )
}

export default ChooseForm;