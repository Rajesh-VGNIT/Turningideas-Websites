import React from 'react'
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
    <div class="container py-md-5 py-2">
        <div class="row px-4 pb-5 w-100">
            <div class="col-md-4 py-4">
                <Link to="/About" class="py-4 footer_link">ABOUT</Link><br/><br/>
                <Link to="/ContactUs" class="py-4 footer_link" href="contact_us.html">CONTACT</Link><br/><br/>
                <Link to="/Faq" class="py-4 footer_link" href="FAQ.html">FAQ</Link><br/><br/><br/>
            </div>
            <div class="col-md-4">
                <h5 class="my-4">UK</h5>
                <a href="cdn-cgi/l/email-protection.html#c5b0ae85b1b0b7abacaba2aca1a0a4b6eba6aaa8" class="contact_links"><span class="__cf_email__" data-cfemail="4f3a240f3b3a3d21262128262b2a2e3c612c2022">rk@gmail.com</span></a>
                <h5 class="my-4">INDIA</h5>
                <a href="cdn-cgi/l/email-protection.html#9cf5f2faf3dce8e9eef2f5f2fbf5f8f9fdefb2fff3f1" class="contact_links"><span class="__cf_email__" data-cfemail="99f0f7fff6d9edecebf7f0f7fef0fdfcf8eab7faf6f4">rk@gmail.com</span></a><br/>
                <a href="tel:+91 9899536692" class="contact_links">+91 9899536692</a>
            </div>
            <div class="col-md-4">
                <h6 class="mt-4">
                    Want a growth consultation session to scale your startup or business.
                </h6>
                <div class="text-center">
                    <Link to="/ContactUs" id="book_now" href="contact_us9822.html?prev=book_now">BOOK NOW !</Link>
                    <br/><br/><br/>
                    <p class="copyright_text">© Turning Ideas Ventures. All rights reserved.</p>
                </div>
            </div>

            <div class="social_icons d-flex flex-column align-items-center px-md-3 px-2">
			<Link to={"https://www.facebook.com/turnideas"} target="_blank" class="social_icon my-md-2 my-1"><i  class="fa-brands fa-square-facebook" aria-hidden="true"></i></Link>
			<Link to={"https://twitter.com/turningidea"} target="_blank" class="social_icon my-md-2 my-1"><i class="fa-brands fa-square-twitter" aria-hidden="true"></i></Link>
			<Link to={"https://www.linkedin.com/company/turningideas-solutions/"} target="_blank" class="social_icon my-md-2 my-1"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></Link>
			<Link to={"https://www.instagram.com/turningideas/"} target="_blank" class="social_icon my-md-2 my-1"><i class="fa-brands fa-instagram" aria-hidden="true"></i></Link>
		</div>
        </div>
    </div>
</div>
  )
}

export default Footer;