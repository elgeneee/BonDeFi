import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import { transactionContext } from './components/transactionContext'

function App() {
  const [address, setAddress] = useState("4983467");
  const [amount, setAmount] = useState(0);
  const [keyword, setKeyword] = useState("null");
  const [message, setMessage] = useState("hello ites me");
  
  return (
    <div className="min-h-screen">
    <div className="bg-[#0D182A]">
    <Navbar/>
    <transactionContext.Provider value={{address, setAddress, amount, setAmount, keyword, setKeyword, message, setMessage}}>
    <Welcome/>
    </transactionContext.Provider>

    </div>
    
    </div>
  )
}

export default App
