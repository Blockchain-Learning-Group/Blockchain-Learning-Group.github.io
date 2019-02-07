import React from 'react';

export default class extends React.Component {
    scrollTo(e) {
        if (e.target.hasAttribute('href')) {
            let id = e.target.getAttribute('href').replace('#', '');
            let el = document.getElementById(id);
            document.getElementsByClassName('blg--main-wrapper')[0].scroll(0, el.offsetTop);
            e.preventDefault();
        }
    }

    render() {
        return (
            <section id="Courses">
                <footer>
                    <h3>Our IMPACT Series</h3>
                    <p>
                        An immersive and collaborative series of programs rooted in problem solving, design thinking and software development, 
                        leveraging leading edge and innovative technologies.  
                        The objective is not only on knowledge uptake but more importantly focused on why new technologies matter, how they are 
                        shaping the world around us, and how you, the learner, can make your mark!
                    </p>

                    <ul>
                        <li id="COURSE--DEVELOPER-EDUCATION-COURSE">
                            <div className="wrapper">
                                <header>
                                    <h4 className="mdc-elevation--z4">
                                        <div>IMPACT Program</div>
                                        <div>
                                            <strong>BLOCKCHAIN</strong>
                                        </div>
                                    </h4>
                                </header>
                                <footer className="mdc-elevation--z8">
                                    <p>
                                        This Impact Program features a deep dive into Blockchain technology and decentralized application(DApp) development, 
                                        and focuses on putting your knowledge to work!
                                        The delivery and assessment are based on knowledge, communication, collaboration and most importantly putting 
                                        it all into practise, or the application of this knowledge.
                                        <br />
                                        <br />
                                        The program is rooted in a specific problem or problems the learners are passionate about, these may vary from 
                                        derivatives of the UN’s SDGs to internal business processes, of which they will have developed a solution for 
                                        by the end of the program!  Therefore, the program takes a novel approach in introducing the fundamentals of 
                                        Blockchain technology through designing and developing your very own solution.                        
                                        <br />
                                        <br />
                                        See delivery formats below.
                                        <br />
                                        <br />
                                    </p>

                                    <h5>OUTCOMES</h5>
                                    <p>
                                        Learners achieve a working knowledge of Blockchain technology, how to leverage and apply it as well as a 
                                        clear understanding of its potential impact on them, their business and the world around them. 
                                        Real-world APPLICATIONS are built as a direct outcome of the program that learners can add to their portfolio of work.
                                        <br />
                                        <br />
                                        Become an innovation leader in paving the way for adopting new technologies into your ecosystem
                                        while acceleratting the investigation, analysis and decision making around the integration of, or further experimenting with, blockchain technology.
                                        <br />
                                        <br />
                                        Finally learners and organizations may enhance recognition and accreditation through our Certification and Badging offerings.
                                    </p>
                                </footer>
                            </div>
                        </li>
                    </ul>
                </footer>

                <header>
                    <h3>Delivery Formats</h3>
                    <ul>
                        <li className="mdc-elevation--z16">
                            <header>
                                <div>IMPACT Program: BLOCKCHAIN</div>
                                <div>
                                    <strong>ACCELERATOR</strong>
                                </div>
                            </header>
                            <div className="delivery-formats">
                                <h4><strong>DELIVERY:</strong></h4>
                                <p>In person instructor led</p>

                                <h4><strong>DURATION:</strong></h4>
                                <p>
                                    6 Days Full-Time (9am-3:30pm)
                                    <br />
                                    Sequential days recommended
                                    <br />
                                    <br />
                                </p>

                                <h4><strong>PARTICIPANTS:</strong></h4>
                                <p>
                                    Maximum of 20 technical participants
                                    <br />
                                    No limit on non-technical participants
                                </p>
                            </div>
                            <footer>
                                <a className="blg-btn" 
                                    onClick={() => window.open("https://goo.gl/forms/GXbph4lwLEO5ibNy2")}>
                                    I'M INTERESTED!
                                </a>
                            </footer>
                        </li>

                        <li className="mdc-elevation--z16">
                            <header>
                                <div>IMPACT Program: BLOCKCHAIN</div>
                                <div>
                                    <strong>INCUBATOR</strong>
                                </div>
                            </header>
                            <div>
                            <h4><strong>DELIVERY:</strong></h4>
                                <p>Online self paced, drip schedule</p>

                                <h4><strong>DURATION:</strong></h4>
                                <p>
                                    2-8 hours weekly, 4-16 weeks 
                                    <br />
                                    32 hours of learner engagement
                                    <br />
                                    Recommended release of 2-4 hours weekly
                                </p>

                                <h4><strong>PARTICIPANTS:</strong></h4>
                                <p>
                                    Maximum of 10 technical participants*
                                    <br />
                                    No limit on non-technical participants**
                                </p>
                                <p style={{ fontSize: "10px" }}>
                                    * multiple programs may be initiated in parallel or close proximity
                                    <br />
                                    ** Non-technical participants are optional but recommended
                                </p>
                            </div>
                            <footer>
                                <a className="blg-btn" 
                                    onClick={() => window.open("https://goo.gl/forms/GXbph4lwLEO5ibNy2")}>
                                    I'M INTERESTED!
                                </a>
                            </footer>
                        </li>
                    </ul>                    
                </header>
            </section>
        );
    }
}
