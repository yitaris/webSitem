import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import profilPic from './snapBitmoji.png';
import { FaArrowRight } from 'react-icons/fa';
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='container d-flex mainBox m-0 p-0'>
      <div className='row g-3'>
      <div className='p-0 col-lg-8'>
        <div className="row g-3 m-0 " style={{ height: '100%' }}>
          <div className="col-lg-12 m-0">
            <div className="box" style={{ height: '100%' }}>
              <div className='row' style={{ height: '100%' }}>
                <div className='col-lg-8'>
                  <h2 className='header2 mb-2'>Hoşgeldiniz</h2>
                  <h1 className='header1'>Merhaba 👋 Ben Tam Zamanlı Mobile App Developerım. React Native ile kullanıcı
                    dostu ve performans odaklı mobil uygulamalar geliştirme konusunda tutkuluyum.
                  </h1>
                </div>
                <div xs={12} lg={4} className=' col-lg-4 d-flex justify-content-center align-items-center'>
                  <Image src={profilPic} style={{ width: '100%', height: 'auto', maxWidth: 200 }} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 m-0" style={{ alignItems: 'stretch' }}>
            <div className="" style={{ height: '100%' }}>
              <div className='row g-3' style={{ height: '100%', marginTop: 0 }}>
                <div className='col-lg-4'>
                  <div className='box' style={{ height: '100%' }}>
                    <h1 className='header1'>Benimle iletişime geç!</h1>
                    <address className='flex flex-col mt-4'>
                      <h2 className='header2'>İletişim bilgileri</h2>
                      <p className='p'>Yitariss@gmail.com</p>
                      <p className='p'>Türkiye / Sakarya</p>
                    </address>
                    <div className='flex flex-col mt-4 w-fit'>
                      <h2 className='header2'>Sosyal medya</h2>
                      <li><a href='https://www.linkedin.com/in/yigitbayir137/' target='_blank' rel='noopener noreferrer'>Linkedin</a></li>
                      <li><a href='https://github.com/yitaris/' target='_blank' rel='noopener noreferrer'>Github</a></li>
                      <li><a href='https://www.youtube.com/@yitariss' target='_blank' rel='noopener noreferrer'>Youtube</a></li>
                      <li className='mb-4'><a href='https://www.instagram.com/yiitbayy' target='_blank' rel='noopener noreferrer'>İnstagram</a></li>
                      <div className='icon-container mt-4'>
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
                  </div>
                </div>
                <div className='col-lg-8'>
                  <div style={{ height: '100%' }}>
                    <div className='row g-3 m-0' style={{ height: '100%' }}>
                      <div className='box col-lg-12 m-0'
                        style={{
                          padding: 20,
                          flexDirection: 'col',
                          alignItems: 'center', justifyContent: 'center'
                        }}>
                        <h2 className='header2' style={{ fontSize: '2rem', padding: 0 }}>Saat</h2>
                        <h2 className='time'>{currentTime.toLocaleTimeString()}</h2>
                      </div>
                      <div className='col-lg-12 p-0'>
                        <div className='row g-3' style={{ height: '100%' }}>
                          <div className='col' style={{ height: '100%' }}>
                            <div className='box'
                              style={{
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                              }}>
                              <h2 className='header2' style={{ fontSize: '2rem' }}>Projeler</h2>
                              <FaArrowRight className='arrowIcon' />
                            </div>
                          </div>
                          <div className='col' style={{ height: '100%' }}>
                            <div className='box'
                              style={{ height: '100%', }}>
                              <div style={{ display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: 20
                              }}>
                                <h2 className='header2' style={{ fontSize: '2rem' }}>Durum</h2>
                                <div className="green-light"></div>
                              </div>
                              <p className='header2'>Bu ne anlama geliyor?</p>
                              <p className='p'>
                                Anlamı, hali hazırda çalıştığımı . yazılım öğrendiğimi, iş alma ve tekliflere karşı
                                aktif olduğumu göstermektedir.
                              </p>
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
        </div>
      </div>

      <div className=' col-lg-4'>
        <div className='box' style={{ height: '100%' }}>
          <div style={{ height: '50%' }}>
            <header>
              <h2 className='header2 mb-2'>Hakkımda</h2>
            </header>
            <p className='header1' style={{ marginBottom: 30 }}>
              Merhabalar ben yiğit, Türkiye'de Sakarya ilçesinde doğdum. 20 yaşındayım, 6 yıldır yazılımla uğraşmaktayım.
              Hergün kendimi geliştirip daha iyisi olmaya çalışıyorum. İşte yeteneklerim:
            </p>
            <h2 className='header2 mb-2'>Yeteneklerim</h2>
            <div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>C++</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>Arduino</li>
                <li>bootstrap</li>
                <li>Firebase</li>
                <li>Supabase</li>
                <li>Clerk</li>
                <li>PLC</li>
              </ul>
            </div>
            <p className='header1' style={{ marginTop: 30 }}>
              Ana yeteneklerin dışında bahsedecek olursak, iyi bir gözlemciyimdir.
              Takım ve organizasyonlara adapte olmakta zorluk çekmem.
              Okuduğun için teşekkür ederim.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
