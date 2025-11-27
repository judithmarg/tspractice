import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { mainRoutes } from './routes/routes'
import { useRoutes } from 'react-router-dom';

function App() {
  const allRoutes = useRoutes(mainRoutes);
  return allRoutes;
}

export default App
