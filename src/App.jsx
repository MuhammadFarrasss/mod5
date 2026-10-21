import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import panel from  './components/panel'

const NAMA_PANGGILAN = 'Farras'
const NIM = 42
const gayaJudul = {
  color: '#1f3a5f',
  fontSize: '20px',
  fontWeight: '700px',
  letterSpacing: '0.50px'
}
function App() {
  const jam = 9
  return (
    <>
      <h1 className = "judul" style = {gayaJudul} >judul kantin {NAMA_PANGGILAN}</h1>
      <p>saldo awal kartu kantin = Rp. {NIM * 1000}</p>
      <p>{jam < 12? 'selamat pagi' : 'selamat siang'}</p>
      <button disabled>bayar</button>
    </>
  )
}

export default App
