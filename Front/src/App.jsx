import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <header className='bg-dark text-white p-4 align-items-center justify-content-center top-0'>
      <h1 className='display-6'>Gestor de tareas</h1>
    </header>
      <div>
        <a href="https://vite.dev" target="_blank">
          
        </a>
        
      </div>
      <div className="card row">
        <div className="card-body">
          <img src={viteLogo} className="logo" alt="Vite logo" /> 
          <h5 className="card-title">Comer</h5>
          <p className="card-text">Llevar bocadillo a la boca</p>
        </div>
      </div>
   
    </>
  )
}

export default App
