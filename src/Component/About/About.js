import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='about'>
    <section>
    <div className='about1'>
     <h1>WE ARE <br/>COLLECTIVE OF <br/>ENTREPRENEURIAL<br/> PEOPLE</h1>
     <h2>helping each other build new ventures</h2>
    </div>
   </section>
    {/*============================Step2==============================*/}
    <section>
       <div className='about2'>
        <p>We co-create promising companies.<br/>
        Our companies start:<br/>
        1) with an amazing idea, or<br/>
        2) with an amazing co-founder. We ideate, research, prototype, validate, and spin-off. 
         </p>
        <p>We provide top-tier core services such as strategy , design , MVP Tech. Our companies 
         have full support: accounting, design, engineering, finance, HR, IT, and recruiting. Our 
          co-founders focus on building the business. Our core experts handle the rest.</p>
       </div>
    </section>
    {/*============================Step3==============================*/}
    <section>
     <div className='about3'>
        <h1>WHAT WE DON'T DO</h1>
        <p>• We don’t take pitches (VC)<br/>
        • We don’t take applications (accelerator)<br/>
        • We don’t move slowly</p>
        <div className='about3_1'>
         <p>The founding team of a startup, with the ambition to disrupt an industry, has three 
          main things to worry about – validating the idea, building the product, looking after 
           business operations and. Working with a venture builder means the first two are 
            largely taken care of, leaving the team to focus on rapidly building a valuable 
             business and taking it to market.</p>
        </div>
        <div className='about3_1'>
          <p>We invest our knowledge and experience, our ideas and our infrastructure. Working 
           alongside entrepreneurs and co-founders, we support our ventures from startup to scale 
            to exit, giving them access to the global networks and services they need to grow. 
             </p>
        </div>
        <div className='about3_1'>
         <p>Lastly, we digitally transform companies and provide the technological foundations 
          that allows them to stay ahead of their competition.</p>
        </div>
     </div>
    </section>
    {/*========================Step4=========================*/}
    <section>
       <div className='about4'>
        <h1>MEET OUR PILOTS</h1>

  <div id="meet_our_pilots" class="py-md-5">
  <div class="row m-0 text-center py-4">
    <div class="col-md-4">
      <img src="/Images/Ashish Mittal.jpeg" class="img-fluid pilot_img py-3" alt="Ashish 
       Mittal"/>
      <h3 class="name_heading">Ashish Mittal</h3>
    </div>
    <div class="col-md-4">
      <img src="/Images/Ashish Agarwal.jpeg" class="img-fluid pilot_img py-3" alt="Ashish 
       Agarwal" />
      <h3 class="name_heading">Ashish Agarwal</h3>
    </div>
    <div class="col-md-4">
      <img src="/Images/Himanshu Periwal.jpeg" class="img-fluid pilot_img py-3" alt="Himanshu 
       Periwal"/>
      <h3 class="name_heading">Himanshu Periwal</h3>
    </div>
  </div>
  <div class="row m-0 text-center py-4">
    <div class="col-md-4">
      <img src="/Images/Venu Gopal.jpeg" class="img-fluid pilot_img py-3" alt="Venu Gopal"/>
      <h3 class="name_heading">Venu Gopal</h3>
    </div>
    <div class="col-md-4">
      <img src="/Images/Andrew Seit.jpeg" class="img-fluid pilot_img py-3" alt="Andrew Seit"/>
      <h3 class="name_heading">Andrew Seit</h3>
    </div>
    <div class="col-md-4">
      <img src="/Images/Sumit Kanu.jpeg" class="img-fluid pilot_img py-3" alt="Sumit Kanu"/>
      <h3 class="name_heading">Sumit Kanu</h3>
    </div>
  </div>
</div>
</div>
      
    </section>


    </div>
  )
}

export default About;