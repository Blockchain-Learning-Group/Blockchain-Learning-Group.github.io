import React from 'react';
import { Link } from 'react-router-dom';

import ContactUs from '../components/ContactUs';
import Heading from '../components/ChallengeSeries/Heading';
import SignUpForm from '../components/ChallengeSeries/SignUpForm';
import Details from '../components/ChallengeSeries/Details';
import Participation from '../components/ChallengeSeries/Participation';

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
                                    <a href="#"><strong>Challenge Series</strong></a>
                                </u>
                            </li>
                        </ul>
                    </div>
                </header>

                <main>
                    <div className="blg--main-wrapper">
                        <Heading />
                        <Details />
                        <Participation />
                        {/* <SignUpForm /> */}
                        <ContactUs />
                    </div>
                </main>
            </div>
        );
    }
}
