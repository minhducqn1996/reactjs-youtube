import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './component/topmenu/TopMenu.js';
import Header from './component/header/Header';
import Section from './component/section/Section';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="_013">
      <TopMenu />
      <Header />
      <div className="container">
        <div className="row">
          <Section tieude="Đề tài số 1" anh  = './img/01.jpg'  noidung  = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quod aliquid, mollitia odio veniam sit iste essei." />
          <Section tieude="Đề tài số 2" anh  = './img/02.jpg'  noidung  = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Quod aliquid, mollitia odio veniam sit iste esse assumenda." />
          <Section tieude="Đề tài số 3" anh  = './img/03.jpg'  noidung  = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Quod aliquid." /> 
          <Section tieude="Đề tài số 1" anh  = './img/01.jpg'  noidung  = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quod aliquid, mollitia odio veniam sit iste essei." />
          <Section tieude="Đề tài số 2" anh  = './img/02.jpg'  noidung  = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Quod aliquid, mollitia odio veniam sit iste esse assumenda." />
          <Section tieude="Đề tài số 3" anh  = './img/03.jpg'  noidung  = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Quod aliquid." />

          <Section tieude="Đề tài số 1" anh  = './img/01.jpg'  noidung  = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quod aliquid, mollitia odio veniam sit iste essei." />
          <Section tieude="Đề tài số 2" anh  = './img/02.jpg'  noidung  = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Quod aliquid, mollitia odio veniam sit iste esse assumenda." />
          <Section tieude="Đề tài số 3" anh  = './img/03.jpg'  noidung  = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Quod aliquid." />                      
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
