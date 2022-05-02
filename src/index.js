import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById("root"));

const setScrollbarWidth = () => {
  // Создаем контейнер-болванку
  const outerContainer = document.createElement('div');
  
  //Накидываем стили
  outerContainer.style.visibility = 'hidden'; 
  outerContainer.style.overflow = 'scroll';
  
  //Добавляем его к body
  document.body.appendChild(outerContainer); 
 
  // Создаем еще один контейнер и помещаем его внутрь outerContainer
  const innerContainer = document.createElement('div'); 
  outerContainer.appendChild(innerContainer); 
   
  // Высчитываем ширину нашего скроллбара
  const scrollbarWidth = 
  (outerContainer.offsetWidth - innerContainer.offsetWidth); 
 
 // Создаем css-переменную
   document.documentElement.style.setProperty('--scroll-width',
   `${scrollbarWidth}px`);
   
  // Удаляем наш контейнер-болванку
  outerContainer.parentNode.removeChild(outerContainer); 
}

setScrollbarWidth();

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
