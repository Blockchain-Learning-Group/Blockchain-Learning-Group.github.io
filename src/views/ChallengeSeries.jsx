import React from 'react';
import { Link } from 'react-router-dom';

import ContactUs from '../components/ContactUs';
import Heading from '../components/ChallengeSeries/Heading';
import Details from '../components/ChallengeSeries/Details';
import Participation from '../components/ChallengeSeries/Participation';
import UpcomingChallenge from '../components/ChallengeSeries/UpcomingChallenge';

export default class extends React.Component {
    render() {
        return (
            <div id="App">
                <header className="mdc-elevation--z8">
                    <div className="--blg-wrapper">
                        <div className="logo" />
                        <ul>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <u>
                                    <a href="#challenge-series">Challenge Series</a>
                                </u>
                            </li>
                            <li>
                                <a href="#challenge-series/1">Challenge #1</a>
                            </li>
                        </ul>
                    </div>
                </header>

                <main>
                    <div className="blg--main-wrapper">
                        <Heading />
                        <UpcomingChallenge />
                        <Details />
                        <Participation />
                        <ContactUs />
                    </div>
                </main>
            </div>
        );
    }
}
