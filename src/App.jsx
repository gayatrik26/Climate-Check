import React from 'react'
import './index.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import Temprature from './components/Temprature';
import Forecast from './components/Forecast';

function App() {
  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700 text-white'>
      <TopButtons/>
      <Inputs/>
      <TimeAndLocation/>
      <Temprature/>
      <Forecast/>
      <Forecast/>
    </div>
  )
}

export default App