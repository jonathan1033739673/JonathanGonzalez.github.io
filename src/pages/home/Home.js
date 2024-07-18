import React, {Component, Fragment} from 'react';
import './Home.scss';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import profile from '../../assets/images/Jonathan.png';
import testimonial01 from '../../assets/images/testimonials/testimonial01.jpeg';
import testimonial02 from '../../assets/images/testimonials/testimonial02.jpeg';
import testimonial03 from '../../assets/images/testimonials/testimonial03.jpeg';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                {/* HERO */}
                <section className="hero d-flex flex-column justify-content-center align-items-center" id="intro">
                    <div className="container">
                        <div className="row">
                            <div className="mx-auto col-lg-5 col-md-5 col-10">
                                <img src={profile} className="img-fluid" alt="Ben Resume HTML Template"/>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
                                    <div className="hero-text">
                                        <h1 className="hero-title">👋 Jonathan Gonzalez</h1>
                                        <a href='#intro' className="email-link">
                                            Full Stack Software Engineer
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>

                {/* ABOUT */}
                <section className="about bg-light py-3">
                    <div className="container px-5">
                        <div className="row gx-5 justify-content-center">
                            <div className="col-xxl-8">
                                <div className="text-center my-4">
                                    <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Me</span></h2>
                                    <p className="lead fw-light mb-4">Hey, I am Jonathan Gonzalez a Gold Coast/Australia based software engineer</p>
                                    <p className="text-muted text-justify">I am a passionate software engineer who loves to bring ideas to life with code. I am entrepreneur, leader, and a creative engineer who enjoy to learn, lead, and teach others about technology.<br/>I am into the process of creating two tech companies <a href="https://www.heroescolombia.com" target="_blank" rel="noreferrer"><u>Heroes Colombia</u></a> and <a href="https://www.easyaussie.com.au" target="_blank" rel="noreferrer"><u>Easy Aussie</u></a></p>
                                    <div className="d-flex justify-content-center fs-2 gap-4">
                                        <a className="text-gradient" href="mailto: jonathan.gonzalez.botero@gmail.com"><i className="bi bi-mailbox2"></i></a>
                                        <a className="text-gradient" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jonathangonzalezbotero/"><i className="bi bi-linkedin"></i></a>
                                        <a className="text-gradient" target="_blank" rel="noreferrer" href="https://github.com/jonathangonzalezbotero"><i className="bi bi-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIAL */}
                <section className="testimonials section-padding py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 my-3">
                                <h3 className="mb-5 text-center"><span className="text-gradient d-inline">What People say</span>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jonathangonzalezbotero/details/recommendations/">
                                        <i className="fas fa-arrow-right custom-icon"></i>
                                    </a>
                                </h3>
                                <OwlCarousel items={1} className="owl-theme" autoplay ={true}>
                                    <div className="item">
                                        <div className="testimonials-thumb d-flex">
                                            <div className="testimonials-image">
                                                <img src={testimonial01} className="img-fluid" alt="testimonials"/>
                                            </div>
                                            <div className="testimonials-info">
                                                <p>Jonathan is an excellent project manager, he communicates in an assertive way the requirements of the software, He also gets involved with the Developers and Designers to ensure the quality of the software in all its stages.</p>
                                                <h6 className="mb-0">Andres Chavez</h6>
                                                <span>Software Engineer</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="testimonials-thumb d-flex">
                                            <div className="testimonials-image">
                                                <img src={testimonial02} className="img-fluid" alt="testimonials"/>
                                            </div>
                                            <div className="testimonials-info">
                                                <p>Jonathan is a very professional expert in his field! I highly recommend working with him!</p>
                                                <h6 className="mb-0">Gianfranco Orsoni</h6>
                                                <span>Account Manager</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="testimonials-thumb d-flex">
                                            <div className="testimonials-image">
                                                <img src={testimonial03} className="img-fluid" alt="testimonials"/>
                                            </div>
                                            <div className="testimonials-info">
                                                <p>One of the best things of working with Jonathan is that you alway feel supported by him and know that if something goes wrong, he can fix it. He is a tremendous developer, so smart and his attitude makes you feel you are working in a warm environment.</p>

                                                <h6 className="mb-0">Juan Tovar</h6>
                                                <span>Mobile App Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </Fragment>
        );
    }
}
