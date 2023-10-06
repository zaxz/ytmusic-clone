import React, {useState} from 'react';
import Beranda from "./pages/Beranda";
import Eksplorasi from "./pages/Eksplorasi";
import NavbarAtas from "./components/NavbarAtas";
import NavbarBawah from "./components/NavbarBawah";

function App() {
  const [isBeranda, setBeranda] = useState(true);
  const [isEksplorasi, setEksplorasi] = useState(false);
  const [isKoleksi, setKoleksi] = useState(false);
  
  const toggleBeranda=()=>{
    setBeranda(true);
    setEksplorasi(false);
    setKoleksi(false);
  }
  const toggleEksplorasi=()=>{
    setBeranda(false);
    setEksplorasi(true);
    setKoleksi(false);
  }
  const toggleKoleksi=()=>{
    setBeranda(false);
    setEksplorasi(false);
    setKoleksi(true);
  }
  
  return (
    <>
      <NavbarAtas />
      {isBeranda && <Beranda/>}
      {isEksplorasi && <Eksplorasi/>}
      <NavbarBawah toggleBeranda={toggleBeranda} toggleEksplorasi={toggleEksplorasi}/>
    </>
  )
}

export default App; 