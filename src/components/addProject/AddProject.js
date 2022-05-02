import { useEffect, useState } from 'react';
import './AddProject.scss';

const AddProject = (props) => {

    const [photos, setPhotos] = useState([]);
    const [projImgs, setProjImgs] = useState([]);

    const handlePhoto = (e) => {
        let newState = [...photos];
        newState[e.target.dataset.number] = e.target.files[0];
        setPhotos([...newState]);
        const imgContainer = e.target.parentElement.querySelector('.add__img');
        const reader = new FileReader();
        reader.onload = function(e) {
            imgContainer.setAttribute('src', e.target.result);   
            imgContainer.style.opacity = 1;
        }
        reader.readAsDataURL(e.target.files[0]);
    }  
    
    const handleProjImgs = (e) => {
        const index = +e.target.dataset.number;
        let compareFiles = [];
        let newState = [];
        if (projImgs[index]) {
            newState = [...projImgs[index]];
        }
        if (!newState || newState.length < 1) {
            for (let i = 0; i < e.target.files.length; i++) {
                newState.push(e.target.files[i]) 
            }
        } else {
            for (let newFile of e.target.files) {
                let flag = false;
                newState.forEach(item => {
                    if (newFile.size === item.size) {
                        flag = true;
                    }
                })
                if (!flag) {
                    compareFiles.push(newFile);  
                }

            }
            newState = [...newState, ...compareFiles];
        }
    /*         let newArr = projImgs;
            newArr[index] = [...newState]; */
        // console.log(newArr)
        setProjImgs(projImgs => {
            projImgs[index] = [...newState]
            return [...projImgs];
        }); 
    }

    const showProjImgs = (index) => {
        if (!projImgs || !projImgs[index]) {
            return []
        }
        console.log(1)
        const imgTags = projImgs[index].map(item => {
            return <img key={item.size} src={URL.createObjectURL(item)} alt="" className="add__proj-img" />;
        })

        return imgTags;
    }

    const relocateBack = () => {
        window.location.href = '/choose-form';
    }

    const closePopup = (e) => {
        e.target.parentElement.parentElement.parentElement.classList.remove('popup_show')
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
                        <div className="popup-btn" onClick={(e) => closePopup(e)}>Да</div>
                        <div className="popup-btn" onClick={(e) => closePopup(e)}>Отмена</div>
                    </div>
                </div>
            </div>
            <div className="choose__container">
                {props.type === '1' ?
                <>
                <div className="choose__item choose__item-first">
                    <label className="choose__block">
                        <input data-number='0' onChange={(e) => handlePhoto(e)} type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                    <label className="choose__block">
                        <input data-number='1' onChange={(e) => handlePhoto(e)} type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                    <label className="choose__block">
                        <input data-number='2' onChange={(e) => handlePhoto(e)} type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                </div>  
                <div className="add__inputs">
                    <input placeholder="Название" type="text" className="add__input-name" />
                    <input placeholder="Название" type="text" className="add__input-name" />
                    <input placeholder="Название" type="text" className="add__input-name" />
                </div>
                <div className="add__files">
                    <div className="add__files1">
                        <label className='add__project-files-label' htmlFor="addFiles">Добавить файлы
                        <input data-number='0' onChange={(e) => handleProjImgs(e)} type="file" name='addFiles' multiple accept='image/*' className="add__project-files" /></label>
                        {showProjImgs(0).map(item => item)}
                        </div>
                    <div className="add__files2">
                        <label className='add__project-files-label' htmlFor="addFiles">Добавить файлы
                        <input data-number='1' onChange={(e) => handleProjImgs(e)} type="file" name='addFiles' multiple accept='image/*' className="add__project-files" /></label>
                        {showProjImgs(1).map(item => item)}
                    </div>
                    <div className="add__files3">
                        <label className='add__project-files-label' htmlFor="addFiles">Добавить файлы
                        <input data-number='2' onChange={(e) => handleProjImgs(e)} type="file" name='addFiles' multiple accept='image/*' className="add__project-files" /></label>
                        {showProjImgs(2).map(item => item)}
                    </div>
                </div>
                </>: 
                props.type === '2' ?
                <>
                <div className="choose__item choose__item-second">
                    <label className="choose__block">
                        <input data-number='0' onChange={(e) => handlePhoto(e)} type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                    <label className="choose__block">
                        <input data-number='1' onChange={(e) => handlePhoto(e)} type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                </div>
                <div className="add__inputs">
                    <input placeholder="Название" type="text" className="add__input-name" />
                    <input placeholder="Название" type="text" className="add__input-name" />
                </div>
                </>
                :
                props.type === '3' ?
                <>
                <div className="choose__item choose__item-third">
                    <label className="choose__block">
                        <input data-number='0' onChange={(e) => handlePhoto(e)} type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                    <label className="choose__block">
                        <input data-number='1' onChange={(e) => handlePhoto(e)} type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                    <label className="choose__block">
                        <input data-number='2' onChange={(e) => handlePhoto(e)} type="file" accept="image/*" className="add__input" />
                        <img src="#" alt="" className='add__img' />
                    </label>
                </div>
                <div className="add__inputs">
                    <input placeholder="Название" type="text" className="add__input-name" />
                    <input placeholder="Название" type="text" className="add__input-name" />
                    <input placeholder="Название" type="text" className="add__input-name" />
                </div>
                </>
                : null
                }
                {projImgs.length ? <button className="add__submit" onClick={() => document.querySelector('.popup-save').classList.add('popup_show')}>Сохранить проект</button> : null}
            </div>
        </div>
    )
}

export default AddProject;