import React from 'react';

export default class extends React.Component {

    handleClick(e) {
    }

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
                                <a href="#COURSE--DEVELOPER-EDUCATION-COURSE" onClick={this.handleClick.bind(this)}>LEARN MORE</a>
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
                                <a href="#COURSE--DEVELOPER-AND-BUSINESS-TEAM-PACKAGE">LEARN MORE</a>
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

                    <li id="COURSE--DEVELOPER-AND-BUSINESS-TEAM-PACKAGE">
                        <h4>
                            <div>BLOCKCHAIN</div>
                            <div>
                                <strong>DEVELOPER & BUSINESS TEAM PACKAGE</strong>
                            </div>
                        </h4>

                        <p>This package covers the core components of the Standard Developer Education Package, followed by the facilitation of a Business Ideation session, and then concludes with a Hackathon. Participants include both the developer teams as well as key business team members from within the organization. The complete training package is intended to be conducted over a 5 consecutive-day period.</p>

                        <h5>BREAKDOWN</h5>
                        <ul>
                            <li>
                                <h6>Developer Training (2.5 days) - developer team only</h6>
                                <dl>
                                    <dt>Module 1:</dt>
                                    <dd>What is Blockchain?</dd>

                                    <dt>Module 2:</dt>
                                    <dd>Introduction to DApp Development</dd>

                                    <dt>Module 3:</dt>
                                    <dd>Advanced Solidity and Full-Stack Development</dd>
                                </dl>
                            </li>
                            <li>
                                <h6>Business Ideation (0.5 days) - participants include both the developer and business teams</h6>
                                <p>This is an ideation session that facilitates the roadmapping of specific business use cases that could potentially require a blockchain technology platform.  At the end of the session, a clearly defined Problem Statement is created, to be solved in the subsequent hackathon.</p>
                            </li>
                            <li>
                                <h6>Hackathon (2.0 days) - participants include both the developer and business teams</h6>
                                <p>The outcome of the hackathon will result in a fully functional prototype aimed at solving the Problem Statement(s) defined at the end of the Business Ideation session.</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        );
    }
}
