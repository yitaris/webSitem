import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Image from 'react-bootstrap/Image';
import profilPic from './snapBitmoji.png';
import { FaArrowRight } from 'react-icons/fa';
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {

  useEffect(() => {
  }, []);

  return (
    <div className='container d-flex mainBox m-0'>
      <div className='row g-3'>
        <div className='p-0 col-lg-8'>
          <div className="row g-3 m-0 " style={{ height: '100%' }}>
            <div className="col-lg-12 m-0">
              <div className="box" style={{ height: '100%' }}>
                <div className='row' style={{ height: '100%' }}>
                  <div className='col-lg-8'>
                    <h2 className='header2' style={{ fontSize: '2rem', marginBottom: 20 }}>Hoşgeldiniz</h2>
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
                    <div className='box' style={{ height: '100%', alignItems: 'stretch' }}>
                      <h2 className='header2' style={{ fontSize: '2rem', textAlign: 'center' }}>İletişme Geç!</h2>
                      <div className='row g-3 mt-4'>
                        <address className='col-12'>
                          <h2 className='header2' style={{ marginBottom: 10, textAlign: 'center', fontSize: '1.1rem' }}>İletişim bilgileri</h2>
                          <p className='p' style={{ marginBottom: 10, textAlign: 'center', }}>Yitariss@gmail.com</p>
                          <p className='p' style={{ textAlign: 'center', }}>Türkiye / Sakarya</p>
                        </address>
                      </div>
                      <div className='icon-container row g-3 mt-4'>
                        <h2 className='header2' style={{ fontSize: '1.1rem', textAlign: 'center', fontStyle: 'italic' }}>Sosyal medya</h2>
                        <div class='col-3 col-sm-6'>
                          <a href='https://www.youtube.com/@yitariss' target='_blank' rel='noopener noreferrer' className='icon1'>
                            <FaYoutube />
                          </a>
                        </div>
                        <div class='col-3 col-sm-6'>
                          <a href='https://www.instagram.com/yiitbayy' target='_blank' rel='noopener noreferrer' className='icon2'>
                            <FaInstagram />
                          </a>
                        </div>
                        <div class='col-3 col-sm-6'>
                          <a href='https://www.linkedin.com/in/yigitbayir137/' target='_blank' rel='noopener noreferrer' className='icon3'>
                            <FaLinkedin />
                          </a>
                        </div>
                        <div class='col-3 col-sm-6'>
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
                        <div className='box col-lg-12 m-0 p-0'
                          style={{
                            display: 'flex', border: '0px',
                            alignItems: 'center', justifyContent: 'center',
                          }}>
                          {/* Projeler animasyonu buraya gelecek */}
                          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
                              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner" style={{ borderRadius: 14 }}>
                              <div class="carousel-item active carousel-item-start" data-bs-interval="2000">
                                <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 2 }}>
                                  <FaArrowRight className='arrowIcon' />
                                </div>
                                <svg class="carousel-image bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                                  style={{}}
                                  width="800" height="250" xmlns="http://www.w3.org/2000/svg"
                                  role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"
                                  focusable="false">
                                  <image href='https://images.pexels.com/photos/19958153/pexels-photo-19958153/free-photo-of-vintage-stone-building-in-village.jpeg?auto=compress&cs=tinysrgb&w=600'
                                    width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                                </svg>
                                <div class="carousel-caption">
                                  <h5>C++ Calculator</h5>
                                </div>
                              </div>
                              <div class="carousel-item carousel-item-next carousel-item-start" data-bs-interval="2000">
                                <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 2 }}>
                                  <FaArrowRight className='arrowIcon' />
                                </div>
                                <svg class="carousel-image bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                                  width="800" height="250" xmlns="http://www.w3.org/2000/svg"
                                  role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"
                                  focusable="false">
                                  <image href='https://images.pexels.com/photos/26595240/pexels-photo-26595240/free-photo-of-an-empty-table-standing-in-sunlight-in-a-cafe.jpeg?auto=compress&cs=tinysrgb&w=600'
                                    width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                                </svg>
                                <div class="carousel-caption">
                                  <h5>Fitness Trainer Mobile App</h5>
                                </div>
                              </div>
                              <div class="carousel-item">
                                <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 2 }}>
                                  <FaArrowRight className='arrowIcon' />
                                </div>
                                <svg class="carousel-image bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                                  width="800" height="250" xmlns="http://www.w3.org/2000/svg"
                                  role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"
                                  focusable="false">
                                  <image href='https://images.pexels.com/photos/9303784/pexels-photo-9303784.jpeg?auto=compress&cs=tinysrgb&w=600'
                                    width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                                </svg>
                                <div class="carousel-caption">
                                  <h5>Social Media Clone</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Projeler animasyonu buraya gelecek */}
                        </div>
                        <div className='col-lg-12 p-0'>
                          <div className='col' style={{ height: '100%' }}>
                            <div className='box'
                              style={{ height: '100%', }}>
                              <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: 20
                              }}>
                                <h2 className='header2' style={{ fontSize: '2rem' }}>Durum</h2>
                                <div className="green-light"></div>
                              </div>
                              <p className='header2'>Bu ne anlama geliyor?</p>
                              <p className='p'>
                                Çalışmaya devam ettiğimin, yeni diller öğrendiğimin, iş alma ve tekliflere karşı
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

        <div className=' col-lg-4'>
          <div className='box' style={{ height: '100%' }}>
            <div style={{ height: '50%' }}>
              <header>
                <h2 className='header2' style={{ fontSize: '2rem', marginBottom: 20 }}>Hakkımda</h2>
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