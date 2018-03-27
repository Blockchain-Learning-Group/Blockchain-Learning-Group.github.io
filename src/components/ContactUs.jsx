import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section id="ContactUs">
                <address>
                    <div>Looking to find out more information or how <strong><a href="https://BlockscaleSolutions.com">Blockscale Solutions</a></strong> - or <strong><a href="https://BlockchainLearningGroup.com">Blockchain Learning Group</a></strong> - can help transform your strategies into action, please contact us at</div>
                    <div className="layout horizontal justified">
                        <div>
                            <img alt="Blockscale Solutions" src="images/BlockscaleSolutions.png" style={{ height: '50px' }} />
                        </div>
                        <div>
                            <div className="logo" />
                        </div>
                    </div>
                    <div style={{ marginTop: '1rem' }}>Let's talk</div>
                    <div>
                        <a href="tel:+14165008518">+1 (416) 500-8518</a>
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
