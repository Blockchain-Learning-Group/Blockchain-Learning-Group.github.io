import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section id="Advisors">
                <header>
                    <h3>Advisors</h3>
                    <p>We've aligned with leading blockchain experts worldwide and the developer community at large to form our advisory board, and we are just starting! We will continue to add thought leaders, corporate veterans and technology guru's on as advisors as we continue our journey.</p>
                </header>

                <ul>
                    <li>
                        <header>
                            <div>
                                <span className="avatar">
                                    <img alt="" src="images/profiles/Jonathan.jpg" />
                                </span>
                                <span className="linkedin" style={{ display: 'none' }}>
                                    <a target="_blank" rel="noopener noreferrer" className="linkedin" href="https://ca.linkedin.com/company/blockchainlearninggroup"></a>
                                </span>
                            </div>
                        </header>
                        <footer>
                            <h4>
                                <div>Dr. Jonathan Reichental</div>
                            </h4>
                            <aside>
                                <p>Currently the Chief Information Officer (CIO) for the City of Palo Alto, is a multiple award-winning technology leader whose 25-year career has spanned both the private and public sectors. In 2017, he was named one of the top 100 CIOs in the world and in 2016 he was named one of the top 20 most influential CIO's in the United States. Dr. Reichental is also recognized as a global thought leader on a number of emerging trends including urban innovation and blockchain technology. Dr. Reichental works with his teams to apply technology innovation in organizations to create new value and to enable work to be more meaningful and fun.</p>
                            </aside>
                        </footer>
                    </li>

                    <li>
                        <header>
                            <div>
                                <span className="avatar">
                                    <img alt="" src="images/profiles/Jared.jpg" />
                                </span>
                                <span className="linkedin" style={{ display: 'none' }}>
                                    <a target="_blank" rel="noopener noreferrer" className="linkedin" href="https://ca.linkedin.com/company/blockchainlearninggroup"></a>
                                </span>
                            </div>
                        </header>
                        <footer>
                            <h4>
                                <div>Jared "HG" Harwayne-Gidansky</div>
                            </h4>
                            <aside>
                                <p>Jared is a leader in the enterprise blockchain community, serving as a Board Member of the Blockchain Association of Australia, was the the Deputy Global Head of the Emerging Business & Technology group at BNY Mellon- a firm wide group focused on Distributed Ledger and other disruptive technologies, and was a Founding Member of the Enterprise Ethereum Alliance where he served on their Governance Committee. His latest venture is in this field.</p>
                                <p>Jared also has served as an Adjunct Professor of Electrical Engineering at Cooper Union and provides consulting services in the areas of data science, analytics, product management/development, blockchain, disruptive technology, strategy, project management, emergency services, and IT.</p>
                                <p>Jared received his B. Eng. (with honors) in Electrical Engineering from Cooper Union and his PhD in Electrical Engineering from Yale University.</p>
                            </aside>
                        </footer>
                    </li>

                    <li>
                        <header>
                            <div>
                                <span className="avatar">
                                    <img alt="" src="images/profiles/Lincoln.jpg" />
                                </span>
                                <span className="linkedin" style={{ display: 'none' }}>
                                    <a target="_blank" rel="noopener noreferrer" className="linkedin" href="https://ca.linkedin.com/company/blockchainlearninggroup"></a>
                                </span>
                            </div>
                        </header>
                        <footer>
                            <h4>
                                <div>Lincoln Teo</div>
                            </h4>
                            <aside>
                                <p>Currently an Advisor with the central bank of Brunei Darussalam. He has managed multiple credit bureau projects in South-East Asia (Singapore, Malaysia, Indonesia, Vietnam and Brunei) as a senior executive of Dun & Bradstreet and then with Experian.</p>
                                <p>Lincoln’s experience includes serving on project teams of the World Bank Group and the Asian Development Bank. More recently, he founded Intel Wise, an ICT firm that has successfully integrated information registries containing data on more than 80+ million companies in China and also expanding the use of blockchain technologies to link corporate registries regionally.</p>
                            </aside>
                        </footer>
                    </li>
                </ul>
            </section>
        );
    }
}
