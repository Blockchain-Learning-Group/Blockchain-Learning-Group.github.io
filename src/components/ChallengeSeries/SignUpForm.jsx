import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section id="signUp">
                <header>
                    <h3>Sign-up now to reserve your spot.</h3>
                    <form>
                        <input type='text' label='email' />
                    </form>
                </header>
            </section>
        );
    }
}
