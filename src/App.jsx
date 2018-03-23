import React from 'react';

import AboutUs from './components/AboutUs';
import AdvisoryBoard from './components/AdvisoryBoard';
import Clients from './components/Clients';
import Courses from './components/Courses';
import Diversity from './components/Diversity';
import Home from './components/Home';
import Team from './components/Team';

export default class extends React.Component {

    showMenuList() {
        this.menu_list.className = 'show';
    }

    hideMenuList(e) {
        if (e.target.hasAttribute('href')) {
            this.menu_list.className = '';
        }
    }

    render() {
        return (
            <div id="App">
                <header className="mdc-elevation--z8">
                    <div className="--blg-wrapper">
                        <div className="logo" />

                        <div className="menu">
                            <i className="material-icons mdc-toolbar__menu-icon" onClick={this.showMenuList.bind(this)}>menu</i>
                        </div>

                        <ul ref={(el) => this.menu_list = el} onClick={this.hideMenuList.bind(this)}>
                            <li>
                                <a href="#Home">Home</a>
                            </li>
                            <li>
                                <a href="#AboutUs">About Us</a>
                            </li>
                            <li>
                                <a href="#Courses">Courses</a>
                            </li>
                            <li>
                                <a href="#Team">Our Team</a>
                            </li>
                            <li>
                                <a href="#AdvisoryBoard">Advisory Board</a>
                            </li>
                            <li>
                                <a href="#OurClients">Our Clients</a>
                            </li>
                            <li>
                                <a href="ContactUs">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </header>

                <main>
                    <Home />
                    <AboutUs />
                    <Courses />
                    <Diversity />
                    <Clients />
                    <Team />
                    <AdvisoryBoard />
                </main>

                <footer>
                    <address>
                        <strong>Where we are located</strong>
                        <div>Blockchain Learning Group Inc.</div>
                        <div>24 Murray Spiers Court, Markham, ON, L6C 3C5 CANADA</div>
                        <div style={{ marginTop: '1rem' }}>Let's talk</div>
                        <div>
                            <a href="tel:+14165008518">+1 (416) 500-8518</a>
                        </div>
                        <div>
                            <a href="mailto:murtaza@blockchainlearninggroup.com">murtaza@BlockchainLearningGroup.com</a>
                        </div>
                    </address>
                    <div className="social">
                        <a target="_blank" rel="noopener noreferrer" className="linkedin" href="https://ca.linkedin.com/company/blockchainlearninggroup"></a>
                        <a target="_blank" rel="noopener noreferrer" className="twitter" href="https://twitter.com/BlockchainLG"></a>
                        <a target="_blank" rel="noopener noreferrer" className="github" href="https://github.com/Blockchain-Learning-Group"></a>
                        <a target="_blank" rel="noopener noreferrer" className="slack" href="https://blockchainlearning.slack.com"></a>
                    </div>
                </footer>
            </div >
        );
    }
}
