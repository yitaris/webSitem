import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import profilPic from './snapBitmoji.png';

function App() {
  return (
    <Container className='d-flex justify-content-between align-items-center' style={{ minHeight: '100vh' }}>
      {/* Stack yerine Row kullanarak grid sistemine uygun hale getiriyoruz */}
      <Row className='g-3' style={{ backgroundColor: 'transparent', }}>
        <Col xs={12} lg={9} style={{ backgroundColor: 'transparent', color: 'white' }}>
          {/* Sol kısım */}
          <Row className='g-3' style={{}}>
            <Col lg={12} style={{ backgroundColor: '#181C14', color: 'white', padding: 20, borderRadius: 14 }}>
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
            </Col>

            <Col lg={12} style={{ height: '100%',backgroundColor:'transparent' }}>
              <Stack direction='horizontal' gap={3} style={{ justifyContent: 'center', alignItems: 'stretch', height: '100%' }}>
                <Col lg={'4'} style={{ backgroundColor: '#181C14', color: 'white', padding: 20, borderRadius: 14, }}>
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
                </Col>
                <Col style={{ backgroundColor: 'transparent', height: '100%' }}>
                  <Row className='g-3' style={{ height: '100%',}}>
                    <Col xs={12} lg={12} style={{ backgroundColor: 'transparent',height:'100%',}}>
                      <Col xs={12} lg={12} style={{backgroundColor:'#181C14', color: 'white', padding: 20, borderRadius: 14, height: '100%' }}>
                       <h2 className='header2'style={{marginBottom:'25%'}}>Projeler</h2>
                      </Col>
                    </Col>
                    <Col lg={12} style={{ backgroundColor: 'transparent', color: 'white', flexDirection: 'row', height: '100%' }}>
                      <Row className='g-3' style={{ height: '100%' }}>
                        <Col lg={6} style={{ height: '100%' }}>
                          <Col lg={12} style={{ backgroundColor: '#181C14', color: 'white', padding: 20, borderRadius: 14, height: '100%' }}>
                            <h2 className='header2'style={{marginBottom:'25%'}}>Projeler</h2>
                          </Col>
                        </Col>
                        <Col lg={6} style={{ backgroundColor: 'transparent', height: '100%' }}>
                          <Col lg={12} style={{ backgroundColor: '#181C14', padding: 20, borderRadius: 14, height: '100%'}}>
                            <h2 className='header2'style={{marginBottom:'25%'}}>Projeler</h2>
                          </Col>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Stack>
            </Col>
          </Row>
        </Col>

        {/* Hakkımda kısmı */}
        <Col xs={12} lg={3} style={{ backgroundColor: 'transparent', color: 'white' }}>
          <Col xs={12} lg={12} style={{ backgroundColor: '#181C14', padding: 20, borderRadius: 14, height: '100%' }}>
            <header className=''>
              <h2 className='header2 mb-2'>Hakkımda</h2>
            </header>
            <p className='aboutme'>Merhabalar ben yiğit turkiye'de sakarya ilçesinde doğdum 20 yaşındayım 6 yıldır yazılımla uğraşmaktayım
              hergün kendimi geliştirip daha iyisi olmaya çalışıyorum işte yeteneklerim:</p>
            <h2 className='header2 mb-2'>Yeteneklerim</h2>
            <div>
              <li style={{ listStyle: 'inherit' }}>c++</li>
              <li style={{ listStyle: 'inherit' }}>python</li>
              <li style={{ listStyle: 'inherit' }}>JavaScript</li>
              <li style={{ listStyle: 'inherit' }}>Arduino</li>
              <li style={{ listStyle: 'inherit' }}>Firebase</li>
              <li style={{ listStyle: 'inherit' }}>Supabase</li>
              <li style={{ listStyle: 'inherit' }}>Clerk</li>
              <li style={{ listStyle: 'inherit' }}>PLC</li>
            </div>
            <p className='aboutme mt-2'>Ana yeteneklerin dışında bahsedecek olursak iyi bir gözlemciyimdir,
              takım ve organizasyonlara adapte olmakta zorluk çekmek
              kayzen çalışmalarımı işim adına yapmaktan gurur duyarım okuduğun için teşekkür ederim.</p></Col>
        </Col>
      </Row>
    </Container>

  );
}

export default App;
