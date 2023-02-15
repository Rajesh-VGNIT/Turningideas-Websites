//import './App.css';
 import Home from './Component/Home/Home';
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startups from './Component/Startups/Startups';
import Enterprise from './Component/Enterprise/Enterprise';
import Career from './Component/Career/Career';
import Blogs from './Component/Blogs/Blogs';
import Faq from './Component/FAQ/Faq';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import ContactUs from './Component/Contact Us/ContactUs';
import Buildwithus from './Component/Startups/BUILD WITH US/Buildwithus';
import Innovatewithus from './Component/Enterprise/Innovate With Us/Innovatewithus';
import JobApplicationform from './Component/Career/Job Application Form/JobApplicationform';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/startups" element={<Startups/>}></Route>
      <Route path="/enterprise" element={<Enterprise/>}></Route>
      <Route path="/carrer" element={<Career/>}></Route>
      <Route path="blogs" element={<Blogs/>}></Route>
      <Route path="faq" element={<Faq/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="contactus" element={<ContactUs/>}></Route>

       {/*-----------------Button Link------------------*/}
      <Route path="buildwithus" element={<Buildwithus/>}></Route>
      <Route path="innovatewithus" element={<Innovatewithus/>}></Route>
      <Route path="jobapplicationform" element={<JobApplicationform/>}></Route>
      

      </Routes>
      <Footer />
      </BrowserRouter>

     
    </div>
  );
}

export default App;
