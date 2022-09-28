import React,{useEffect} from 'react'
import aboutus from './Images/web.jpg'
import Aos from 'aos'
import "aos/dist/aos.css";



const Aboutus = () => {


useEffect(() => {
  Aos.init({duration:2000});
}, []);

  return (
    <div id='aboutus'>
      <div className='container-fluid' style={{backgroundColor:"rgb(28 29 36)"}}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='row '>
          <br></br>
          <div className='col-md-6'>
            <center>

              <img src={aboutus} alt="anoutus" className='img-fluid image-size-about img-load zoom ' />
            </center>
          </div>
          <div  className='col-md-6 text-white' >

          <div data-aos="fade-up" >

            <p className=" font-size-slider2 mt-4 logo-letter"> ABOUT <span className='text-white'>ME</span></p>
    
            <p className="gap h5">My Name is Dhananjay Aware . I completed Bachelor of  Application From TMV<br></br>
            ,pune. I am currently learning Full-Stack (MERN) Web development<br></br>
            I want to go into Web Development and Blockchain development field.<br></br> 
            Always looking for some awesome folks to connect with and <br></br> 
            learn from them.I'm also Doing Freelancing and i have Freelancing <br></br>
            expirence 
            </p>
              <button className='button-cover simple-button zoom'>Know More</button>
          </div>

          </div>
          
        </div>

        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}

export default Aboutus