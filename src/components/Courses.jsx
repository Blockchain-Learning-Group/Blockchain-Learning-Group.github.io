import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section id="Courses" className="mdc-dialog--open">
                <header>
                    <h3>Our Courses</h3>
                    <p>Aligned with our vision to focus our efforts at the developer community - and the organizations they are affiliated with - we offer two specific education tracks</p>

                    <ul>
                        <li className="mdc-elevation--z16">
                            <header>
                                <div>BLOCKCHAIN</div>
                                <div>
                                    <strong>DEVELOPER EDUCATION COURSE</strong>
                                </div>
                            </header>
                            <div>
                                <p>An immersive end to end course in blockchain technology with a focus on decentralized application (DApp) development. From the basics of blockchain technology to in-depth explorations of use cases, digging deep into cutting edge smart contract development patterns and deployment techniques.</p>
                            </div>
                            <footer>
                                <a href="#COURSE--DEVELOPER-EDUCATION-COURSE">LEARN MORE</a>
                            </footer>
                        </li>

                        <li className="mdc-elevation--z16">
                            <header>
                                <div>BLOCKCHAIN</div>
                                <div>
                                    <strong>DEVELOPER & BUSINESS TEAM PACKAGE</strong>
                                </div>
                            </header>
                            <div>
                                <p>For organizations who want to both train their developers and immediately turn this knowledge into action, the Blockchain Learning Group provides a comprehensive package to jumpstart your blockchain goals. Please contact us for more details on the business packages.</p>
                            </div>
                            <footer>
                                <a href="#CONTACTUS">CONTACT US</a>
                            </footer>
                        </li>
                    </ul>
                </header>

                <ul>
                    <li id="COURSE--DEVELOPER-EDUCATION-COURSE">
                        <h4>
                            <div>BLOCKCHAIN</div>
                            <div>
                                <strong>DEVELOPER EDUCATION COURSE</strong>
                            </div>
                        </h4>

                        <p>An immersive end to end course in blockchain technology with a focus on decentralized application (DApp) development. From the basics of blockchain technology to in-depth explorations of use cases, digging deep into cutting edge smart contract development patterns and deployment techniques.</p>

                        <h5>COURSE BREAKDOWN</h5>
                        <dl>
                            <dt>Day 1:</dt>
                            <dd>Blockchain Fundamentals</dd>

                            <dt>Day 2:</dt>
                            <dd>Introduction to DApp Development</dd>

                            <dt>Day 3:</dt>
                            <dd>Advanced DApp and Smart Contract Development</dd>

                            <dt>Day 4:</dt>
                            <dd>DApp Deployment and Interaction</dd>
                        </dl>

                        <p>* Primer course for students with no previous software development experience is also available (ask for further details).</p>

                        <h5>WHAT YOU BRING</h5>
                        <ul>
                            <li>Enthusiasm and a genuine passion for Blockchain technology</li>
                            <li>Software development experience is a plus</li>
                            <li>Laptop, Ubuntu preferred,  Mac / Windows OK</li>
                        </ul>

                        <h5>OUTCOMES</h5>
                        <p>All participants will gain a deep understanding of Blockchain technology, how it works, the ever growing landscape, cryptocurrencies and ICOs, and most importantly, hands-on experience with full stack DApp development.  Participants will have successfully built, tested and deployed several smart contracts as well as a full stack DApp.</p>
                    </li>
                </ul>
            </section>
        );
    }
}
