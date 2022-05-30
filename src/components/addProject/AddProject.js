import { useEffect, useState } from 'react';
import './AddProject.scss';

const AddProject = (props) => {

    const baseUrl = 'https://cloudy-foam-airport.glitch.me';

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
        if (localStorage.getItem('designlogin') === '') {
            window.location = '/admin';
        }
        getServerData(baseUrl)
    }, []);


    const relocateBack = () => {
        window.location.href = '/choose-form';
    }

    const closePopup = (e) => {
        e.target.parentElement.parentElement.parentElement.classList.remove('popup_show')
    }

    async function putData(url, data) {
        console.log(data)
        const rawResponse = await fetch(url, {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(content => {
            console.log(content);
        })
        
    }

    const addMorePics = (e) => {
        const picsCont = document.querySelector(`.add__photos[data-pos="${e.target.dataset.btn}"]`);
        
        const newTextArea = document.createElement('textarea');
        newTextArea.classList.add('add__input-name');
        newTextArea.placeholder = "Фотографи проекта";
        newTextArea.setAttribute('name', 'preview');
        newTextArea.dataset.photo = e.target.dataset.btn;
        picsCont.append(newTextArea);
    }

    const createProj = (name, photo, preview, num) => {
        const proj = {};
        name.forEach(names => {

            if (+names.dataset.name === num) {
                proj.name = names.value;
            }
        })
        photo.forEach(photos => {
            console.log(photos)
            if (+photos.dataset.preview === num) {
                proj.photo = photos.value;
            }
        })
        proj.preview = [];
        preview.forEach(previews => {
            if (+previews.dataset.photo === num) {
                proj.preview.push(previews.value);
            }
        })

        return proj;
    }

    const saveProj = (e) => {
        e.preventDefault();
        const name = document.querySelectorAll(`[data-name]`);
        const photo = document.querySelectorAll(`[data-preview]`);
        const preview = document.querySelectorAll(`[data-photo]`);
        let newData = data;
        let id = 0;

        data.forEach((item, i) => {
            if (item.login === localStorage.getItem('designlogin')) {
                const proj = [];
                id = item.id;
                proj.push(createProj(name, photo, preview, 1));
                proj.push(createProj(name, photo, preview, 2));
                proj.push(createProj(name, photo, preview, 3));
                newData[i].works.push(proj);
                console.log(newData);
            }
        })
        let dataToPut;
        newData.forEach((item, i) => {
            if (item.login === localStorage.getItem('designlogin')) {
                dataToPut = newData[i];
            }
        })
        

        setData(newData);
        putData(`${baseUrl}/photos/${id}`, dataToPut)
    }

    const openPopup = () => {
        document.querySelector('.popup-save').classList.add('popup_show');
    }
 
    return (
        <div className="add-page">
            <h1 className="choose-title">Загрузите файлы и дайте названия проектам</h1>
            <div onClick={() => document.querySelector('.popup-back').classList.add('popup_show')} className="add__back">
            <svg width="37" height="22" viewBox="0 0 37 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="33" y="9" width="4" height="4" fill="#978F7F"/>
                <rect x="5" y="9" width="24" height="4" fill="#978F7F"/>
                <rect width="15.6982" height="3.92456" transform="matrix(0.713441 0.700716 -0.713441 0.700716 2.7998 8.25)" fill="#978F7F"/>
                <rect width="15.6982" height="3.92456" transform="matrix(0.713441 -0.700716 0.713441 0.700716 0 11)" fill="#978F7F"/>
                <rect x="33" y="9" width="4" height="4" fill="#978F7F"/>
                <rect x="5" y="9" width="28" height="4" fill="#978F7F"/>
                <rect width="15.6982" height="3.92456" transform="matrix(0.713441 0.700716 -0.713441 0.700716 2.7998 8.25)" fill="#978F7F"/>
                <rect width="15.6982" height="3.92456" transform="matrix(0.713441 -0.700716 0.713441 0.700716 0 11)" fill="#978F7F"/>
            </svg>
            </div>
            <div className="popup popup-back">
                <div className="popup-container">
                    <div className="popup-title">Вы точно хотите вернуться назад?<br></br>Все изменения будут сброшены</div>
                    <div className="popup-btns">
                        <div className="popup-btn" onClick={relocateBack}>Да</div>
                        <div className="popup-btn" onClick={(e) => closePopup(e)}>Отмена</div>
                    </div>
                </div>
            </div>
            <div className="popup popup-save">
                <div className="popup-container">
                    <div className="popup-title">Сохранить?</div>
                    <div className="popup-btns">
                        <div className="popup-btn" onClick={saveProj}>Да</div>
                        <div className="popup-btn" onClick={(e) => closePopup(e)}>Отмена</div>
                    </div>
                </div>
            </div>
            <div className="choose__container">
                {props.type === '1' ?
                <>
                <div className="choose__item choose__item-first">
                    <label className="choose__block">
                        <input data-number='0' type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                    <label className="choose__block">
                        <input data-number='1' type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                    <label className="choose__block">
                        <input data-number='2' type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                </div>  
                <div className="add__inputs">
                    <textarea data-name="1" maxLength={45} name="name" placeholder="Название" type="text" className="add__input-name" />
                    <textarea data-name="2" maxLength={45} name="name" placeholder="Название" type="text" className="add__input-name" />
                    <textarea data-name="3" maxLength={45} name="name" placeholder="Название" type="text" className="add__input-name" />
                </div>
                <div className="add__inputs">
                    <textarea data-preview="1" name="photo" placeholder="Фото для превью" type="text" className="add__input-name" />
                    <textarea data-preview="2" name="photo" placeholder="Фото для превью" type="text" className="add__input-name" />
                    <textarea data-preview="3" name="photo" placeholder="Фото для превью" type="text" className="add__input-name" />
                </div>
                <div className="add__inputs">
                    <div data-pos="1" className="add__photos">
                        <textarea data-photo="1" name="preview" placeholder="Фотографи проекта" type="text" className="add__input-name" />
                    </div>
                    <div data-pos="2" className="add__photos">
                        <textarea data-photo="2" name="preview" placeholder="Фотографи проекта" type="text" className="add__input-name" />
                    </div>
                    <div data-pos="3" className="add__photos">
                        <textarea data-photo="3" name="preview" placeholder="Фотографи проекта" type="text" className="add__input-name" />
                    </div>
                </div>
                <div className="add__inputs">
                    <button onClick={(e) => addMorePics(e)} data-btn="1" className="add__more-pics">
                        <svg data-btn="1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line data-btn="1" x1="11.5" y1="0.5" x2="11.5" y2="21.5" stroke="#978F7F"/>
                            <line data-btn="1" x1="21.5" y1="11.5" x2="0.5" y2="11.5" stroke="#978F7F"/>
                        </svg>
                    </button>
                    <button onClick={(e) => addMorePics(e)} data-btn="2" className="add__more-pics">
                        <svg data-btn="2" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line data-btn="2" x1="11.5" y1="0.5" x2="11.5" y2="21.5" stroke="#978F7F"/>
                            <line data-btn="2" x1="21.5" y1="11.5" x2="0.5" y2="11.5" stroke="#978F7F"/>
                        </svg>
                    </button>
                    <button onClick={(e) => addMorePics(e)} data-btn="3" className="add__more-pics">
                        <svg data-btn="3" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line data-btn="3" x1="11.5" y1="0.5" x2="11.5" y2="21.5" stroke="#978F7F"/>
                            <line data-btn="3" x1="21.5" y1="11.5" x2="0.5" y2="11.5" stroke="#978F7F"/>
                        </svg>
                    </button>
                </div>
                </>: 
                props.type === '2' ?
                <>
                <div className="choose__item choose__item-second">
                    <label className="choose__block">
                        <input data-number='0' type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                    <label className="choose__block">
                        <input data-number='1' type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                </div>
                <div className="add__inputs">
                    <textarea data-name="1" maxLength={45} placeholder="Название" type="text" className="add__input-name" />
                    <textarea data-name="2" maxLength={45} placeholder="Название" type="text" className="add__input-name" />
                </div>
                <div className="add__inputs">
                    <textarea data-preview="1" name="photo" placeholder="Фото для превью" type="text" className="add__input-name" />
                    <textarea data-preview="2" name="photo" placeholder="Фото для превью" type="text" className="add__input-name" />
                    {/* <textarea data-preview="3" name="photo" placeholder="Фото для превью" type="text" className="add__input-name" /> */}
                </div>
                <div className="add__inputs">
                    <div data-pos="1" className="add__photos">
                        <textarea data-photo="1" placeholder="Фотографи проекта" type="text" className="add__input-name" />
                    </div>
                    <div data-pos="2" className="add__photos">
                        <textarea data-photo="2" placeholder="Фотографи проекта" type="text" className="add__input-name" />
                    </div>
                </div>
                <div className="add__inputs">
                    <button onClick={(e) => addMorePics(e)} data-btn="1" className="add__more-pics">
                        <svg data-btn="1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line data-btn="1" x1="11.5" y1="0.5" x2="11.5" y2="21.5" stroke="#978F7F"/>
                            <line data-btn="1" x1="21.5" y1="11.5" x2="0.5" y2="11.5" stroke="#978F7F"/>
                        </svg>
                    </button>
                    <button onClick={(e) => addMorePics(e)} data-btn="2" className="add__more-pics">
                        <svg data-btn="2" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line data-btn="2" x1="11.5" y1="0.5" x2="11.5" y2="21.5" stroke="#978F7F"/>
                            <line data-btn="2" x1="21.5" y1="11.5" x2="0.5" y2="11.5" stroke="#978F7F"/>
                        </svg>
                    </button>
                </div>
                </>
                :
                props.type === '3' ?
                <>
                <div className="choose__item choose__item-third">
                    <label className="choose__block">
                        <input data-number='0' type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                    <label className="choose__block">
                        <input data-number='1' type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                    <label className="choose__block">
                        <input data-number='2' type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                </div>
                <div className="add__inputs">
                    <textarea data-name="1" maxLength={45} placeholder="Название" type="text" className="add__input-name" />
                    <textarea data-name="2" maxLength={45} placeholder="Название" type="text" className="add__input-name" />
                    <textarea data-name="3" maxLength={45} placeholder="Название" type="text" className="add__input-name" />
                </div>
                <div className="add__inputs">
                    <textarea data-preview="1" name="photo" placeholder="Фото для превью" type="text" className="add__input-name" />
                    <textarea data-preview="2" name="photo" placeholder="Фото для превью" type="text" className="add__input-name" />
                    <textarea data-preview="3" name="photo" placeholder="Фото для превью" type="text" className="add__input-name" />
                </div>
                <div className="add__inputs">
                    <div data-pos="1" className="add__photos">
                        <textarea data-photo="1" placeholder="Фотографи проекта" type="text" className="add__input-name" />
                    </div>
                    <div data-pos="2" className="add__photos">
                        <textarea data-photo="2" placeholder="Фотографи проекта" type="text" className="add__input-name" />
                    </div>
                    <div data-pos="3" className="add__photos">
                        <textarea data-photo="3" placeholder="Фотографи проекта" type="text" className="add__input-name" />
                    </div>
                </div>
                <div className="add__inputs">
                    <button onClick={(e) => addMorePics(e)} data-btn="1" className="add__more-pics">
                        <svg data-btn="1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line data-btn="1" x1="11.5" y1="0.5" x2="11.5" y2="21.5" stroke="#978F7F"/>
                            <line data-btn="1" x1="21.5" y1="11.5" x2="0.5" y2="11.5" stroke="#978F7F"/>
                        </svg>
                    </button>
                    <button onClick={(e) => addMorePics(e)} data-btn="2" className="add__more-pics">
                        <svg data-btn="2" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line data-btn="2" x1="11.5" y1="0.5" x2="11.5" y2="21.5" stroke="#978F7F"/>
                            <line data-btn="2" x1="21.5" y1="11.5" x2="0.5" y2="11.5" stroke="#978F7F"/>
                        </svg>
                    </button>
                    <button onClick={(e) => addMorePics(e)} data-btn="3" className="add__more-pics">
                        <svg data-btn="3" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line data-btn="3" x1="11.5" y1="0.5" x2="11.5" y2="21.5" stroke="#978F7F"/>
                            <line data-btn="3" x1="21.5" y1="11.5" x2="0.5" y2="11.5" stroke="#978F7F"/>
                        </svg>
                    </button>
                </div>
                </>
                : null
                }
                <button className="add__submit" onClick={openPopup}>Сохранить проект</button>
            </div>
        </div>
    )
}

export default AddProject;