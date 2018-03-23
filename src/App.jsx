import React from 'react';

import AboutUs from './components/AboutUs';
import AdvisoryBoard from './components/AdvisoryBoard';
import Clients from './components/Clients';
import ContactUs from './components/ContactUs';
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
                    <div className="blg--main-wrapper">
                        <Home />
                        <AboutUs />
                        <Courses />
                        <Diversity />
                        <Clients />
                        <Team />
                        <AdvisoryBoard />
                        <ContactUs />
                    </div>
                </main>
            </div>
        );
    }
}
