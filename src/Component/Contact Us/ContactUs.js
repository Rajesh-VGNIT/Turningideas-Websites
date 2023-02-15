import React from 'react'
import './contactus.css';
import ReCAPTCHA from "react-google-recaptcha";


const ContactUs = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
      }
  return (
    <div className="contact">
     <h1>CONTACT US</h1>
    <div id="contact_with_us_form">
    <div class="container pb-md-5 pb-2">
        <div class="row m-0">
            <div class="col-md-8 offset-md-2 p-md-5">
                <form onSubmit={"sendEmail(); reset(); return false;"}>
                       <div class="form-group">
                        <label for="fname" class="form_label">First Name</label>
                        <input type="text" class="form-control" id="fname" name="First Name" required />
                    </div>
                    <div class="form-group">
                        <label for="lname" class="form_label">Last Name</label>
                        <input type="text" class="form-control" id="lname" name="Last Name" required />
                    </div>
                    <div class="form-group">
                        <label for="email" class="form_label">Email Address</label>
                        <input type="email" class="form-control" id="email" name="Email Address" required />
                    </div>
                    <div class="form-group">
                        <label for="phone" class="form_label">Contact Number</label>
                        <input type="tel" id="phone" class="form-control" name="Contact Number" required="" />
                    </div>
                    <div class="form-group">
                        <label for="message" class="form_label">Message</label>
                        <textarea class="form-control" name="Message" rows="7" id="message"></textarea>
                    </div>
                    {/*<!-- Recaptcha -->*/}
                    <div className='recaptcha'>
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={onChange}
                      />
                      </div>
                    
                    
                  <button type="submit" class="btn hvr-sweep-to-right my-3" aria-label="submit_contact_us">SEND</button>
                </form>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default ContactUs;