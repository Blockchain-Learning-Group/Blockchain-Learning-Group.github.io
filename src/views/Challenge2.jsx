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
                            title="Combating Deforestation"
                            duration="July 1st 2019 00:00 ET to September 2nd 2019 23:59 ET"
                            registrationURL="https://forms.gle/5ftAu16Evwiz8ewT8"
                            prizes="The prize for the top submission is $500!"
                            problemStatement={
                                <div>
                                    <h2>Climate Action: Combating Deforestation</h2>
                                    <p>
                                        As the UNDP's climate action partner we are passionate about our planet and actively working towards a sustainable future
                                        and we would love you to join us.
                                        <br />
                                        <br />
                                        In this challenge we want you to address the growing global issue of deforestation.  There are many causes of this devastating problem and we want you to get creative with a solution that can help!
                                        Begin by refining this problem to a much more specific region and understand the true challenges being faced there.
                                        <br />
                                        <br />
                                        Some resources to help get you started...
                                        <br />
                                        <br />
                                        <ul>
                                            <li><a href="https://www.nationalgeographic.com/environment/global-warming/deforestation/" target="blank">Deforestation Explained</a></li>
                                            <li><a target="blank" href="https://www.azocleantech.com/article.aspx?ArticleID=470">Technology to Tackle Deforestation</a></li>
                                            <li><a target="blank" href="https://theaseanpost.com/article/fighting-deforestation-technology">Fighting Deforestation with Technology</a></li>
                                            <li><a target="blank" href="https://phys.org/news/2016-06-drone-technology-tackle-deforestation.html">Innovative Drone Technology to Tackle Deforestation</a></li>
                                        </ul>
                                    </p>
                                </div>
                            }
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
