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
            <div id="App">
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
