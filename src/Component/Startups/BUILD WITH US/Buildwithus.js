import React from 'react'
import './buildwithus.css';
import ReCAPTCHA from "react-google-recaptcha";


const Buildwithus = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
      }
  return (
    <div className="contact">
     <h1>BUILD WITH US</h1>
    <div id="contact_with_us_form">
    <div class="container pb-md-5 pb-2">
        <div class="row m-0">
            <div class="col-md-8 offset-md-2 p-md-5">
            <form action="#" method="POST" name="BuildWithUsForm" id="BuildWithUsForm" enctype="multipart/form-data">
            <div class="form-group">
             <label for="fname" class="form_label">Founder</label>
             <input type="text" class="form-control" id="fname" name="Founder" required />
         </div>
         <div class="form-group">
             <label for="email" class="form_label">Email Address</label>
             <input type="email" class="form-control" name="Email Address" id="email" required/>
         </div>
         <div class="form-group">
             <label for="phone" class="form_label">Contact Number</label>
             <input type="tel" id="phone" class="form-control" name="Contact Number" required=""/>
         </div>
         <div class="form-group">
               <label for="stage" class="form_label">Stage</label>
                 <select class="form-control" id="stage" name="Stage" required="">
                     <option selected disabled>--select--</option>
                     <option>Idea</option>
                     <option>Validation</option>
                     <option>MVP</option>
                     <option>Funded</option>
                     <option>Scaleup</option>
                 </select>
         </div>
         <div class="form-group">
             <label for="problem" class="form_label">Problem you want to solve</label>
             <textarea class="form-control" rows="7" id="problem" name="Problem you want to solve" required></textarea>
         </div>
         <div class="form-group">
             <label for="solution" class="form_label">Your solution</label>
             <textarea class="form-control" rows="7" id="solution" name="Your solution" required></textarea>
         </div>
         <div class="form-group">
             <label for="expectations" class="form_label">Expectations from us</label>
             <textarea class="form-control" rows="7" id="expectations" name="Expectations from us" required></textarea>
         </div>
         <div class="form-group">
             <label for="pitch" class="form_label">Upload your pitch</label><br/>
             <input type="file" id="pitch"  name="Upload your Pitch" required />
         </div>
         {/*<!-- Recaptcha -->*/}
         <div className='recaptcha'>
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={onChange}
                      />
                 <div class="recaptcha_required_error text-danger" style={{display: "none"}}></div>
         </div>
         
        
       <button type="submit" class="btn hvr-sweep-to-right my-3" aria-label="submit_build_with_us_form">SEND</button>
     </form>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Buildwithus;