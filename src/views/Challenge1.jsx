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
                                <u>
                                    <a href="/#challenge-series/1">Challenge #1</a>
                                </u>
                            </li>
                        </ul>
                    </div>
                </header>
    
                <main>
                    <div className="blg--main-wrapper">
                        <Challenge
                            id={1}
                            title="Financial Literacy"
                            duration="January 1st 2019 00:00 ET to February 28th 2019 23:59 ET"
                            registrationURL="https://goo.gl/forms/BtSoCBBRLanwYNPl1"
                            prizes="The winning team will be rewarded a $1000 cash prize!"
                            problemStatement="Financial literacy.
                                This challenge is targeted at developing solutions to aid financial literacy globally. 
                                This challenge is left intentionally broad in order to allow for true outside the box thinking and participants are encouraged to do so!
                            "
                            externalLink="https://www.edutopia.org/blog/what-is-financial-literacy-lennette-coleman"
                            externalLinkTitle="Finacial literacy... far beyond personal finance"
                        />
                        <ContactUs />
                    </div>
                </main>
            </div>
        );
    }
}
