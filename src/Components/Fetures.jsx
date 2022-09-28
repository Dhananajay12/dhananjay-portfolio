import React, { useEffect } from 'react'

import html from './Images/html.png'
import css from './Images/css.png'
import js from './Images/js.png'
import figma from './Images/figma.png'
import nodejs from './Images/nodejs.png'
import git from './Images/git.png'
import react from './Images/react.png'

import mongo from './Images/mongo.png'

// import { BiDumbbell } from 'react-icons/bi'
// import { GiWeightLiftingUp } from 'react-icons/gi'
// import { GiMuscleUp } from 'react-icons/gi'
// import { GiGymBag } from 'react-icons/gi'
import Aos from 'aos'
import "aos/dist/aos.css";

const Fetures = () => {



    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div id='features'>
            <div className='container-fluid color-for-container'>
                <br></br>


                {/* <center>       <p className='text-white font-size-slider2 '>Skills</p></center> */}




                <div className=''>


                    <div className='row center3'>
                        <div className='col-md-1 center2 text-white mx-4'>
                        
                        <div  data-aos="fade-left">
                            <img src={html} alt='html' ></img><h5> HTML </h5>
                        </div>
                        </div>
                        <div className='col-md-1 center2 text-white  mx-4' >
                        <div  data-aos="fade-left">

                            <img src={css} alt='css' ></img>
                            <h5>CSS</h5>
                        </div>
                        </div>
                        <div className='col-md-1 center2 text-white  mx-4'>
                        <div  data-aos="fade-left">

                            <img src={react} alt='css' ></img><h5>React</h5>
                        </div>
                        </div>
                        <div className='col-md-1 center2 text-white  mx-4'>
                        <div  data-aos="fade-left">
                            <img src={js} alt='css' ></img><h5>JS</h5>
                            
                        </div>
                        </div>
                        <div className='col-md-1 center2  text-white  mx-4'>
                        <div  data-aos="fade-left">

                            <img src={nodejs} alt='css' ></img> <h5>nodeJS</h5>
                        </div>
                        </div>
                        <div className='col-md-1 center2 text-white mx-4'>
                        <div  data-aos="fade-left">

                            <img src={mongo} alt='css' style={{ width: "70px" }} className='mt-3 '></img> <h5>MongoDB</h5>
                        </div>
                        </div>
                        <div className='col-md-1 center2 text-white mx-4'>
                        <div  data-aos="fade-left">

                            <img src={figma} alt='css'></img> <h5> Figma </h5>
                        </div>
                        </div>

                    </div>

                </div>

                <br></br>

                {/* <div className='row mt-5'>


                    <div className='col-md-3 zoom3 padding-for-col' data-aos="fade-up">

                        <center>  <BiDumbbell className='size-icon'></BiDumbbell>
                            <br></br>

                        </center>
                        <center>
                            <br></br>
                            <br></br>
                            <h2 className="text-white">Flex Your Muscle</h2>
                            <p className="text-secondary">Leorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec in leo tempus urna viverra volutpat. Proin odio tellus</p>


                        </center>
                    </div>
                    <div className='col-md-3 zoom3 padding-for-col'  data-aos="fade-right">
                        <center>

                            <GiWeightLiftingUp className='size-icon'></GiWeightLiftingUp>

                        </center>
                        <center>

                            <br></br>
                            <br></br>
                            <h2 className="text-white">Flex Your Muscle</h2>
                            <p className="text-secondary">Leorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec in leo tempus urna viverra volutpat. Proin odio tellus</p>
                        </center>
                    </div>

                    <div className='col-md-3 zoom3 padding-for-col'  data-aos="fade-left">
                        <center>

                            <GiMuscleUp className='size-icon'></GiMuscleUp>

                        </center>
                        <center>
                            <br></br>
                            <br></br>
                            <h2 className="text-white">Flex Your Muscle</h2>
                            <p className="text-secondary">Leorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec in leo tempus urna viverra volutpat. Proin odio tellus</p>
                        </center>
                    </div>
                    <div className='col-md-3 zoom3 padding-for-col'  data-aos="fade-down">
                        <center>

                            <GiGymBag className='size-icon'></GiGymBag>

                        </center>
                        <center>
                            <br></br>
                            <br></br>
                            <h2 className="text-white">Flex Your Muscle</h2>
                            <p className="text-secondary">Leorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec in leo tempus urna viverra volutpat. Proin odio tellus</p>
                        </center>
                    </div>

                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br> */}


            </div>


        </div>
    )
}

export default Fetures