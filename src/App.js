import "./App.scss";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Skills from "./components/Skills";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { slide1, slide2, slide3 } from "./ImageLink";
import {FaPaintBrush, FaLightbulb,FaCode} from "react-icons/fa";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);
const App = () => {
  const [services] = useState([
    {
      id: 1,
      title: "Web/App Design",
      content:
        "Works on the appearance, layout, and, in some cases, content of a website.",
        icon: <FaPaintBrush className='service-paint'/>
    },
    {
      id: 2,
      title: "Branding",
      content:
        "Creating name, logo, design, and the symbolic elements related to the brand.",
        icon: <FaLightbulb className='service-paint'/>

    },
    {
      id: 3,
      title: "Development",
      content:
        "Building, creating, and maintaining websites which includes aspects such as web design.",
        icon: <FaCode className='service-paint'/>

    },
  ]);

  const [skills] = useState([
    {
      id: 1,
      name: "HTML",
      range: "90%",
      class: "html",
    },
    {
      id: 2,
      name: "CSS",
      range: "60%",
      class: "css",
    },
    {
      id: 3,
      name: "JavaScript",
      range: "80%",
      class: "js",
    },
    {
      id: 4,
      name: "PHP",
      range: "50%",
      class: "php",
    },
    {
      id: 5,
      name: "MySQL",
      range: "70%",
      class: "mysql",
    },
  ]);

  const [slider] = useState([
    {
      title: "One-page layout",
      description: "One page contain all the infotmation you need",
      modalBanner: slide1,
      modalDesc:
        "Long 7 long long long lopng long lngpwopwedjiq2hn ofjoweihfbnow;kfnw;",
      extraPic: [
        {
          imgSrc: slide2,
          desc: "First desc",
        },
        {
          imgSrc: slide3,
          desc: "2 desc",
        },
        {
          imgSrc: slide1,
          desc: "3 desc",
        },
      ],
      url: slide1,
    },
    {
      title: "Login authentication",
      description: "User Authentication & Encryption",
      modalBanner: slide1,
      modalDesc:
        "Short 7 long long long lopng long lngpwopwedjiq2hn ofjoweihfbnow;kfnw;",
      extraPic: [
        {
          imgSrc: slide2,
          desc: "one desc",
        },
        {
          imgSrc: slide3,
          desc: "two desc",
        },
        {
          imgSrc: slide1,
          desc: "three desc",
        },
      ],
      url: slide2,
    },
    {
      title: "Product landing page",
      description: "Face mask, eyelips, lip stick etc..",
      url: slide3,
    },
    {
      title: "Weather App",
      description: "Weather lah i dont care",
      url: slide1,
    },
    {
      title: "To-do list",
      description: "Record down things to do",
      url: slide1,
    },
    {
      title: "To-not-do list",
      description: "Record down things to do",
      url: slide1,
    },
  ]);

  const [modal, setModal] = useState(false);

  const [modalContent, setModalContent] = useState({});

  const handleModal = (i) => {
    setModal(true);
    setModalContent(slider[i]);
  };
  const handleModalClose = () => {
    setModal(false);
  };
  return (
    <div className="App">
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>
      <Navbar />
      <HomeBanner />
      <AboutMe />
      <Services data={services} />
      <Skills data={skills} />

      <section className="teams" id="teams">
        <div className="max-width">
          <h2 className="title">My works</h2>
          {modal && (
            <Modal
              modalContent={modalContent}
              handleModalClose={handleModalClose}
            />
          )}

          <Swiper
            navigation
            pagination={false}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            slidesPerView={2}
            centeredSlides
            style={{ height: "500px" }}
          >
            {slider.map((slide, i) => {
              return (
                <SwiperSlide
                  key={i}
                  style={{ backgroundImage: `url(${slide.url})` }}
                >
                  <div className="swiper-inner-bg">
                    <h2 className="swiper-title">{slide.title}</h2>
                    <div className="swiper-description">
                      {slide.description}
                    </div>
                    <button
                      className="swiper-btn"
                      onClick={() => handleModal(i)}
                    >
                      Details
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <ContactMe />

      <Footer />
    </div>
  );
};

export default App;
