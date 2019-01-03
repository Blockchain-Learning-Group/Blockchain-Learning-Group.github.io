import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section id="UpcomingChallenge">
                <header>
                    <h3>Upcoming Challenge: <strong>#1 Financial Literacy</strong></h3>
                    <p><strong><u>January 1st 2019 to February 28th 2019</u></strong></p>
                    <p>
                        Spots are limited so be sure to register now!
                    </p>

                    <ul>
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
