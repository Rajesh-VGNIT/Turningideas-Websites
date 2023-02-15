import React from 'react'
import './startups.css';
import { Link } from 'react-router-dom';

const Startups = () => {
  return (
    <div className='startup'>
    <section>
    <div className='startup1'>
     <h1>WE PARTNER WITH <br/>FOUNDERS</h1>
     <h2>to build ventures</h2>
     <button className='button1'>KNOW MORE</button>
    </div>
   </section>
  {/*======================Step2=======================*/}
      <section>
      <div className='startup2'>
       <div className='startup2_1'>
        <h1>WHAT?</h1>
        <p>Struggling to find your startup team or scale your Idea? Don’t worry we can be your 
         partners.</p>
         <p>We bring an experience like no other. From validation of your ideas to help in 
          developing your product,sales acceleration and raising capital, we help co-build 
           scalable startups.</p>
       </div>

       <div className='startup2_1'>
         <h1>HOW?</h1>
         <p>With dream team of complementing skills around technology, sales, strategy and years 
          of experience, we have learned how to rapidly validate, refine, and build new 
           businesses.</p>
           <p>We work with you as your co-founding team and put ideas through rigorous process to 
            make it happen.</p>
       </div>
      </div>
      </section>
      <Link to="/Buildwithus">
        <button className='button1'>BUILD WITH US</button>
      </Link>

      {/*======================Step3=======================*/}

      {/*=========Step1=========*/}
      <section>
        <div className='startup3'>
         <div className='startup3_1'>
          <img src='/Images/1.png' alt='wel'/>
         </div>
         <div className='startup3_1'>
           <h1>01. IDEATION</h1>
           <h2><i>It's not about the idea</i></h2>
           <p>All Ideas should start with real business problem. We aim to build world-changing 
            commercially viable ventures that customers love from Ideas which can be yours or 
             ours.</p>
         </div>
         
        </div>
      </section>
  {/*=========Step2=========*/}
      <section>
        <div className='startup3'>
         <div className='startup3_1'>
          <img src='/Images/2.png' alt='wel'/>
         </div>
         <div className='startup3_1'>
           <h1>02. VALIDATION</h1>
           <h2><i>Because we know 92% ideas fail</i></h2>
           <p>Before we put our heads-down and start investing in venture we put an idea through 
            its paces, testing customer demand, technical feasibility, business model, unit 
             economics, market dynamics, investor interest, and more.</p>
         </div>
         
        </div>
      </section>
 {/*=========Step3=========*/}
      <section>
        <div className='startup3'>
         <div className='startup3_1'>
          <img src='/Images/3.png' alt='wel'/>
         </div>
         <div className='startup3_1'>
           <h1>03. SALES ACCELEARTION</h1>
           <h2><i>It's difficult to build, It's challenging to sell</i></h2>
           <p>With our decades of sales experience and strong access to corporate C-level 
            decision-maker, we help accelerate your sales.Be it your future customers, partners 
             or resellers, we connect you with each necessary stakeholders.</p>
         </div>
         
        </div>
      </section>
      {/*=========Step4=========*/}
      <section>
        <div className='startup3'>
         <div className='startup3_1'>
          <img src='/Images/4.png' alt='wel'/>
         </div>
         <div className='startup3_1'>
           <h1>04. FUNDRAISE</h1>
           <h2><i>We connect right ventures to right investors</i></h2>
           <p>Our global Investor and incubator partner ecosystem helps us to raise funds for our 
            ventures. We help create commercially viable businesses which investors are keen to 
             invest.</p>
         </div>
         
        </div>
      </section>
      <Link to="/Buildwithus">
        <button className='button1'>BUILD WITH US</button>
      </Link>
      {/*======================Step4 Slider=======================*/}
      {/*======================Step5=======================*/}
      <section>
       <div className='startup5'>
         <h1>INTERESTED?</h1>
         <h2>Have an idea? Let's work together</h2>
         <div className='startup5_1'>
         <Link to="/Buildwithus">
            <button className='button1'>BUILD WITH US</button>
         </Link>
         </div>
       </div>
      </section>
      



    </div>
  )
}

export default Startups;