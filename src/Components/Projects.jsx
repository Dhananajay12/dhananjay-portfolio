import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";

// ------HOME AND MAID------
import service from "./projec-image-maid/service.png";
import cart from "./projec-image-maid/cart.png";

import contact from "./projec-image-maid/contact.png";
import login from "./projec-image-maid/login.png";
import order from "./projec-image-maid/order.png";
import user from "./projec-image-maid/user.png";
import home from "./projec-image-maid/home.png";

// ------ECOMMERCE------
import Ecart from "./Ecom/cart.png";
import contact1 from "./Ecom/contact.png";
import login1 from "./Ecom/login.png";
import item from "./Ecom/item.png";
import home1 from "./Ecom/home.png";
import home2 from "./Ecom/home2.png";
import home3 from "./Ecom/home2.png";
import home4 from "./Ecom/home3.png";

// ------MAps------

import add from "./maps/add.png";
import login2 from "./maps/login.png";
import register from "./maps/register.png";
import Mhome from "./maps/home.png";
import Mhome2 from "./maps/home1.png";

// ------Memories------

import Mehome from "./memories/home.png";
import Mehome1 from "./memories/home2.png";

// ------Memories------

import Fhome from "./fitness-web-project/home.png";
import Fabout from "./fitness-web-project/about.png";
import Ffeature from "./fitness-web-project/fetures.png";
// import Foffer from "./fitness-web-project/offer.png"
import Fcontact from "./fitness-web-project/contact.png";
import Ftrainer from "./fitness-web-project/trainer.png";

// ------Groco------

import Ghome from "./groco/home.png";
import Ghome1 from "./groco/home1.png";
import Ghome2 from "./groco/home2.png";
import Ghome3 from "./groco/home3.png";

// ------chat-app------

import Chat1 from "./chat-app/1.png";
import Chat2 from "./chat-app/2.png";
import Chat3 from "./chat-app/3.png";
import Chat4 from "./chat-app/4.png";
import Chat5 from "./chat-app/5.png";
import Chat6 from "./chat-app/6.png";
import Chat7 from "./chat-app/7.png";

// import required modules

const Offer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="projects">
      <div className="background3" style={{ backgroundColor: "rgb(19 20 25)" }}>
        <br></br>
        <br></br>
        <br></br>

        <div className="" data-aos="fade-up">
          <center>
            <p
              className="font-size-slider color2 logo-letter"
              style={{ fontWeight: "bold" }}
            >
              My<span className="text-white"> Letest </span> Work{" "}
            </p>
          </center>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="container-fluid container2  ">
          <div className="row">
            <div className="col-md-6">
              <div data-aos="fade-right">
                <Swiper
                  spaceBetween={10}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img
                      src={home}
                      alt="error"
                      className="img-fluid img-size "
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={service}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={cart}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={user}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={order}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={contact}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={login}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-md-6">
              <div data-aos="fade-left">
                <h5 className="text-white gap">
                  <span className="h1 color2 logo-letter">
                    {" "}
                    The home and Maid Online service Booking web app with
                    payments gateway{" "}
                  </span>{" "}
                  <ul>
                    <li>
                      {"->"} provides customers with one-day and monthly
                      services.{" "}
                    </li>
                    <li>
                      {"->"} local maids, and other candidates who can register
                      themselves on the website.
                    </li>
                    <li>
                      {"->"} Users can make payments online using a debit card
                      and{" "}
                    </li>

                    <li>
                      {"->"} <span className="color2">UPI(Razorpay). </span>
                      With <span className="color2"> RESTful API's </span> help,
                      the admin can{" "}
                      <span className="color2">
                        {" "}
                        (CURD) create, delete, read, and update{" "}
                      </span>{" "}
                      details of the products.
                    </li>
                    <li>
                      {"->"} The website is fully developed using{" "}
                      <span className="color2">
                        {" "}
                        MERN (MongoDB, Express, React, NodeJS) and REDUX.
                      </span>
                    </li>
                  </ul>
                </h5>
                <br></br>
                <a
                  href="https://home-maid-online-service.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="simple-button zoom mx-1"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/Dhananajay12/Home-and-maid-service"
                  rel="noreferrer"
                  target="_blank"
                  className="simple-button zoom mx-1"
                >
                  Website Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <br></br>

        <br></br>

        <div className="container-fluid mt-5 container2">
          <div className="row">
            <div className="col-md-6">
              <br></br>

              <div data-aos="fade-right">
                <h5 className="text-white gap">
                  <span className="h1 color2 logo-letter">
                    {" "}
                    Raze E-comm is a clothing website{" "}
                  </span>
                  <br></br>
                  <br></br>
                  <ul>
                    <li>
                      {" "}
                      {"->"} Raze E-comm is a scalable and optimize clothing
                      website where customers can buy clothes and jewelry{" "}
                    </li>
                    <li>
                      {" "}
                      {"->"} I use
                      <span className="color2"> REDUX </span> to implement{" "}
                      <span className="color2">ADD TO CART </span> functionality
                      and fetch Products With{" "}
                      <span className="color2"> RESTful API's </span>
                    </li>
                    <li>
                      {" "}
                      {"->"} The website is fully developed using{" "}
                      <span className="color2">
                        {" "}
                        HTML, CSS, Bootstrap, JavaScript,ReactJS And REDUX.
                      </span>{" "}
                    </li>
                  </ul>
                </h5>
                <br></br>
                <a
                  href="https://razeecom.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                  className="simple-button zoom mx-1"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/Dhananajay12/RazeEcom"
                  rel="noreferrer"
                  target="_blank"
                  className="simple-button zoom mx-1"
                >
                  Website Code
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <br></br>
              <div data-aos="fade-left">
                <Swiper
                  spaceBetween={10}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img
                      src={home1}
                      alt="error"
                      className="img-fluid img-size "
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={home2}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={home3}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={home4}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Ecart}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={contact1}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={login1}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={item}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="container-fluid container2  ">
          <div className="row">
            <div className="col-md-6">
              <div data-aos="fade-right">
                <Swiper
                  spaceBetween={10}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img
                      src={add}
                      alt="error"
                      className="img-fluid img-size "
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={Mhome}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Mhome2}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={login2}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={register}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-md-6">
              <br></br>
              <div data-aos="fade-left">
                <h5 className="text-white gap">
                  <span className="h1 color2 logo-letter">
                    {" "}
                    The maps travel app{" "}
                  </span>{" "}
                  <br></br>
                  <br></br>
                  <ul>
                    <li>
                      {"->"} users can pin their favorite location on the map
                      and add reviews, descriptions, and ratings.{" "}
                    </li>
                    <li>
                      {"->"} users can recommend their friends to visit the
                      place.
                    </li>
                    <li>
                      {" "}
                      {"->"} The website is fully developed using{" "}
                      <span className="color2">
                        {" "}
                        MERN (MongoDB, Express, React, NodeJS) , MAPBOX MAP API
                        and REDUX.
                      </span>
                    </li>
                  </ul>
                </h5>
                <br></br>
                {/* <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="simple-button zoom mx-1"
                >
                  Visit Website
                </a> */}
                <a
                  href="https://github.com/Dhananajay12/Mumbai-point-location"
                  rel="noreferrer"
                  target="_blank"
                  className="simple-button zoom mx-1"
                >
                  Website Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container-fluid container2  ">
          <div className="row">
            <div className="col-md-6">
              <br></br>
              <div data-aos="fade-left">
                <h5 className="text-white gap">
                  <span className="h1 color2 logo-letter">
                    {" "}
                    MERN stack Real Time scalable chat Application{" "}
                  </span>{" "}
                  <br></br>
                  <br></br>
                  <ul>
                    <li>
                      {"->"} users can chat with there firends and family in
                      real time and users can create groups for fun chat with
                      family and friend.{" "}
                    </li>
                    <li>{"->"} all message are stores in cloud database.</li>
                    <li>
                      {" "}
                      {"->"}{" "}
                      <span className="color2">
                        {" "}
                        scalable and real time chat with groups and individual.{" "}
                      </span>
                    </li>
                    <li>
                      The website is fully developed using{" "}
                      <span className="color2">
                        {" "}
                        MERN (MongoDB, Express, React, NodeJS), Socket.io and
                        REDUX.
                      </span>
                    </li>
                  </ul>
                </h5>
                <br></br>
                <a
                  href="https://github.com/Dhananajay12/MERN_chat_app"
                  rel="noreferrer"
                  target="_blank"
                  className="simple-button zoom mx-1"
                >
                  Website Code
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div data-aos="fade-right">
                <Swiper
                  spaceBetween={10}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img
                      src={Chat1}
                      alt="error"
                      className="img-fluid img-size "
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={Chat2}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Chat3}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Chat4}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Chat5}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Chat6}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Chat7}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="container-fluid mt-5 container2">
          <div className="row">
            <div className="col-md-6">
              <div data-aos="fade-left">
                <Swiper
                  spaceBetween={10}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img
                      src={Mehome}
                      alt="error"
                      className="img-fluid img-size "
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={Mehome1}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-md-6">
              <br></br>

              <div data-aos="fade-right">
                <h5 className="text-white gap">
                  <span className="h1 color2 logo-letter">
                    {" "}
                    Memories Share Web App{" "}
                  </span>
                  <br></br>
                  <br></br>
                  <ul>
                    <li>{"->"} User can stores and share memories.</li>
                    <li>
                      {"->"} I use <span className="color2">ReactJS </span> to
                      implement <span className="color2">responsive </span>{" "}
                      functionality and fetch memories from the database With{" "}
                      <span className="color2"> RESTful API's </span>
                    </li>

                    <li>
                      {"->"} The website is fully developed using{" "}
                      <span className="color2">
                        {" "}
                        MERN (MongoDB, Express, React, NodeJS), Socket.io and
                        REDUX.
                      </span>
                    </li>
                  </ul>
                  <br></br>
                  <a
                    href="https://github.com/Dhananajay12/Memories-MERN-project"
                    rel="noreferrer"
                    target="_blank"
                    className="simple-button zoom mx-1"
                  >
                    Website Code
                  </a>
                </h5>
                <br></br>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <div className="container-fluid container2  ">
          <div className="row">
            <div className="col-md-6">
              <br></br>
              <div data-aos="fade-left">
                <h5 className="text-white gap">
                  <span className="h1 color2 logo-letter">
                    {" "}
                    The Fitness-website{" "}
                  </span>{" "}
                  users can see offer of gym memberships. the website is have
                  Good UI design
                  <span className="color2">
                    {" "}
                    This project is good example of front-end web developement{" "}
                  </span>
                  The website is fully developed using{" "}
                  <span className="color2">
                    {" "}
                    HTML, CSS, Bootstrap, JavaScript,ReactJS,
                  </span>
                  <br></br>
                  visit website to see animation
                </h5>
                <br></br>
                <a
                  href="https://fitness-club-website-react.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                  className="simple-button zoom mx-1"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/Dhananajay12/Fitness-webiste-single-page"
                  rel="noreferrer"
                  target="_blank"
                  className="simple-button zoom mx-1"
                >
                  Website Code
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div data-aos="fade-right">
                <Swiper
                  spaceBetween={10}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img
                      src={Fhome}
                      alt="error"
                      className="img-fluid img-size "
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={Fabout}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Ffeature}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Ftrainer}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Fcontact}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container-fluid container2  ">
          <div className="row">
            <div className="col-md-6">
              <br></br>
              <div data-aos="fade-left">
                <Swiper
                  spaceBetween={10}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img
                      src={Ghome}
                      alt="error"
                      className="img-fluid img-size "
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src={Ghome1}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Ghome2}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Ghome3}
                      alt="error"
                      className="img-fluid img-size"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-md-6">
              <br></br>
              <br></br>
              <div data-aos="fade-right">
                <h5 className="text-white gap">
                  <span className="h1 color2 logo-letter"> The Gracco </span> is
                  Grocery store where users can see offer fresh and organnic
                  vegitables . users can buy vegitables
                  <span className="color2">
                    {" "}
                    This project is good example of front-end web developement{" "}
                  </span>
                  The website is Simple{" "}
                  <span className="color2">
                    {" "}
                    HTML, CSS, Bootstrap, JavaScript Website
                  </span>
                  <br></br>
                  visit website to see animation and functionality
                </h5>
                <br></br>
                <a
                  href=" https://dhananajay12.github.io/Grocery-website-single-page/"
                  rel="noreferrer"
                  target="_blank"
                  className="simple-button zoom mx-1"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/Dhananajay12/Grocery-website-single-page"
                  rel="noreferrer"
                  target="_blank"
                  className="simple-button zoom mx-1"
                >
                  Website Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
      </div>
      <div
        className="container-fluid "
        style={{ backgroundColor: " rgb(28, 29, 36)" }}
      >
        <br></br>
        <div className="row">
          <div className="col-md-6">
            <center>
              {" "}
              <h5 className="text-white">
                {" "}
                Copyright received
                <span className="color2"> by Dhananjayavare786@gmail.com </span>
              </h5>
            </center>
          </div>
          <div className="col-md-6">
            <center>
              {" "}
              <h5 className="text-white">
                Design by <span className="color2"> Dhananjay </span>
              </h5>
            </center>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Offer;
