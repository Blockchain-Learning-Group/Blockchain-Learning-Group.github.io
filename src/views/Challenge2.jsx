import React from 'react';
import { Link } from 'react-router-dom';

import ContactUs from '../components/ContactUs';
import Challenge from '../components/ChallengeSeries/Challenge';

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
                                <a href="/#challenge-series">Challenge Series</a>
                            </li>
                            <li>
                                <a href="/#challenge-series/1">Challenge #1</a>
                            </li>
                            <li>
                                <u>
                                    <a href="/#challenge-series/2">Challenge #2</a>
                                </u>
                            </li>
                        </ul>
                    </div>
                </header>
    
                <main>
                    <div className="blg--main-wrapper">
                        <Challenge
                            id={2}
                            completed={false}
                            title="To be announced soon!"
                            duration="July 1st 2019 00:00 ET to September 2nd 2019 23:59 ET"
                            registrationURL="https://forms.gle/5ftAu16Evwiz8ewT8"
                            prizes="Prizes and sponsoring organizations to be announced soon!"
                            problemStatement="Coming soon...
                            "
                            externalLink="#"
                            externalLinkTitle=""
                        />
                        <ContactUs />
                    </div>
                </main>
            </div>
        );
    }
}
