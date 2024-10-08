import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import './index.css'; // Fade-in için CSS dosyası
import About from './Model.js';
function Model({ onLoaded, setShowAboutMe }) {
    const { scene, animations } = useGLTF('/box_aquarium.glb'); // GLB dosyanızın yolu
    const { actions } = useAnimations(animations, scene); // Animasyonları al

    // Modelin referansı
    const modelRef = useRef();
    // Dokunma pozisyonunu saklamak için değişken
    let previousTouchY = 0;
    useEffect(() => {
        if (scene) {
            onLoaded();
            // Modelin Y eksenindeki pozisyonunu -3 yap
            modelRef.current.position.y = -3;

            // "Animation" adındaki animasyonu kontrol et ve oynat
            if (actions && actions['Animation']) {
                actions['Animation'].play(); // Animasyonu oynat
                console.log('"Animation" animasyonu oynatılıyor.');
            } else {
                console.error('Animasyon bulunamadı!');
            }
        }
    }, [scene, onLoaded, actions]);

    // Scroll olayını dinle
    useEffect(() => {
      const handleScroll = (event) => {
          let delta;
          // Mobil cihazlarda dokunma olayını kontrol et
          if (event.type === 'wheel') {
              delta = event.deltaY * 0.001; // Mouse scroll için
          } else if (event.type === 'touchmove') {
              delta = event.touches[0].clientY - previousTouchY; // Dokunma hareketi için
              previousTouchY = event.touches[0].clientY; // Son pozisyonu güncelle
          }
  
          if (modelRef.current) {
              modelRef.current.position.z += delta; // Z ekseninde yakınlaştır
              if (modelRef.current.position.z < 0) {
                  modelRef.current.position.z = 0;
              } else if (modelRef.current.position.z > 8.5) {
                  modelRef.current.position.z = 8.5;
              }
              console.log(modelRef.current.position.z);
  
              // Model Z pozisyonu 8 veya daha büyük olduğunda "hakkımda" sayfasını göster
              if (modelRef.current.position.z >= 8) {
                  setShowAboutMe(true); // "Hakkımda" sayfasını göster
              } else {
                  setShowAboutMe(false); // "Hakkımda" sayfasını gizle
              }
          }
      };
  
      // Scroll olaylarını ekle
      window.addEventListener('wheel', handleScroll);
      window.addEventListener('touchmove', handleScroll);
  
      // Temizleme işlemi
      return () => {
          window.removeEventListener('wheel', handleScroll);
          window.removeEventListener('touchmove', handleScroll);
      };
  }, [setShowAboutMe]);

    return <primitive ref={modelRef} object={scene} scale={4} />;
}

function AboutMe({ isVisible }) {
    return (
        <div className={`about-me ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <About />
        </div>
    );
}

function App() {
    const [showAboutMe, setShowAboutMe] = useState(false); // Hakkımda sayfası görünürlüğü

    return (
        <>
            <Canvas
                style={{ height: '100vh', width: '100vw' }}
                camera={{ position: [0, 0, 5], fov: 75 }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight intensity={1} />
                <Model onLoaded={() => console.log("Model Yüklendi")} setShowAboutMe={setShowAboutMe} />
                <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
            </Canvas>
            <AboutMe isVisible={showAboutMe} />
        </>
    );
}

export default App;
