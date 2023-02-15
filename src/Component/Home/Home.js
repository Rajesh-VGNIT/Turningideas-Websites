import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
   
  };
  return (
    <div className='hom'>
    <section>
     <div className='hom1'>
      <h1>We are co-founders to build your technology start-up from scratch.</h1>
     </div>
    </section>

    {/*======================Step2=======================*/}
    <section>
     <div className='hom2'>
       <button  type='button'>STARTUP LAB</button>
       <div className='hom3'>
           <div className='hom3_1'>
               <button className='but0'  type="button">KNOW MORE</button>
             </div>
        <div className='hom3_2'>
             <Link to="https://www.f6s.com/turningideasincubator1/about">
               <button className='but0' type='button'>Apply for India Accelerator</button>
            </Link>
        </div>
       </div>
     </div>
    </section>
    {/*======================Step4=======================*/}
    <section>
     <div className='hom4'>
      <h1>WANT TO BUILD <br/>YOUR STARTUP <br/>WITH US</h1>
      <Link to="/Startups">
        <button className='but0' type='button'>BUILD WITH US</button>
       </Link>
     </div>
    </section>
     {/*======================Step5=======================*/}
     <section>
     <div className='hom5'>
       <Link to="/Enterprise">
          <button type='button'>ENTERPRISE</button>
       </Link>
      <div className='hom5_1'>
        <h1>WANT TO ACCELERATE<br/> YOUR ENTERPRISE<br/> GROWTH</h1>
        <button className='but0' type='button'>INNOVATE WITH US</button>
       </div>
     </div>
    </section>
    {/*======================Step6=======================*/}
    <section>
    <div className='hom6'>
     <button type='button'>PORTFOLIO</button>
     <div className='hom6_1'>
       <h1>VENTURES <br/>WE'VE BUILT</h1>
      </div>
    </div>
   </section>
    {/*======================Step7 Slider=======================*/}
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <div class="row m-0">
        <div class="col-md-6 row m-0">
           <div class="col-md-6 d-none d-md-block">
             <img src="/Images/your_space1.jpg" class="img-fluid" width="200px" alt="wel" />
          </div>
      <div class="col-md-6 mt-md-5 pt-md-5 pb-5">
        <img src="/Images/your_space2.jpg" class="img-fluid" alt="wel2"/>
      </div>
    </div>
        <div class="col-md-6 text-center">
							<img src="/Images/yourspace.png" alt="yourspace" class="w-75"/>
							<p class="venture_info_content">
							<i>India's premier student housing brand. Award winning student experience.</i>
							</p>
				</div>
      </div>
    </div>
    {/*========Step2========== */}
    <div class="carousel-item" data-bs-interval="2000">
      <div class="row m-0">
         <div class="col-md-6 row m-0">
             <div class="col-md-6 d-none d-md-block">
               <img src="/Images/swagbag1.jpg" class="img-fluid" alt="wel"/>
             </div>
            <div class="col-md-6 mt-md-5 pt-md-5 pb-5">
              <img src="/Images/swagbag2.jpg" class="img-fluid" alt='wel'/>
           </div>
       </div>
       <div class="col-md-6 text-center">
          <img src="/Images/SwagBag.png" alt="swagbag" class="w-75" />
          <p class="venture_info_content">
          <i>We discover what gets liked in your retail store</i>
          </p>
       </div>
     </div>
    </div>
     {/*========Step3========== */}
    <div class="carousel-item" data-bs-interval="2000" >
      <div class="row m-0">
         <div class="col-md-6 row m-0 pb-5">
            <div class="col-md-12">
                <img src="/Images/easymygst.jpg" class="img-fluid" alt='wel' />
            </div>
         </div>
         <div class="col-md-6 text-center">
           <img src="/Images/EaseMyGST.png" class="w-75" alt='wel'/>
          <p class="venture_info_content">
           <i>We make GST Filing easy for you using technology</i>
           </p>
         </div>
       </div>
    </div>
    {/*========Step4========== */}
    <div class="carousel-item" data-bs-interval="2000">
    <div class="row m-0">
    <div class="col-md-6 row m-0">
      <div class="col-md-6">
        <img src="/Images/realtell1.jpeg" class="img-fluid" alt="wel"/>
      </div>
      <div class="col-md-6 mt-md-5 pt-md-5 pb-5 d-none d-md-block">
        <img src="/Images/realtell2.jpeg" class="img-fluid" alt='wel'/>
      </div>
    </div>
    <div class="col-md-6 text-center">
      <img src="/Images/RealTell.png" alt="wel" class="w-75"/>
      <p class="venture_info_content">
        <i>Gamifying offline retail to drive store footfall</i>
      </p>
    </div>
</div>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{/*======================Step8 Slider=======================*/}
  <section>
    <div className='home8'>
    <h1>GLOBAL <br/> PARTNERS</h1>
    <Slider {...settings}>
    <div>
    <img src="/Images/aws.png"  alt="..." />
    </div>
    <div>
    <img src="/Images/elephant.png"  alt="..." />
    </div>
    <div>
    <img src="/Images/google.png"  alt="..." />
    </div>
    <div>
    <img src="/Images/ideafoundry.png"  alt="..." />
    </div>
    <div>
    <img src="/Images/mbr.png"  alt="..." />
    </div>
    <div>
    <img src="/Images/mqdc.png" style={{ width: 200 }}  alt="..." />
    </div>
    <div>
    <img src="/Images/tbdc.png" style={{ width: 200 }} alt="..." />
    </div>
  </Slider>
    </div>
   
  </section>
  {/*======================Step9 Slider=======================*/}
     <section>
     
     </section>



   
    

    
    </div>
  )
}

export default Home;