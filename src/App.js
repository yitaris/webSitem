import React,{useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profilPic from './snapBitmoji.png';
import { FaArrowRight } from 'react-icons/fa';
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  const  [ currentTime,setCurrentTime ] = useState(new Date());

  useEffect(()=>{
    const timer = setInterval(()=>{
      setCurrentTime(new Date());
    },1000);

    return () => clearInterval(timer);
  },[]);

  return (
    <Container
      fluid
      className='containerMain'
    >
        <Row className='mainBox g-3 m-0 p-0'>
          <Col xs={12} lg={8} className='p-0'>
            <div class="row g-3 m-0" style={{height:'100%'}}>
              <div class="col-lg-12 m-0" style={{}}>
                <div class="box" style={{height:'100%'}}>
                  <Row style={{height:'100%'}}>
                    <Col xs={6} lg={8}>
                      <h2 className='header2 mb-2'> Hoşgeldiniz </h2>
                      <h1 className='header1'>Merhaba 👋 Ben Tam Zamanlı Mobile App Developerım. React Native ile kullanıcı
                        dostu ve performans odaklı mobil uygulamalar geliştirme konusunda tutkuluyum.
                      </h1>
                    </Col>
                    <Col xs={6} lg={4} className='d-flex justify-content-center align-items-center'>
                      <Image src={profilPic} style={{ width: 200, height: 200 }} />
                    </Col>
                </Row>
                </div>
              </div>




              <div class="col-lg-12 m-0" style={{alignItems:'stretch'}}>
                <div class="" style={{height:'100%'}}>
                  <div class='row g-3 ' style={{height:'100%',marginTop:0}}>
                    <div class='col-lg-4 ' style={{}}>
                      <div class='box' style={{height:'100%'}}>
                        <h1 className='header1'>Benimle iletişime geç!</h1>
                        <address className='flex flex-col mt-4'>
                          <h2 className='header2'>İletişim bilgileri</h2>
                          <p className='p'>Yitariss@gmail.com</p>
                          <p className='p'>Türkiye / Sakarya</p>
                        </address>
                        <div className='flex flex-col mt-4 w-fit'>
                          <h2 className='header2'>Sosyal medya</h2>
                          <li><a href='https://www.linkedin.com/in/yigitbayir137/' target='_blank'  rel='noopener noreferrer' >Linkedin</a></li>
                          <li><a href='https://github.com/yitaris/' target='_blank'  rel='noopener noreferrer' >Github</a></li>
                          <li><a href='https://www.youtube.com/@yitariss' target='_blank'  rel='noopener noreferrer' >Youtube</a></li>
                          <li className='mb-4'><a href='https://www.instagram.com/yiitbayy' target='_blank'  rel='noopener noreferrer' >İnstagram</a></li>
                        </div>
                      </div>
                    </div>
                    <div class='col-lg-8 ' style={{}}>
                      <div style={{height:'100%'}}>
                        <div class='row g-3 m-0' style={{height:'100%'}}>
                          <div class='box col-lg-12 m-0'
                               style={{
                               padding:20,
                               flexDirection:'col',
                               alignItems:'center',justifyContent:'center'}}>
                            <h2 class='header2' style={{fontSize:24,padding:0}}>Saat</h2>
                            <h2 className='time'>{currentTime.toLocaleTimeString()}</h2>
                          </div>
                          <div class='col-lg-12 p-0' style={{}}>
                            <div class='row g-3' style={{height:'100%'}}>
                              <div class='col' style={{height:'100%'}}>
                                <div class='box'
                                     style={{
                                             height:'100%',
                                             display:'flex',
                                             justifyContent:'space-between',
                                            }}>
                                  <h2 class='header2' style={{fontSize:24}}>Projeler</h2>
                                  <FaArrowRight class='arrowIcon'/>
                                </div>
                              </div>
                              <div class='col' style={{height:'100%'}}>
                                <div class='box'
                                     style={{height:'100%',}}>
                                    <div style={{display:'flex',
                                                justifyContent:'space-between',
                                                marginBottom:20
                                                }}>
                                      <h2 class='header2' style={{fontSize:24}}>Durum</h2>
                                      <div className="green-light"></div>
                                    </div>
                                    <p class='header2'>Bu ne anlama geliyor?</p>   
                                    <p class='p'>
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
          </Col>
          
          <Col xs={12} lg={4} className='' style={{}}>
            <div class='box'style={{height:'100%'}}>
              <div style={{height:'50%'}}>
                <header>
                  <h2 className='header2 mb-2'>Hakkımda</h2>
                </header>
                <p className='aboutme' style={{marginBottom:30}}>
                  Merhabalar ben yiğit, Türkiye'de Sakarya ilçesinde doğdum. 20 yaşındayım, 6 yıldır yazılımla uğraşmaktayım.
                  Hergün kendimi geliştirip daha iyisi olmaya çalışıyorum. İşte yeteneklerim:
                </p>
                <h2 className='header2 mb-2'>Yeteneklerim</h2>
                <div>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{listStyle:'inside'}}>C++</li>
                    <li style={{listStyle:'inside'}}>Python</li>
                    <li style={{listStyle:'inside'}}>JavaScript</li>
                    <li style={{listStyle:'inside'}}>Arduino</li>
                    <li style={{listStyle:'inside'}}>Firebase</li>
                    <li style={{listStyle:'inside'}}>Supabase</li>
                    <li style={{listStyle:'inside'}}>Clerk</li>
                    <li style={{listStyle:'inside'}}>PLC</li>
                  </ul>
                </div>
                <p className='aboutme' style={{marginTop:30}}>
                  Ana yeteneklerin dışında bahsedecek olursak, iyi bir gözlemciyimdir.
                  Takım ve organizasyonlara adapte olmakta zorluk çekmem.
                  Okuduğun için teşekkür ederim.
                </p>
              </div>
                                                
              <div style={{height:'50%', marginTop:100}}>
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
                </div>
              </div>

          </Col>
        </Row>
    </Container>

  );
}

export default App;
