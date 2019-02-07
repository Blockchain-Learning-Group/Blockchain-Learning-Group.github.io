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
            <section id="Home">
                <header>
                    <h3>Take Control of Your Blockchain Future</h3>
                    <p>Ready to jumpstart your blockchain education? Looking to turn your Blockchain strategies into tangible solutions and results?</p>
                    <div>
                        <a href="#Courses" className="blg-btn" onClick={this.scrollTo.bind(this)}>VIEW OUR PROGRAMS</a>
                        <div />
                    </div>
                </header>
                <footer>
                    <p>
                        The Blockchain Learning Group facilitates comprehensive, high impact education programs aimed at the developer base - 
                        and the organizations that they belong to - and provides them with the knowledge, 
                        tools and confidence to make an immediate impact.
                    </p>
                </footer>
            </section>
        );
    }
}
