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
                    <p>Ready to jumpstart your blockchain education? Interested in an experiential-learning based approach that focuses on collaboration and design thinking principles to solve real world issueS with emerging technology?</p>
                    <div>
                        <a href="#Courses" className="blg-btn" onClick={this.scrollTo.bind(this)}>VIEW OUR PROGRAMS</a>
                        <div />
                    </div>
                </header>
                <footer>
                    <p>
                        The Blockchain Learning Group facilitates experiential learning-based education programs to support the innovation and design-thinking objectives of schools and organizations globally. Our programs not only help to build a strong technical foundation but also provides the opportunity to make an immediate impact with the lessons learned.
                    </p>
                </footer>
            </section>
        );
    }
}
