import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route index path='/about' element={<div>1</div>} />
        <Route index path='/type' element={<div>2</div>} />
        <Route index path='/contact' element={<div>3</div>} />
        <Route index path='/login' element={<div>4</div>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// const menuList=document.querySelector('.menu-list')
// const menu = document.querySelector('.menu')

// function toggleMenu() {
//   menu.addEventListener('click', () => {
//     menuList.classList.toggle('active');
//   })
// }
reportWebVitals();
