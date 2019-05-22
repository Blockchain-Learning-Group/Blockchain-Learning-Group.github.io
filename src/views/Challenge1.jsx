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
                            <li>
                                <a href="/#challenge-series/2">Challenge #2</a>
                            </li>
                        </ul>
                    </div>
                </header>
    
                <main>
                    <div className="blg--main-wrapper">
                        <Challenge
                            id={1}
                            completed={true}
                            title="Financial Literacy"
                            duration="January 1st 2019 00:00 ET to March 17th 2019 23:59 ET"
                            registrationURL="https://goo.gl/forms/BtSoCBBRLanwYNPl1"
                            prizes="The winning team will be rewarded a $1000 cash prize!"
                            problemStatement="Financial literacy.
                                This challenge is targeted at developing solutions to aid financial literacy globally. 
                                This challenge is left intentionally broad in order to allow for true outside the box thinking and participants are encouraged to do so!
                            "
                            externalLink="https://www.edutopia.org/blog/what-is-financial-literacy-lennette-coleman"
                            externalLinkTitle="Finacial literacy... far beyond personal finance"
                            winnerVideoLink="https://player.vimeo.com/video/337595571"
                            winningMessage={<div>
                                    <h1>1st Challenge Series Winners!</h1>

                                    <p>
                                        Congratulations to a trio of students from Holy Trinity School who submitted the winning solution for the inaugural BLG Challenge Series.
                                    </p>
                                    <br />
                                    <p>
                                        The team developed a solution to help students manage their personal finances. The application simplifies the considerations around financial literacy and delivers an interactive platform to manage revenue and expenses.
                                        The winning team demonstrated the true spirit of the competition, by combining a thoughtful research-based approach to problem solving and developing a simple yet meaningful solution that addresses a key issue.
                                    </p>
                                </div>
                            }
                        />
                        <ContactUs />
                    </div>
                </main>
            </div>
        );
    }
}
