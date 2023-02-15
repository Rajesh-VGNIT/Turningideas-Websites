import React from 'react'
import './innovatewithus.css';
import ReCAPTCHA from "react-google-recaptcha";


const Innovatewithus = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
      }
  return (
    <div className="contact">
     <h1>INNOVATE WITH US</h1>
    <div id="contact_with_us_form">
    <div class="container pb-md-5 pb-2">
        <div class="row m-0">
            <div class="col-md-8 offset-md-2 p-md-5">
            
            <form action="#" method="POST" name="InnovateWithUsForm" id="InnovateWithUsForm">
            <div class="form-group">
             <label for="cname" class="form_label">Company Name</label>
             <input type="text" class="form-control" id="cname" name="Company Name" required />
         </div>
         <div class="form-group">
             <label for="cphone" class="form_label">Company Contact</label>
             <input type="tel" id="cphone" class="form-control" name="Company Contact" required />
         </div>
         <div class="form-group">
             <label for="cemail" class="form_label">Email Address</label>
             <input type="email" class="form-control" id="cemail" name="Email Address" required />
         </div>
         <div class="form-group">
             <label for="phone" class="form_label">Contact Number</label>
             <input type="tel" id="phone" class="form-control" name="Contact Number" required />
         </div>
         <div class="form-group">
             <label for="problem" class="form_label">Current business problem</label>
             <textarea class="form-control" rows="7" id="problem" name="Current business problem" required></textarea>
         </div>
         <div class="form-group">
             <label for="why_innovation" class="form_label">Why innovation is important for you?</label>
             <textarea class="form-control" rows="7" id="why_innovation" name="Why innovation is important for you?" required></textarea>
         </div>
         {/*<!-- Recaptcha -->*/}
        
         <div className='recaptcha'>
             <ReCAPTCHA
               sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
               onChange={onChange}
              />
         <div class="recaptcha_required_error text-danger" style={{display: "none"}}></div>
        </div>
    
       <button type="submit" class="btn hvr-sweep-to-right my-3" aria-label="submit_innovate_with_us">SEND</button>
     </form>
         
        
      
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Innovatewithus;