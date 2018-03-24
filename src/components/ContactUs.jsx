import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section id="ContactUs">
                <address>
                    <strong>Where we are located</strong>
                    <div>Blockchain Learning Group Inc.</div>
                    <div>24 Murray Spiers Court, Markham, ON, L6C 3C5 CANADA</div>
                    <div style={{ marginTop: '1rem' }}>Let's talk</div>
                    <div>
                        <a href="tel:+14165008518">+1 (416) 500-8518</a>
                    </div>
                    <div>
                        <a href="mailto:info@BlockchainLearningGroup.com">info@BlockchainLearningGroup.com</a>
                    </div>
                </address>
                <div className="social">
                    <a target="_blank" rel="noopener noreferrer" className="linkedin" href="https://ca.linkedin.com/company/blockchainlearninggroup"></a>
                    <a target="_blank" rel="noopener noreferrer" className="twitter" href="https://twitter.com/BlockchainLG"></a>
                    <a target="_blank" rel="noopener noreferrer" className="github" href="https://github.com/Blockchain-Learning-Group"></a>
                </div>
            </section>
        );
    }
}
