import React from 'react';

import AboutUs from './components/AboutUs';
import AdvisoryBoard from './components/AdvisoryBoard';
import Courses from './components/Courses';
import Diversity from './components/Diversity';
import Home from './components/Home';
import Team from './components/Team';

export default class extends React.Component {
    render() {
        return (
            <div>
                <header></header>
                <main>
                    <Home />
                    <AboutUs />
                    <Courses />
                    <Diversity />
                    <Team />
                    <AdvisoryBoard />
                </main>
                <footer>
                    <div>
                        <strong>Where we are located</strong>
                        <div>Blockchain Learning Group Inc.</div>
                        <div>24 Murray Spiers Court, Markham, ON, L6C 3C5 CANADA</div>
                        <div>Let's talk</div>
                        <div>+1 (416) 500.8518</div>
                        <div>murtaza@blockchainlearninggroup.com</div>
                    </div>
                </footer>
            </div>
        );
    }
}
