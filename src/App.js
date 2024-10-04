import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profilPic from './snapBitmoji.png';

function App() {
  return (
    <Container
      fluid
      className='d-flex align-items-center justify-content-center'
      style={{height:'100vh', margin: 0, padding: 0 }}
    >
      <Row style={{alignItems:'center',justifyContent:'center'}}>
        <Row className='g-3 m-0 p-0' style={{height:'50%',alignItems:'stretch',justifyContent:'center'}}>
          <Col xs={12} lg={8} className='p-0' style={{}}>
            <div class="row g-3 m-0" style={{height:'100%'}}>
              <div class="col-lg-12 m-0" style={{}}>
                <div class="box" style={{backgroundColor:'#181C14',height:'100%'}}>
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
                      <div class='box' style={{backgroundColor:'#181C14',height:'100%'}}>
                        <h2>sa2</h2>
                      </div>
                    </div>
                    <div class='col-lg-8 ' style={{}}>
                      <div style={{height:'100%'}}>
                        <div class='row g-3 m-0' style={{height:'100%'}}>
                          <div class='box col-lg-12 m-0' style={{backgroundColor:'#181C14',padding:20}}>
                            <h2 class=''>sa3</h2>
                          </div>
                          <div class='col-lg-12 p-0' style={{}}>
                            <div class='row g-3' style={{height:'100%'}}>
                              <div class='col-lg-6' style={{height:'100%'}}>
                                <div class='box' style={{backgroundColor:'#181C14',height:'100%'}}>
                                  <h2 class=''>sa3</h2>
                                </div>
                              </div>
                              <div class='col-lg-6' style={{height:'100%'}}>
                                <div class='box' style={{backgroundColor:'#181C14',height:'100%'}}>
                                 <h2>sa</h2>
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
            <div class='box'style={{backgroundColor:'#181C14',height:'100%'}}>
              <h2>sa5</h2>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>

  );
}

export default App;
