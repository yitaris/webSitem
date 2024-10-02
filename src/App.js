import React from 'react';
import './App.css';

function App() {
  function moveGlow(event, card) {
    const glow = card.querySelector('.glow');
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    glow.style.opacity = '1'; // Işığı görünür yap
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.5), transparent 30%)`;
  }

  function removeGlow(card) {
    const glow = card.querySelector('.glow');
    glow.style.opacity = '0'; // Işığı gizle
  }

  return (
    <div className="container">
      <div
        className="card"
        onMouseMove={(e) => moveGlow(e, e.currentTarget)} // onMouseMove event
        onMouseLeave={(e) => removeGlow(e.currentTarget)} // onMouseLeave event
      >
        <div className="glow"></div>
        <div className="content">
          <h5>Hoşgeldin</h5>
          <p>
            Merhaba 👋 Ben Tam Zamanlı Mobile App Devoloperım.
            React Native ile kullanıcı dostu ve performans odaklı mobil uygulamalar geliştirme konusunda tutkuluyum.
          </p>
        </div>
      </div>
      <div
        className="card"
        onMouseMove={(e) => moveGlow(e, e.currentTarget)} // onMouseMove event
        onMouseLeave={(e) => removeGlow(e.currentTarget)} // onMouseLeave event
      >
        <div className="glow"></div>
        <div className="content">
          <h2>Projeler</h2>
          <p>Projelerim hakkında bilgi almak için iletişime geçin.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
