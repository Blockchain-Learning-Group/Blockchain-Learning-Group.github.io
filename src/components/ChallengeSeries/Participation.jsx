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
                <header>
                    <h3>Participation and Next Steps</h3>
                    <p>Now that you know what it's all about it is time to get doing!</p>

                    <ul>
                        <li className="mdc-elevation--z16">
                            <header>
                                <div>
                                    <strong>SIGN UP</strong>
                                </div>
                            </header>
                            <div>
                                {/* <p>Register yourself to participate.</p> */}
                            </div>
                            <footer>
                                <a className="blg-btn" href="#todo" onClick={this.scrollTo.bind(this)}>SIGN UP</a>
                            </footer>
                        </li>

                        <li className="mdc-elevation--z16">
                            <header>
                                <div>
                                    <strong>REGISTER YOUR TEAM</strong>
                                </div>
                            </header>
                            <div>
                                {/* <p>...</p> */}
                            </div>
                            <footer>
                                <a className="blg-btn" href="#todo" onClick={this.scrollTo.bind(this)}>REGISTER</a>
                            </footer>
                        </li>
                        <li className="mdc-elevation--z16">
                            <header>
                                <div>
                                    <strong>START BUILDING!</strong>
                                </div>
                            </header>
                            <div>
                                {/* <p>...</p> */}
                            </div>
                            <footer>
                                <a className="blg-btn">#BUIDL</a>
                            </footer>
                        </li>
                    </ul>
                </header>

                <footer>
                    <ul>
                        <li id="COURSE--DEVELOPER-EDUCATION-COURSE">
                            <div className="wrapper">
                                <header>
                                    <h4 className="mdc-elevation--z4">
                                        <div>BLOCKCHAIN CHALLENGES</div>
                                        <div>
                                            <strong>WHAT  IS A CHALLENGE?</strong>
                                        </div>
                                    </h4>
                                </header>
                                <footer className="mdc-elevation--z8">
                                    <p>
                                        A challenge is a problem or use that is presented to all challenge participants.  Challenges may be as broad as one of the United Nation’s Sustainable Development Goals or as specific as the tracking of medicine from a given producer to consumer
                                        A challenge outlines the scope of the problem to be tackled as well as outlines the deliverables
                                        In many cases a prototype of a solution and complementary presentation will be required to submitted. Including a recorded demonstration and presentation clearly communicating what was achieved and how this has overcome the given challenge.
                                    </p>

                                    <h5>EXPECTED DELIVERABLES</h5>
                                    <dl>
                                        <dt>1 Code Base</dt>
                                        <dd>MVP of the given solution</dd>

                                        <dt>2 Presentation:</dt>
                                        <dd>Deck or document detailing the design of the solution, value proposition, benefits and roadmap</dd>

                                        <dt>3 Video:</dt>
                                        <dd>Demonstration of the solution and presentation</dd>
                                    </dl>

                                    <h5>WHAT YOU BRING</h5>
                                    <ul>
                                        <li>Enthusiasm and a genuine passion for Blockchain technology</li>
                                        <li>Software development experience is a plus</li>
                                    </ul>

                                    <h5>OUTCOMES</h5>
                                    <p>All participants will gain a deep understanding of Blockchain technology, how it works, the ever growing landscape, cryptocurrencies and ICOs, and most importantly, hands-on experience with full stack DApp development. Participants will have successfully built, tested and deployed several smart contracts as well as a full stack DApp.</p>
                                </footer>
                            </div>
                        </li>
                    </ul>
                </footer>
            </section>
        );
    }
}
