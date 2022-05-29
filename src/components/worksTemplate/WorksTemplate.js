import { useEffect, useState } from 'react';
import './WorksTemplate.scss';
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

const WorksTemplate = (props) => {

    const [currentPhotos, setCurrentPhotos] = useState([]);

    useEffect(() => {
        if (!props.data.length) {
            return;
        }
        setPhotos(props.data.map(item => {
            return item?.preview.map(pre => {
                return pre;
            })
        }))
    }, [])

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const popup = <div className="popup-work">
                    <div className="popup-work__header">
                        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M52.8503 51.1237V33.6925H33.6503V52.8925H51.2255L45.1679 46.8354L46.8647 45.1381L52.8503 51.1237ZM52.8503 51.1237V33.6925H33.6503V52.8925H51.2255L45.1679 46.8354L46.8647 45.1381L52.8503 51.1237ZM52.8503 51.1237V33.6925H33.6503V52.8925H51.2255L45.1679 46.8354L46.8647 45.1381L52.8503 51.1237ZM52.8503 51.1237V33.6925H33.6503V52.8925H51.2255L45.1679 46.8354L46.8647 45.1381L52.8503 51.1237ZM52.8503 51.1237V33.6925H33.6503V52.8925H51.2255L45.1679 46.8354L46.8647 45.1381L52.8503 51.1237Z" fill="#3C3C3C"/>
                            <path d="M0.050293 0.050293V60.0503H60.0503V0.050293H0.050293ZM28.8503 7.20805H7.25029V20.4114H28.8498L28.8503 38.4153H7.25029V40.8508H26.4503V40.8335L28.8503 40.833V55.281H26.4503V43.2508H7.25029V55.257H4.85029V25.2109H7.25029V36.0153H26.4503V22.8114H4.85029V4.80805H28.8498L28.8503 7.20805ZM55.2503 55.2925H31.2503V31.2925H55.2503V55.2925ZM55.2503 28.8685H52.8503V8.36245L43.2503 18.5173L33.6503 8.36245V28.8685H31.2503V4.86853H33.6503V4.87045L33.6513 4.86949L43.2508 15.0234L52.8503 4.86901L55.2503 4.86853V28.8685Z" fill="#3C3C3C"/>
                        </svg>
                        <div onClick={closeModal} className="popup-work__close">
                            <svg onClick={closeModal} className="popup-work__close" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path onClick={closeModal} className="popup-work__close" fillRule="evenodd" clipRule="evenodd" d="M30 3.00024L27 0.000266073L15.0001 12.0003L2.99995 0L0 2.99997L12.0002 15.0002L0.000466339 27L3.00042 30L15.0001 18.0002L26.9996 29.9997L29.9995 26.9998L18.0001 15.0002L30 3.00024ZM18.0001 15.0002L15.0001 12.0003L12.0002 15.0002L15.0001 18.0002L18.0001 15.0002Z" fill="#5B5B5B"/>
                            </svg>
                        </div>
                    </div>
                    {currentPhotos.map(item => {
                        return (
                            <img src={item} alt="" className="popup-work__photo" />
                        )
                    })}
                </div>

    const [photos, setPhotos] = useState([]);

    const setType = () => {
        if (props.type === 1) {
            return (
                <>
                <Popup open={open} trigger={
                    <div className="work-item type1">
                        <div className="work-item__link">
                            <img 
                            onClick={() => {setCurrentPhotos(photos[0]); setOpen(o => !o)}} 
                            src={props.data[0]?.photo} alt="Work" className="work-item__img" />
                        </div>
                    </div>
                }>
                    <div>{popup}</div>
                </Popup>
                <Popup open={open} trigger={
                    <div onClick={() => setOpen(o => !o)} className="work-item type1">
                        <div className="work-item__link">
                            <img 
                            onClick={() => {setCurrentPhotos(photos[1]); setOpen(o => !o)}} 
                            src={props.data[1]?.photo} alt="Work" className="work-item__img" />
                        </div>
                    </div>
                }>
                    <div>{popup}</div>
                </Popup>
                <Popup open={open} trigger={
                    <div onClick={() => setOpen(o => !o)} className="work-item type1">
                        <div className="work-item__link">
                            <img 
                            onClick={() => {setCurrentPhotos(photos[2]); setOpen(o => !o)}} 
                            src={props.data[2]?.photo} alt="Work" className="work-item__img" />
                        </div>
                    </div>
                }>
                    {popup}
                </Popup>
                </>
            )
        } else if (props.type === 2) {
            return (
                <>
                <Popup open={open} trigger={
                    <div className="work-item type2">
                        <div className="work-item__link">
                            <img 
                            onClick={() => {setCurrentPhotos(photos[0]); setOpen(o => !o)}} 
                            src={props.data[0]?.photo} alt="Work" className="work-item__img" />
                        </div>
                    </div>
                }>
                    <div>Popup content here !!</div>
                </Popup>
                <Popup open={open} trigger={
                    <div className="work-item type2">
                        <div className="work-item__link">
                            <img 
                            onClick={() => {setCurrentPhotos(photos[1]); setOpen(o => !o)}} 
                            src={props.data[1]?.photo} alt="Work" className="work-item__img" />
                        </div>
                    </div>
                }>
                    <div>Popup content here !!</div>
                </Popup>
                </>
            )
        } else if (props.type === 3) {
            return (
                <>
                <Popup open={open} trigger={
                    <div className="work-item type3">
                        <div className="work-item__link">
                            <img 
                            onClick={() => {setCurrentPhotos(photos[0]); setOpen(o => !o)}} 
                            src={props.data[0]?.photo} alt="Work" className="work-item__img" />
                        </div>
                    </div>
                }>
                    <div>Popup content here !!</div>
                </Popup>
                <Popup open={open} trigger={
                    <div className="work-item type3">
                        <div className="work-item__link">
                            <img 
                            onClick={() => {setCurrentPhotos(photos[1]); setOpen(o => !o)}} 
                            src={props.data[1]?.photo} alt="Work" className="work-item__img" />
                        </div>
                    </div>
                }>
                    <div>Popup content here !!</div>
                </Popup>
                <Popup open={open} trigger={
                    <div className="work-item type3">
                        <div className="work-item__link">
                            <img 
                            onClick={() => {setCurrentPhotos(photos[2]); setOpen(o => !o)}} 
                            src={props.data[2]?.photo} alt="Work" className="work-item__img" />
                        </div>
                    </div>
                }>
                    <div>Popup content here !!</div>
                </Popup>
                </>
            )
        } else {
            return null;
        }
    }

    return (
        <div className="work-container">
            {setType()}
        </div>
    )
}

export default WorksTemplate;