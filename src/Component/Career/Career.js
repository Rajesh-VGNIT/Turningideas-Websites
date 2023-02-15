import React from 'react'
import './career.css'
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <div className="carrer">
    <section>
    <div className='carrer1'>
        <h1>FLY<br/> WITH US</h1>
          <div className='carrer2_1'>
             <button >KNOW MORE</button>
          </div>
    </div>
   </section>
  {/*======================Step2=======================*/}
   <section>
    <div className='carrer2'>
     <p>We believe that it takes a certain type of person to build a venture. We have a set of 
      values that guide who we hire, and how we approach venture building:</p>
      <h2>Only scroll further if you:</h2>
      <ul>
        <li>If you are not looking for fixed pay every month and working to create long term 
         wealth</li>
        <li>Never stop looking for a better way of doing things; be curious</li>
        <li>Building businesses is fast-paced and fluid; be nimble</li>
        <li>Sharing knowledge and networks builds better businesses; be generous</li>
        <li>The best ideas aren’t always your own; seek diversity</li>
        <li>Decisions should be driven by analytics and customer insight; embrace data</li>
      </ul>
       <div className='carrer2_1'>
        <h1>OPENINGS</h1>
        <h2>TECHNOLOGY LEAD - (CO FOUNDER)</h2>
        <h4>This is Co-founder/ Entrepreneur role with no fixed salary and 
         only for people looking 
         to create long term wealth. A unique opportunity to join a core team that help convert 
          startup Ideas to market ready products. As part of the team, you will be continually 
           challenged and have an opportunity to contribute towards creating and scaling new 
            startup Ideas working closely with the core team partners and startup founders</h4>
            <Link to="/JobApplicationform">
                <button>WORK WITH US</button>
            </Link>
       </div>

       <div className='carrer2_1'>
       <h2>FOUNDER IN RESIDENCE (CEO)</h2>
       <h4>Ready to work on a big idea with the support and backing of Turning Ideas Ventures? 
        This is a opportunity designed to match unsuccessful/successful entrepreneurs with 
         business ideas that we believe have the potential to be industry-changing.</h4>
         <Link to="/JobApplicationform">
           <button>WORK WITH US</button>
         </Link>
      </div>
      <div className='carrer2_1'>
      <h2>FOUNDER IN RESIDENCE (CTO)</h2>
      <h4>Ready to work on a big idea with the support and backing of Turning Ideas Ventures? 
       This is a opportunity designed to match unsuccessful/successful entrepreneurs with 
        business ideas that we believe have the potential to be industry-changing.</h4>
        <Link to="/JobApplicationform">
           <button>WORK WITH US</button>
        </Link>
     </div>

    </div>
   </section>
   
  
  </div>
  )
}

export default Career;