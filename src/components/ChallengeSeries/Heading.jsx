import React from 'react';

export default class extends React.Component {
    scrollTo(e) {
        if (e.target.hasAttribute('href')) {
            let id = e.target.getAttribute('href').replace('#', '');
            let el = document.getElementById(id);
            document.getElementsByClassName('blg--main-wrapper')[0].scroll(0, el.offsetTop);
            e.preventDefault();
        }
    }

    render() {
        return (
            <section id="ChallengeHeading">
                <header>
                    <h3>Blockchain Learning Group's <strong>Challenge Series</strong></h3>
                    <p>[finalize copy] The Blockchain Learning Group is launching a series of challenges...</p>
                    <p>[finalize copy]  Example may include human rights, world hunger, financial inclusion and many more...</p>
                    <div>
                        <a href="#Challenges" className="blg-btn" onClick={this.scrollTo.bind(this)}>VIEW OUR CHALLENGES</a>
                        <div />
                    </div>
                </header>
                <footer>
                </footer>
            </section>
        );
    }
}