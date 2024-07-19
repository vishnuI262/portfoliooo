
import React, { useEffect, useState } from 'react';
import './Ajay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Typed from 'typed.js';
const Ajay = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        // Target elements with the class 'typedText' and initialize Typed
        const typedElement = document.querySelector('.typedText');

        if (typedElement) {
            let typingEffect = new Typed(typedElement, {
                strings: ["Student", "Programmer"],
                loop: true,
                typeSpeed: 100,
                backSpeed: 80,
                backDelay: 2000
            });

            // Clean up function
            return () => {
                typingEffect.destroy();
            };
        }
    }, []);

    return (
        <div className="container">
            {/* --------------- HEADER --------------- */}
            <nav id="header">
                <div className="nav-logo">
                    <p className="nav-name">Portfolio</p>
                </div>

                <div className="nav-menu" id="myNavMenu">
                    <ul className="nav_menu_list">
                        <li className="nav_list">
                            <a href="#home" className="nav-link active-link">Home</a>
                            <div className="circle"></div>
                        </li>
                        <li className="nav_list">
                            <a href="#about" className="nav-link">About</a>
                            <div className="circle"></div>
                        </li>
                        <li className="nav_list">
                            <a href="#projects" className="nav-link">Projects</a>
                            <div className="circle"></div>
                        </li>
                        <li className="nav_list">
                            <a href="#contact" className="nav-link">Contact</a>
                            <div className="circle"></div>
                        </li>
                    </ul>
                </div>
                <div className="nav-button">
                    <button className="btn"> Resume <i className="uil uil-file-alt"></i></button>
                </div>
                <div className="nav-menu-btn">
                    <div onClick={toggleMenu} className="icon">&#9776;</div> {/* Triple bar icon */}
                </div>
            </nav>

            {/* -------------- MAIN ---------------- */}
            <main className="wrapper">
                {/* -------------- FEATURED BOX ---------------- */}
                <section className="featured-box" id="home">
                    <div className="featured-text">
                        <div className="featured-text-card">
                            <span>Ajay C</span>
                        </div>
                        <div className="featured-name">
                            <p>I'm <span className="typedText"></span></p>
                        </div>
                        <div className="featured-text-info">
                            <p>Passionate AI and Data Science enthusiast mastering full stack MERN development, ML, DL, and Data Structures through hands-on projects.</p>
                        </div>
                        <div className="featured-text-btn">
                            <button className="btn blue-btn">Hire Me</button>
                            <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
                        </div>
                        <div className="social_icons">

                            <div class="icon"><a
                                href="https://www.instagram.com/_ajay.4/"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><FontAwesomeIcon icon={faInstagram} /></a></div>
                            <div class="icon"><a
                                href="https://www.linkedin.com/in/ajay4-in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><FontAwesomeIcon icon={faLinkedin} /></a></div>
                            <div class="icon"><FontAwesomeIcon icon={faTwitter} /></div>
                            <div class="icon"><a
                                href="https://www.github.com/4jay11"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><FontAwesomeIcon icon={faGithub} /></a></div>

                        </div>
                    </div>
                    <div className="featured-image">
                        <div className="image">
                            <img src="data:image/jpeg;base64,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" alt="avatar" />
                        </div>
                    </div>
                    <div className="scroll-icon-box">
                        <a href="#about" className="scroll-btn">
                            <i className="uil uil-mouse-alt"></i>
                            <p>Scroll Down</p>
                        </a>
                    </div>
                </section>

                {/* -------------- ABOUT BOX ---------------- */}
                <section className="section" id="about">
                    <div className="top-header">
                        <h1>About Me</h1>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="about-info">
                                <h3>My introduction</h3>
                                <p>
                                    I am Ajay, deeply passionate about Artificial Intelligence and Data Science. My pursuits include mastering full stack MERN development, Machine Learning (ML), Deep Learning (DL), and Data Structures and Algorithms (DSA) through hands-on learning and practical projects.
                                </p>
                                <div className="about-btn">
                                    <button className="btn">Download CV <i className="uil uil-import"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            
                            <div className="skills-box">
                                <div className="skills-header">
                                    <h3>Frontend</h3>
                                </div>
                                <div className="skills-list">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>Tailwind</span>
                                    <span>JavaScript</span>
                                    <span>React</span>
                                </div>
                            </div>
                            <div className="skills-box">
                                <div className="skills-header">
                                    <h3>Backend</h3>
                                </div>
                                <div className="skills-list">
                                    <span>Python</span>
                                    <span>JAVA</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    
                                </div>
                            </div>
                            <div className="skills-box">
                                <div className="skills-header">
                                    <h3>Database</h3>
                                </div>
                                <div className="skills-list">

                                    <span>MySQL</span>
                                    <span>Oracle</span>
                                    <span>MongoDB</span>
                                </div>
                            </div>
                            
                            <div className="skills-box">
                                <div className="skills-header">
                                    <h3>Devops</h3>
                                </div>
                                <div className="skills-list">
                                    
                                    <span>Docker</span>
                                    <span>Jenkins</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* -------------- PROJECT BOX ---------------- */}
                <section className="section" id="projects">
                    <div className="top-header">
                        <h1>Projects</h1>
                    </div>
                    <div className="project-container">
                        <div className="project-box">
                            <i className="uil uil-award"></i>
                            <h3>Project Explore</h3>
                            <label>Final Year Project</label>
                        </div>
                        <div className="project-box">
                            <i className="uil uil-award"></i>
                            <h3>ChatBot</h3>
                            <label>For Mining Rules and Regulations</label>
                        </div>
                        <div className="project-box">
                            <i className="uil uil-award"></i>
                            <h3>Netflix Clone</h3>
                            <label>Working On</label>
                        </div>
                        <div className="project-box">
                            <i className="uil uil-award"></i>
                            <h3>Amazon Clone</h3>
                            <label>Will be available soon</label>
                        </div>
                        <div className="project-box">
                            <i className="uil uil-award"></i>
                            <h3>AutoMl & MLops</h3>
                            <label>House Price Prediction</label>
                        </div>
                        <div className="project-box">
                            <i className="uil uil-award"></i>
                            <h3>Full Stack ML Project</h3>
                            <label>Diabetes Prediction</label>
                        </div>
                    </div>
                </section>

                {/* -------------- CONTACT BOX ---------------- */}
                <section className="section" id="contact">
                    <div className="top-header">
                        <h1>Get in touch</h1>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="contact-info">
                                <h2>Find Me <i className="uil uil-corner-right-down"></i></h2>
                                <p><i className="uil uil-envelope"></i> Email: ajayc****@gmail.com</p>
                                <p><i className="uil uil-phone"></i> +91 701038****</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-control">
                                <div className="form-inputs">
                                    <input type="text" className="input-field" placeholder="Name" />
                                    <input type="text" className="input-field" placeholder="Email" />
                                </div>
                                <div className="text-area">
                                    <textarea placeholder="Message"></textarea>
                                </div>
                                <div className="form-button">
                                    <button className="btn">Send <i className="uil uil-message"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* -------------- FOOTER ---------------- */}
                <footer>
                    <div class="top-footer">
                        <p>Ajay C</p>
                    </div>
                    <div class="middle-footer">
                        <ul class="footer-menu">
                            <li class="footer_menu_list">
                                <a href="#home">Home</a>
                            </li>
                            <li class="footer_menu_list">
                                <a href="#about">About</a>
                            </li>
                            <li class="footer_menu_list">
                                <a href="#projects">Projects</a>
                            </li>
                            <li class="footer_menu_list">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-social-icons">
                        <div class="icon"><a
                            href="https://www.instagram.com/_ajay.4/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><FontAwesomeIcon icon={faInstagram} /></a></div>
                        <div class="icon"><a
                            href="https://www.linkedin.com/in/ajay4-in/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><FontAwesomeIcon icon={faLinkedin} /></a></div>
                        <div class="icon"><FontAwesomeIcon icon={faTwitter} /></div>
                        <div class="icon"><a
                            href="https://www.github.com/4jay11"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><FontAwesomeIcon icon={faGithub} /></a></div>
                    </div>
                    <div class="footer-social-icons">
                        <p>Copyright &copy; <a href="#home" >Ajay C</a> - All rights reserved
                        </p>
                    </div>

                </footer>
            </main>
        </div>
    )
};

export default Ajay;