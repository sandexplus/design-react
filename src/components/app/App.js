import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../mainPage/MainPage';
import Communication from '../communication/Communication';
import ServicePage from '../servicePage/ServicePage';
import ServiceTemplate from '../serviceTemplate/ServiceTemplate';
import AdminLogin from '../adminLogin/AdminLogin';
import ChooseForm from '../chooseForm/ChooseForm';
import AddProject from '../addProject/AddProject';

function App() {
    return (
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/communicate' element={<Communication/>}/>
          <Route path='/service' element={<ServicePage/>}/>
          <Route 
          path='/brand' 
          element={<ServiceTemplate 
            suptitle='Брэндинг'
            title='Логотипы и фирменный стиль'
            content={[
              {
                name: 'Логотип',
                descr: 'Создание логотипа индивидуально для вас и вашего проекта',
                imgs: []
              },
              {
                name: 'Фирменный стиль',
                descr: 'Придумывание фирменного стиля для вас, который вы сможете использовать где угодно в будущем',
                imgs: []
              }
            ]}/>}/>
          <Route 
          path='/polygraph' 
          element={<ServiceTemplate 
            suptitle='Полиграфия'
            title='Дизайн этикетов, брошюр, визиток и плакатов'
            content={[
              {
                name: 'Дизайн этикеток',
                descr: 'Создание дизайна этикетов для вашего продукта',
                imgs: []
              },
              {
                name: 'Плакаты',
                descr: 'Дизайн плакатов любого размера для любой локации',
                imgs: []
              },
              {
                name: 'Брошюры, листовки',
                descr: 'Дизайн индивидуальных брошюр, информационные листы или меню',
                imgs: []
              }
            ]}/>}/>
          <Route 
          path='/web-design' 
          element={<ServiceTemplate 
            suptitle='Web-дизайн'
            title='Дизайн сайтов и приложений'
            content={[
              {
                name: 'Web-дизайн',
                descr: 'Проработка логики и дизайна индивидуально для вашего проекта',
                imgs: []
              }
            ]}/>}/>
          <Route 
          path='/advertise' 
          element={<ServiceTemplate 
            suptitle='Дизайн рекламы'
            title='Создание рекламных баннеров'
            content={[
              {
                name: 'Постеры в социальных сетях',
                descr: 'Креативы для публикаций и историй для рекламы таргетированной реклами в социальных сетях',
                imgs: []
              },
              {
                name: 'Рекламные баннеры на сайтах',
                descr: 'Рекламные баннеры с вашим продуктом или услугой, размещенные на различных сайтах',
                imgs: []
              },
              {
                name: 'Уличные баннеры',
                descr: 'Дизайн для рекламы на уличных баннерах возле дороги, на остановках, в торговых центрах и т.п.',
                imgs: []
              },
              {
                name: 'Дизайн на бумаге',
                descr: 'Дизайн брошюр, информационных листов и меню',
                imgs: []
              }
            ]}/>}/>
          <Route 
          path='/social' 
          element={<ServiceTemplate 
            suptitle='Социальные сети'
            title='Оформление социальных сетей'
            content={[
              {
                name: 'Шапки и аватары',
                descr: 'Создание шапок и аватаров для аккаунтов или групп в социальных сетях',
                imgs: []
              },
              {
                name: 'Дизайн публикаций',
                descr: 'Создание одиночных публикаций или шаблонов для ваших социальных сетей',
                imgs: []
              }
            ]}/>}/>
          <Route
            path='/admin'
            element={<AdminLogin/>}
          />
          <Route 
            path='/choose-form'
            element={<ChooseForm/>}  
          />
          <Route
            path='/add-project1'
            element={<AddProject type='1'/>}
          />
          <Route
            path='/add-project2'
            element={<AddProject type='2'/>}
          />
          <Route
            path='/add-project3'
            element={<AddProject type='3'/>}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
    );
}

export default App;
