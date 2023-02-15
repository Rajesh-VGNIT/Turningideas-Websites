import React from 'react'
import './faq.css';
import { Link } from 'react-router-dom';

const Faq = () => {
  return (
    <div className='faq'>
          <div className='faq1'>
              <h1>A BIT<br/> MORE</h1>
          </div>
           {/*============================Step2==============================*/}
           <div className='faq2'>
           <div class="container p-md-5 py-2" id="accordionExample">
  <div class="panel panel-default">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is the difference between startup studio and incubator?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      The main difference between studio and accelerators and incubators are : the studio is a ( co ) founder and builder of startups – it’s not just about giving some money and mentoring . It’s about exploring markets , creating ideas , building them into products and companies .
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How is a venture builder different from a venture capital model?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      A venture builder brings together its resources, infrastructure, network and experience to help entrepreneurs take their ideas from conception to scale, maturity and exit. This shared ecosystem works to improve speed and likelihood of success. It differs from the classic venture capital model, where investors simply distribute capital among ideas and teams, hoping one in five or ten might make it big. Venture builders bring a lot more than just capital.
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Why should entrepreneurs work with startup studios ?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Diversification and failure tolerance : If you run a regular startup , failure means the end of the road without right market validation and team. We are an idea generation and validation engine , and we help build stuff with the help of our core team that really works. It’s easy to trash out weak ideas if you have dozens.
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      How does the startup studio model work ?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      It’s a hands-on model where experienced entrepreneurs work side by side with the company’s founders, and all businesses have access to a central pool of shared services, such as legal advice, finance expertise, talent acquisition and online marketing (all provided by the TurningIdeas Venture core team).
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      What is the commercial model of engagement with a startup studio ?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      In exchange for all this support, entrepreneurs are expected to give up a higher share of their company earlier in the process. We typically expect to take the majority stake of any company we build in return of guaranteed success to entrepreneur/founder. This model has allowed us to stay nimble and create more valuable businesses that solve real customer needs, offering a higher probability of success for all involved.
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <h2 class="accordion-header" id="headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsSix" aria-expanded="false" aria-controls="collapseSix">
      Why Investors love working with studios ?
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      One – to – many investing: one investment decision will result in equity in multiple startups.<br/>
							● Reduced impact of failure ( e.g . no loss of team , quicker recovery and restart times )<br/>
							● Higher level of control / governance  later – stage VC – s could invest in a studio to nurture their future deal – flow<br/><br/>

							Higher return for investors: A higher equity stake in startups also means that in case of exit , the returns are much bigger for the studio and their investors .<br/><br/>

							Also , it’s common to give more equity to the startup team in later fundraising stages ( from the studio’s shares ) to uphold their motivation .
      </div>
    </div>
  </div>
</div>

<div className='bttn'>
    <Link to="/Contactus">
     <a href="contact_us.html" class="hvr-sweep-to-right mx-4 btn_position" >Still have Question</a>
     </Link>
</div>


           </div>
           
     
   </div>
  )
}

export default Faq;