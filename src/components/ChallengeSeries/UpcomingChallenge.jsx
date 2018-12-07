import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section id="UpcomingChallenge">
                <header>
                    <h3>Upcoming Challenge: <strong>#1 Financial Literacy</strong></h3>
                    <p><strong><u>December 17th 2018 to January 30th 2019</u></strong></p>
                    <p>
                        Spots are limited so be sure to register now!
                    </p>

                    <ul>
                        {/* <li className="mdc-elevation--z16">
                            <header>
                                <div>
                                    <strong>REGISTER</strong>
                                </div>
                            </header>
                            <div>
                                <p>Be sure to register now as only a limited number of seats are available.</p>
                            </div>
                            <footer>
                                <a className="blg-btn" onClick={() => window.open('https://goo.gl/forms/BtSoCBBRLanwYNPl1')}>REGISTER NOW!</a>
                            </footer>
                        </li> */}

                         <li className="mdc-elevation--z16">
                            <header>
                                <div>
                                    <strong>VIEW CHALLENGE</strong>
                                </div>
                            </header>
                            <div>
                                <p>View the details of the upcoming challenge.</p>
                            </div>
                            <footer>
                                <a className="blg-btn" href="#challenge-series/1">VIEW DETAILS</a>
                            </footer>
                        </li>
                    </ul>
                </header>
            </section>
        );
    }
}
