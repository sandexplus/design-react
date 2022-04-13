import './MainPage.scss';
import WorksTemplate from '../worksTemplate/WorksTemplate';
import Header from '../header/Header';
import Contact from '../contact/Contact';


const MainPage = () => {

    const imgs = ['https://avatars.mds.yandex.net/get-zen_doc/5130440/pub_6117c35677c7ad7281c77683_6117c3add3f0df256407f38a/scale_1200', 'https://avatars.mds.yandex.net/get-zen_doc/4766103/pub_6117c35677c7ad7281c77683_6117c3a290c7e2078a92efc5/scale_1200', 'https://artside.com.ua/home/products_images/5606.jpg']
    
    return (
    <>
    <Header/>
    <main>
        <div className="main-page">
            <div className="main-page__container">
                <WorksTemplate type={1} imgs={imgs}/>
                <WorksTemplate type={2} imgs={imgs}/>
                <WorksTemplate type={3} imgs={imgs}/>
                <WorksTemplate type={1} imgs={imgs}/>
                <WorksTemplate type={2} imgs={imgs}/>
            </div>
        </div>
    </main>
    <footer className='footer'>
        <div className="footer__inner">
            <Contact/>
            <div className="footer__creds">
            smrq.design | 2022
            </div>
        </div>
    </footer>
    </>
    )
}

export default MainPage;