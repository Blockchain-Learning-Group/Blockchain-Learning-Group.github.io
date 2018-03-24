import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section id="Team">
                <header>
                    <h3>Our Team</h3>
                </header>

                <ul>
                    <li>
                        <header>
                            <div>
                                <span className="avatar">
                                    <img alt="" src="images/profiles/Chami.jpg" />
                                </span>
                                <span className="linkedin" style={{ display: 'none' }}>
                                    <a target="_blank" rel="noopener noreferrer" className="linkedin" href="https://ca.linkedin.com/company/blockchainlearninggroup"></a>
                                </span>
                            </div>
                        </header>
                        <footer>
                            <h4>
                                <div>Chami Akmeemana</div>
                                <div>Chief Executive Officer</div>
                            </h4>
                            <aside>
                                <p>Chami Akmeemana is a Blockchain and AI Specialist. He pursued a Ph.D. in Bioceramic Engineering at Queen Mary, University of London, until deciding to forgo an academic career in favor of Law Enforcement. In 2002, he joined London’s Metropolitan Police.</p>
                                <p>Chami has had 4 successful exists over the last decade and is passionate about the intersection of technology, business and social good. His experience includes serving as Director of regulatory and government affairs at ConsenSys Inc; Fintech Advisor to the Ontario Securities Commission; and Managing Director, Fintech and blockchain at the Global Risk Institute.</p>
                                <p>Chami is also the Chairman of the Blockchain Association Australia and a faculty member of the Blockchain Research Institute.</p>
                            </aside>
                        </footer>
                    </li>

                    <li>
                        <header>
                            <div>
                                <span className="avatar">
                                    <img alt="" src="images/profiles/Murtaza.jpg" />
                                </span>
                                <span className="linkedin" style={{ display: 'none' }}>
                                    <a target="_blank" rel="noopener noreferrer" className="linkedin" href="https://ca.linkedin.com/company/blockchainlearninggroup"></a>
                                </span>
                            </div>
                        </header>
                        <footer>
                            <h4>
                                <div>Murtaza Tawawala</div>
                                <div>Chief Operating Officer</div>
                            </h4>
                            <aside>
                                <p>Murtaza brings over 20 years of experience in training, marketing, project management and product development for both global firms and Canadian companies. He is an accomplished training and marketing professional with extensive experience in the technology, insurance, financial, transportation and retail industries.</p>
                            </aside>
                        </footer>
                    </li>

                    <li>
                        <header>
                            <div>
                                <span className="avatar">
                                    <img alt="" src="images/profiles/Adam.jpg" />
                                </span>
                                <span className="linkedin" style={{ display: 'none' }}>
                                    <a target="_blank" rel="noopener noreferrer" className="linkedin" href="https://ca.linkedin.com/company/blockchainlearninggroup"></a>
                                </span>
                            </div>
                        </header>
                        <footer>
                            <h4>
                                <div>Adam Lemmon</div>
                                <div>VP, Training & Operations</div>
                            </h4>
                            <aside>
                                <p>Adam is a technology enthusiast and passionate engineer. Prior to joining Blockchain Learning Group, Adam contributed to a wide range of Blockchain projects as well as lead various development workshops in Australia and Canada. Adam is inspired by the potential of Blockchain technology and actively is helping to build the global community.</p>
                            </aside>
                        </footer>
                    </li>
                </ul>
            </section>
        );
    }
}
