import React from 'react'
import './jobapplication.css';
import ReCAPTCHA from "react-google-recaptcha";


const Innovatewithus = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
      }
  return (
    <div className="contact">
     <h1>Job Application Form</h1>
    <div id="contact_with_us_form">
    <div class="container pb-md-5 pb-2">
        <div class="row m-0">
            <div class="col-md-8 offset-md-2 p-md-5">
            
            <form action="#" method="POST" name="WorkWithUsForm" id="WorkWithUsForm" enctype="multipart/form-data">
							<div class="form-group">
		  						<label for="role" class="form_label">Applying for role</label>
									<select class="form-control" id="role" name="Applying for role">
										<option selected disabled>--select--</option>
										<option>Technology Lead</option>
										<option>CEO</option>
										<option>CTO</option>
										<option>Marketing</option>
										<option>Sales</option>
										<option>Technology</option>
										<option>Internships</option>
									</select>
							</div>
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
								<input type="tel" id="phone" class="form-control" name="Contact Number" required />
						    </div>
							<div class="form-group">
								<label for="skills" class="form_label">Key Skills</label>
								<textarea class="form-control" rows="7" id="skills" name="Key Skills" required></textarea>
							</div>
							<div class="form-group">
								<label for="why_entrepreneur" class="form_label">Why do you want to be an entrepreneur?</label>
								<textarea class="form-control" rows="7" id="entrepreneur" name="Why do you want to be an entrepreneur?" required></textarea>
							</div>
							<div class="form-group">
								<label for="why_join" class="form_label">Why do you want to join us?</label>
								<textarea class="form-control" rows="7" id="why_join" name="Why do you want to join us?" required></textarea>
							</div>
							<div class="form-group">
								<label for="resume" class="form_label">Upload your resume</label><br/>
								<input type="file" id="resume"  name="Upload your resume" required />
							</div>
							{/*<!-- Recaptcha -->*/}
							<div className='recaptcha'>
                             <ReCAPTCHA
                              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                              onChange={onChange}
                              />
                               <div class="recaptcha_required_error text-danger" style={{display: "none"}}></div>
                            </div>
							
							
						  <button type="submit" class="btn hvr-sweep-to-right my-3" aria-label="submit_job_application">SEND</button>
						</form>
         
        
      
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Innovatewithus;