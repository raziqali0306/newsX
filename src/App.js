import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Register from "./components/register";

function App() {

  const [selectedTopic, setSelectedTopic] = useState('');
  
  return (
    <div className='bg-primaryGray min-h-screen font-roboto'>
      <div className='h-[92px]'>
        <Navbar setSelectedTopic={setSelectedTopic}/>
      </div>
      <div className='mx-0 md:mx-8 lg:mx-32 xl:mx-56 p-10'>
        <div className="mb-32">
          <Routes>
            <Route path="/" element={<Home selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;