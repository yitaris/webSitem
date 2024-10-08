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
    const previousTouchY = useRef(0); // useRef ile previousTouchY tanımlandı
    const [scaleValue, setScaleValue] = useState(window.innerWidth < 768 ? 3.5 : 4); // Başlangıç değerleri
    const [positionY, setPositionY] = useState(window.innerWidth < 768 ? -2 : -3);

    useEffect(() => {
        const handleResize = () => {
            // Ekran boyutuna göre ölçek ve pozisyon değerlerini güncelle
            setScaleValue(window.innerWidth < 768 ? 3.5 : 4);
            setPositionY(window.innerWidth < 768 ? -2 : -3);
        };

        // Pencere boyutu değiştiğinde handleResize'ı dinle
        window.addEventListener('resize', handleResize);

        // Temizleme işlemi
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (scene) {
            onLoaded();
            // Modelin Y eksenindeki pozisyonunu güncelle
            modelRef.current.position.y = positionY;

            // Modelin ölçeğini ayarla
            modelRef.current.scale.set(scaleValue, scaleValue, scaleValue);

            // "Animation" adındaki animasyonu kontrol et ve oynat
            if (actions && actions['Animation']) {
                actions['Animation'].play(); // Animasyonu oynat
                console.log('"Animation" animasyonu oynatılıyor.');
            } else {
                console.error('Animasyon bulunamadı!');
            }
        }
    }, [scene, onLoaded, actions, scaleValue, positionY]); // scaleValue ve positionY eklendi

    // Scroll olayını dinle
    useEffect(() => {
        const handleScroll = (event) => {
            const delta = event.deltaY * 0.001; // Scroll miktarını ayarla
            if (modelRef.current) {
                modelRef.current.position.z += delta; // Z ekseninde yakınlaştır
                // Z pozisyonunu sınırlayın
                if (modelRef.current.position.z < 0) {
                    modelRef.current.position.z = 0;
                } else if (modelRef.current.position.z > 8.5) {
                    modelRef.current.position.z = 8.5;
                }
                // Model Z pozisyonu 8 veya daha büyük olduğunda "hakkımda" sayfasını göster
                if (modelRef.current.position.z >= 8) {
                    setShowAboutMe(true); // "Hakkımda" sayfasını göster
                } else {
                    setShowAboutMe(false); // "Hakkımda" sayfasını gizle
                }
            }
        };

        // Dokunma olayını dinle
        const handleTouchStart = (event) => {
            // İlk dokunuşta Y pozisyonunu ayarlayın
            if (event.touches.length > 0) {
                previousTouchY.current = event.touches[0].clientY; // İlk dokunuşu sakla
            }
        };

        const handleTouchMove = (event) => {
            if (event.touches.length > 0) {
                const touchY = event.touches[0].clientY;
                const delta = previousTouchY.current - touchY; // Kaydırma farkı
                previousTouchY.current = touchY; // Güncelle
                if (modelRef.current) {
                    modelRef.current.position.z += delta * 0.01; // Z ekseninde yakınlaştır
                    // Z pozisyonunu sınırlayın
                    if (modelRef.current.position.z < 0) {
                        modelRef.current.position.z = 0;
                    } else if (modelRef.current.position.z > 8) {
                        modelRef.current.position.z = 8;
                    }
                    // Model Z pozisyonu 8 veya daha büyük olduğunda "hakkımda" sayfasını göster
                    if (modelRef.current.position.z >= 8) {
                        setShowAboutMe(true); // "Hakkımda" sayfasını göster
                    } else {
                        setShowAboutMe(false); // "Hakkımda" sayfasını gizle
                    }
                }
            }
        };

        // Scroll olayını ekle
        window.addEventListener('wheel', handleScroll);
        window.addEventListener('touchstart', handleTouchStart); // Dokunma başlangıcını ekle
        window.addEventListener('touchmove', handleTouchMove); // Dokunma hareketini ekle

        // Temizleme işlemi
        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart); // Dokunma başlangıcını temizle
            window.removeEventListener('touchmove', handleTouchMove); // Dokunma hareketini temizle
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
