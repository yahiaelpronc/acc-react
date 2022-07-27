import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './PagesStatic/Home.css';
import AniImg from './images/animal walfare.jpg';
import cat1 from './images/cat-01.jpg';
import cat2 from './images/cat-02.jpg';
import cat3 from './images/cat-03.jpg';
import cat4 from './images/cat-04.jpg';
import cat5 from './images/cat-05.jpg';
import cat6 from './images/cat-06.jpg';
import cat7 from './images/cat-07.jpg';
import cat8 from './images/cat-08.jpg';
import gal1 from './images/1.jpg';
import gal2 from './images/2.webp';
import gal3 from './images/3.jpg';
import gal4 from './images/4.jpg';
import feature1 from './images/features-01.jpg';
import feature2 from './images/features-02.jpg';
import feature3 from './images/features-03.jpg';
import avatar1 from './images/avatar-01.png';
import avatar2 from './images/avatar-02.png';
import avatar3 from './images/avatar-03.png';
import avatar4 from './images/avatar-04.png';
import avatar5 from './images/avatar-05.png';
import avatar6 from './images/avatar-06.png';
import team1 from './images/team-01.jpg';
import team2 from './images/team-02.jpg';
import team3 from './images/team-03.jpg';
import team4 from './images/team-08.jpg';
import skills from './images/skills.png';
import work1 from './images/work-steps.png';
import work2 from './images/work-steps-1.png';
import work3 from './images/work-steps-2.png';
import work4 from './images/work-steps-3.png';
import event from './images/events.png';
import discount from './images/discount.png';
function Home() {





  return (
    <>
      {/* Start Landing */}
      <div className="landing">
        <div className="container">
          <div className="text">
            <h1 className="d-flex justify-self-start">Welcome, To Animal Care Center</h1>
            <p>Your local veterinarians in Egypt.
              We are pleased to provide a wide variety of animal veterinary services in Qena.</p>
          </div>
          <div className="image col-4">
            <img src={require(`./images/ACC Logo (1).png`)} alt="Website Logo" className="smallImg1" />
          </div>
        </div>
        <Link to="#articles" className="go-down">
          <i className="fas fa-angle-double-down fa-2x"></i>
        </Link>
      </div>
      {/*End Landing */}

      {/* Start Articles */}
      <div className="articles" id="articles">
        <h2 className="main-title">Articles</h2>
        <div className="container">
          <div className="box">
            <img src={cat1} alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
            </div>
            <div className="info">
              <Link to="">Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src={cat2} alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
            </div>
            <div className="info">
              <Link to="">Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src={cat3} alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
            </div>
            <div className="info">
              <Link to="">Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src={cat4} alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
            </div>
            <div className="info">
              <Link to="">Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src={cat5} alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
            </div>
            <div className="info">
              <Link to="">Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src={cat6} alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
            </div>
            <div className="info">
              <Link to="">Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src={cat7} alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
            </div>
            <div className="info">
              <Link to="">Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src={cat8} alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
            </div>
            <div className="info">
              <Link to="">Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="spikes"></div>



      {/* End Articles */}
      {/* Start Gallery */}

      <div className="gallery" id="gallery">
        <h2 className="main-title">
          Animal Care Website
        </h2>
        <div className="container">
          <div className="box">
            <div className="image">
              <img src={gal1} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={gal2} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={gal3} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={gal4} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={gal3} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={gal2} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/*   End Gallery  */}
      {/* Start Features */}
      <div className="features" id="features">
        <h2 className="main-title">Features</h2>
        <div className="container">
          <div className="box quality">
            <div className="img-holder"><img src={feature1} alt="" /></div>
            <h2>Medication Volume Calculator</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
            <Link to="#">More</Link>
          </div>
          <div className="box time">
            <div className="img-holder"><img src={feature2} alt="" /></div>
            <h2>Wellness Exams And Vaccinations</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
            <Link to="#">More</Link>
          </div>
          <div className="box passion">
            <div className="img-holder"><img src={feature3} alt="" /></div>
            <h2>Surgery Scheduling Service</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
            <Link to="#">More</Link>
          </div>
          <div className="box quality">
            <div className="img-holder"><img src={feature1} alt="" /></div>
            <h2>Boarding & Grooming Service</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
            <Link to="#">More</Link>
          </div>
          <div className="box time">
            <div className="img-holder"><img src={feature2} alt="" /></div>
            <h2>Animal Emergency Service</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
            <Link to="#">More</Link>
          </div>
          <div className="box passion">
            <div className="img-holder"><img src={feature3} alt="" /></div>
            <h2>List Of All Animal Care Locations</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
            <Link to="/listlocations">More</Link>
          </div>
        </div>
      </div>

      {/* End Features */}

      {/* Start Testmonials */}
      <div className="testimonials" id="testimonials">
        <h2 className="main-title">Meet Our Doctors</h2>
        <div className="container">
          <div className="box">
            <img src={avatar1} alt="" />
            <h3>Mohamed Farag</h3>
            <span className="title">veterinary doctor</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
              quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src={avatar2} alt="" />
            <h3>Mohamed Ibrahim</h3>
            <span className="title">veterinary doctor</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
              quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src={avatar3} alt="" />
            <h3>Shady Nabil</h3>
            <span className="title">veterinary doctor</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
              quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src={avatar4} alt="" />
            <h3>Amr Hendawy</h3>
            <span className="title">veterinary doctor</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
              quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src={avatar5} alt="" />
            <h3>Sherief Ashraf</h3>
            <span className="title">veterinary doctor</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
              quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src={avatar6} alt="" />
            <h3>Osama Mohamed</h3>
            <span className="title">veterinary doctor</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
              quaerat ducimus
            </p>
          </div>
        </div>
      </div>
      {/* End Testmonials */}

      {/* Start Team  */}
      <div className="team" id="team">
        <h2 className="main-title">Team work Members</h2>
        <div className="container">
          <div className="box">
            <div className="data">
              <img src={team1} alt="" />
              <div className="social">
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
            <div className="info">
              <h3>Ahmed</h3>
              <p>Full Stack Developer</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src={team2} alt="" />
              <div className="social">
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
            <div className="info">
              <h3>Yahia</h3>
              <p>Full Stack Developer</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src={team3} alt="" />
              <div className="social">
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
            <div className="info">
              <h3>Moustafa</h3>
              <p>Full Stack Developer</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src={team4} alt="" />
              <div className="social">
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
            <div className="info">
              <h3>Aya</h3>
              <p>Full Stack Developer</p>
            </div>
          </div>
          <div className="box">
            <div className="data">
              <img src={team4} alt="" />
              <div className="social">
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
            <div className="info">
              <h3>Eman</h3>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="spikes"></div>


      {/* End Team */}

      {/* Start Services */}
      <div className="services" id="services">
        <h2 className="main-title">Services</h2>
        <div className="container">
          <div className="box">
            <i className="fas fa-user-shield fa-4x"></i>
            <h3>WELLNESS EXAMS & VACCINATIONS</h3>
            <div className="info">
              <Link to="#">Details</Link>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-tools fa-4x"></i>
            <h3>BOARDING & GROOMING SERVICES</h3>
            <div className="info">
              <Link to="#">Details</Link>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-map-marked-alt fa-4x"></i>
            <h3>MEDICATION VOLUME CALCULATOR</h3>
            <div className="info">
              <Link to="#">Details</Link>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-laptop-code fa-4x"></i>
            <h3>SURGERY</h3>
            <div className="info">
              <Link to="#">Details</Link>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-palette fa-4x"></i>
            <h3>ANIMAL EMERGENCY</h3>
            <div className="info">
              <Link to="Emergency Animal.html">Design</Link>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-bullhorn fa-4x"></i>
            <h3>ANIMAL CARE LOCATIONS</h3>
            <div className="info">
              <Link to="#">Details</Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Services */}
      {/* Start Skills */}
      <div className="our-skills" id="our-skills">
        <h2 className="main-title">Our Skills</h2>
        <div className="container">
          <img src={skills} alt="" />
          <div className="skills">
            <div className="skill">
              <h3>HTML <span>80%</span></h3>
              <div className="the-progress">
                <span style={{ width: '0%', width: '80%' }}></span>
              </div>
            </div>
            <div className="skill">
              <h3>CSS <span>85%</span></h3>
              <div className="the-progress">
                <span style={{ width: '0%', width: '85%' }}></span>
              </div>
            </div>
            <div className="skill">
              <h3>JavaScript <span>70%</span></h3>
              <div className="the-progress">
                <span style={{ width: '0%', width: '70%' }}></span>
              </div>
            </div>
            <div className="skill">
              <h3>Python <span>80%</span></h3>
              <div className="the-progress">
                <span style={{ width: '0%', width: '80%' }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Skills */}

      {/*Start Work Steps */}
      <div className="work-steps" id="work-steps">
        <h2 className="main-title">How It Works ?</h2>
        <div className="container">
          <img src={work1} alt="" className="image" />
          <div className="info">
            <div className="box">
              <img src={work2} alt="" />
              <div className="text">
                <h3>Business Analysis</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                  recusandae debitis vel
                </p>
              </div>
            </div>
            <div className="box">
              <img src={work3} alt="" />
              <div className="text">
                <h3>Architecture</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                  recusandae debitis vel
                </p>
              </div>
            </div>
            <div className="box">
              <img src={work4} alt="" />
              <div className="text">
                <h3>Developement</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                  recusandae debitis vel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Work Steps */}

      {/* Start Events */}
      <div className="events" id="events">
        <div className="dots dots-up"></div>
        <div className="dots dots-down"></div>
        <h2 className="main-title">Latest Events</h2>
        <div className="container">
          <img src={event} alt="" />
          <div className="info">
            <div className="time">
              <div className="unit">
                <span className="days">15</span>
                <span>Days</span>
              </div>
              <div className="unit">
                <span className="hours">08</span>
                <span>Hours</span>
              </div>
              <div className="unit">
                <span className="minutes">45</span>
                <span>Minutes</span>
              </div>
              <div className="unit">
                <span className="seconds">55</span>
                <span>Seconds</span>
              </div>
            </div>
            <h2 className="title">Tech Masters Event 2021</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur doloremque iusto ut adipisci quam
              ratione aliquam excepturi nulla in harum, veritatis porro
            </p>
          </div>
          <div className="subscribe">
            <form action="">
              <input type="email" placeholder="Enter Your Email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>


      {/* End Events */}

      {/* Start Stats */}
      <div className="stats" id="stats">
        <h2>Our Awesome Stats</h2>
        <div className="container">
          <div className="box">
            <i className="far fa-user fa-2x fa-fw"></i>
            <span className="number" data-goal="150">0</span>
            <span className="text">Clients</span>
          </div>
          <div className="box">
            <i className="fas fa-code fa-2x fa-fw"></i>
            <span className="number" data-goal="135">0</span>
            <span className="text">Projects</span>
          </div>
          <div className="box">
            <i className="fas fa-globe-asia fa-2x fa-fw"></i>
            <span className="number" data-goal="50">0</span>
            <span className="text">Countries</span>
          </div>
          <div className="box">
            <i className="far fa-money-bill-alt fa-2x fa-fw"></i>
            <span className="number" data-goal="500">0</span>
            <span className="text">Money</span>
          </div>
        </div>
      </div>

      {/* End Stats */}
      {/* Start Discount */}
      <div className="discount" id="discount">
        <div className="image">
          <div className="content">
            <h2>We Have A Discount</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur, recusandae
              ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel similique
              laborum dicta aperiam odit doloribus corporis.
            </p>
            <img src={discount} alt="" />
          </div>
        </div>
        <div className="form">
          <div className="content">
            <h2>Request A Discount</h2>
            <form action="">
              <input className="input" type="text" placeholder="Your Name" name="name" />
              <input className="input" type="email" placeholder="Your Email" name="email" />
              <input className="input" type="text" placeholder="Your Phone" name="mobile" />
              <textarea className="input" placeholder="Tell Us About Your Needs" name="message"></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>

      {/* End Discount */}




    </>
  )
}
export default Home;

