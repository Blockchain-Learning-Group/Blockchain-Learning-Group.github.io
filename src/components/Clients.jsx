import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client: 0,
            clients: 3
        };
    }

    handleClickPrevious() {
        this.setState({
            client:
                ((this.state.client - 1) < 0
                    ? this.state.clients - 1
                    : (this.state.client - 1)) % this.state.clients
        });
    }

    handleClickNext() {
        this.setState({
            client: (this.state.client + 1) % this.state.clients
        });
    }

    render() {
        return (
            <section id="Clients">
                <header>
                    <h3>Our Clients</h3>
                </header>

                <footer className="mdc-elevation--z8">
                    <nav>
                        <button className="blg__nav__btn--prev mdc-elevation--z2" onClick={this.handleClickPrevious.bind(this)}>
                            <i className="material-icons">chevron_left</i>
                        </button>
                        <button className="blg__nav__btn--next mdc-elevation--z2" onClick={this.handleClickNext.bind(this)}>
                            <i className="material-icons">chevron_right</i>
                        </button>
                    </nav>

                    <ul>
                        <li className={this.state.client === 0 ? '' : 'blg--invisible'}>
                            <div>
                                <img alt="AGL Energy" src="images/clients/agl.png" />
                            </div>
                            <div>
                                <header>
                                    <p>“Thank you to the Blockchain Learning Group for equipping AGL with a strong foundation in blockchain technology and providing us with the knowledge, tools and confidence to start making meaningful inroads with integrating this technology. We have gone from talking about Blockchain to actually developing and experimenting with different solutions, a significant achievement realized in a relatively short period of time. I would highly recommend the Blockchain Learning Group to any organization that is looking for a world-class education partner to jumpstart their own blockchain journeys!”</p>
                                </header>
                                <footer>
                                    <h4>
                                        <div>Joy Marrocco</div>
                                        <div>IT Innovation Manager</div>
                                        <div>AGL Energy</div>
                                    </h4>
                                </footer>
                            </div>
                        </li>

                        <li className={this.state.client === 2 ? '' : 'blg--invisible'}>
                            <div>
                                <img alt="The Knowledge Society" src="images/clients/TheKnowledgeSociety.png" />
                            </div>
                            <div>
                                <header>
                                    <p>"Wow. Just wow. I cannot say enough about how valuable the Blockchain Learning Group experience was for our TKS students. Before the training, our students had a rudimentary understanding of blockchain technologies. Only a few weeks later they are building multiple decentralized applications and becoming young thought leaders in such a short period of time! Adam and the team were phenomenal facilitators. Not only were they incredibly knowledgeable, but they knew how to deliver the content to different audiences who might have had various levels of coding experience and blockchain understanding. How they were able to provide a personalized experience to a group of young people was very impressive.”</p>
                                </header>
                                <footer>
                                    <h4>
                                        <div>Nadeem Nathoo</div>
                                        <div>Executive Director,</div>
                                        <div>The Knowledge Society</div>
                                    </h4>
                                </footer>
                            </div>
                        </li>

                        <li className={this.state.client === 1 ? '' : 'blg--invisible'} style={{ position: 'relative' }}>
                            <div>
                                <img alt="Melbourne Girls Grammar School" src="images/clients/MelbourneGirlsGrammarSchool.png" />
                            </div>
                            <div>
                                <header>
                                    <p>“Blockchain Learning Group provided an immersive learning experience for students and staff at Melbourne Girls Grammar. Their workshops illuminated for all participants the exciting, complex, and disruptive nature of blockchain technologies and its potential to democratize trust. Their skillful and patient coaching enabled students to become developers and integrators of blockchain technologies and imagine possible career pathways in tech. Our girls were able to demonstrate their new-found capabilities through success at the Smart Cities Hackathon in Melbourne where they developed DAPPs using the Ethereum blockchain and were one of the prize-winning groups.”</p>
                                </header>
                                <footer>
                                    <h4>
                                        <div>Ivan Carlisle, BA, BE(Monash), MTeach, MEdPolicy(Int)(Melb)</div>
                                        <div>Director of STEM, Teacher of Mathematics & Algorithmics</div>
                                        <div>Melbourne Girls Grammar School</div>
                                    </h4>
                                </footer>
                            </div>
                        </li>
                    </ul>
                </footer>
            </section>
        );
    }
}
