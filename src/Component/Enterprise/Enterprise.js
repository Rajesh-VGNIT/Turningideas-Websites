import React from 'react'
import './enterprise.css';
import { Link } from 'react-router-dom';

const Enterprise = () => {
  return (
    <div className=' enterprise'>
    <section>
    <div className=' enterprise1'>
     <h1>WE ACCELERATE<br/> GROWTH FOR <br/>ENTERPRISES</h1>
     <h2>with innovation</h2>
     <button className='button2'>KNOW MORE</button>
    </div>
   </section>
  {/*======================Step2=======================*/}
      <section>
      <div className=' enterprise2'>
       <div className=' enterprise2_1'>
        <h1>WHAT?</h1>
        <p>Struggling to find your enterprise team or scale your Idea? Don’t worry we can be your 
         partners.</p>
         <p>
         We discover innovative solutions to your current problems for immediate business growth. 
          </p>
       </div>

       <div className=' enterprise2_1'>
         <h1>HOW?</h1>
         <p>You can leave all the thinking and ideation to us.</p>
           <p>We provide out of the box solutions to your most difficult problems by finding 
            startups that brings in new ideas or disruptive product development, we have programs 
             for all.</p>
       </div>
      </div>
      </section>
      <Link to="/Innovatewithus">
         <button className='button2'>INNOVATE WITH US</button>
      </Link>

      {/*======================Step3=======================*/}

      {/*=========Step1=========*/}
      <section>
        <div className=' enterprise3'>
         <div className=' enterprise3_1'>
          <img src='/Images/1.png' alt='wel'/>
         </div>
         <div className=' enterprise3_1'>
           <h1>01.  DISCOVERY</h1>
           <p>Understand current business issues and identify areas for disruption. Discover to 
            find the next level innovative solutions for your business.</p>
         </div>
         
        </div>
      </section>
  {/*=========Step2=========*/}
      <section>
        <div className=' enterprise3'>
         <div className=' enterprise3_1'>
          <img src='/Images/2.png' alt='wel'/>
         </div>
         <div className=' enterprise3_1'>
           <h1>02. OUTREACH</h1>
           <p>Create focused cohorts and practice startup methodologies to identify problems and 
            validate the proposed solution. Expert mentors lead targeted solutions.</p>
         </div>
         
        </div>
      </section>
 {/*=========Step3=========*/}
      <section>
        <div className=' enterprise3'>
         <div className=' enterprise3_1'>
          <img src='/Images/3.png' alt='wel'/>
         </div>
         <div className=' enterprise3_1'>
           <h1>03. EVALUATION</h1>
           <p>Evaluate proposed solutions , organize pitches for enterprise core teams and help 
            startups with valuable feedbacks to finalize their solution offerings.</p>
         </div>
         
        </div>
      </section>
      {/*=========Step4=========*/}
      <section>
        <div className=' enterprise3'>
         <div className=' enterprise3_1'>
          <img src='/Images/4.png' alt='wel'/>
         </div>
         <div className=' enterprise3_1'>
           <h1>04.ENGAGEMENT</h1>
           <p>Engage and Integrate startups to drive innovation with enterprise. Work closely 
            with business teams for fast adoption of disruptive solutions.</p>
         </div>
         
        </div>
      </section>
      <Link to="/Innovatewithus">
         <button className='button2'>INNOVATE WITH US</button>
      </Link>
      {/*======================Step4 Slider=======================*/}
      {/*======================Step5=======================*/}
      <section>
       <div className=' enterprise5'>
         <h1>INTERESTED?</h1>
         <h2>Looking to innovate? Let's work together</h2>
         <div className=' enterprise5_1'>
           <Link to="/Innovatewithus">
              <button className='button2'>INNOVATE WITH US</button>
           </Link>
         </div>
       </div>
      </section>
      



    </div>
  )
}

export default Enterprise;