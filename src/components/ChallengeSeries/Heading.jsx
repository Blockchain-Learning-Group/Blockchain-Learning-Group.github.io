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
                    <p>The Blockchain Learning Group is launching a series of global challenges.</p>
                    <p>Examples may include human rights, world hunger, financial inclusion, pharmaceutical fraud and many more...</p>
                    <div>
                        <a href="#" className="blg-btn" onClick={() => window.open('https://goo.gl/forms/LGmorh3YbdAy4Qew2')}>I'M INTERESTED!</a>
                        <div />
                    </div>
                </header>
                <footer>
                </footer>
            </section>
        );
    }
}