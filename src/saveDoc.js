import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  return (
    <div className='grid d-flex justify-content-center align-items-center'>
      <div className='row'>
        <div className='col-lg-9' style={{}}>
          <div className='row' style={{height:'100%'}}>
            <div className='col-lg-12 p-4'>
              <p style={{ color: 'rgba(155,155,155,1)' ,height:'100%' }}>
                Hoşgeldiniz
                <h5 style={{ color: 'white' }}>
                  Merhaba 👋 Ben Tam Zamanlı Mobile App Developerım. React Native ile kullanıcı
                  dostu ve performans odaklı mobil uygulamalar geliştirme konusunda tutkuluyum.
                </h5>
              </p>
            </div>
            <div className='col-lg-12'>
              <div className='row' style={{height:'100%'}}>
                <div className='col-lg-4 p-4'>
                  <p style={{height:'95%'}}>Sol Kutu</p>
                </div>
                <div className='col-lg-8 p-4'>
                  <div className='col-lg-12' style={{height:'100%'}}>
                    <div className='col-lg-12'style={{height:'50%'}}>
                      <p style={{height:'90%'}}>Üst kısım</p>
                    </div>
                    <div className='col-lg-12'style={{height:'50%'}}>
                      <div className='col-lg-12'style={{height:'100%'}}>
                        <div className='row' style={{height:'100%'}}>
                          <div className='col-lg-6'>
                            <p style={{height:'90%'}}>Sol kısım</p>
                          </div>
                          <div className='col-lg-6'>
                            <p style={{height:'90%'}}>Sağ kısım</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-3' style={{}}>
          <div className='p-4'>
            <p>
              <div className='icon-container mt-4'>
                <div className='scroll-container'>
                  <a href='https://www.youtube.com/@yitariss' target='_blank' rel='noopener noreferrer' className='icon1'>
                    <FaYoutube />
                  </a>
                  <a href='https://www.instagram.com/yiitbayy' target='_blank' rel='noopener noreferrer' className='icon2'>
                    <FaInstagram />
                  </a>
                  <a href='https://www.linkedin.com/in/yigitbayir137/' target='_blank' rel='noopener noreferrer' className='icon3'>
                    <FaLinkedin />
                  </a>
                  <a href='https://github.com/yitaris/' target='_blank' rel='noopener noreferrer' className='icon4'>
                    <FaGithub />
                  </a>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
