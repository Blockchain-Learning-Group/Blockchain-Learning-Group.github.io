import React from 'react';
import { Link, Route } from 'react-router-dom';

import Main from './views/Main';
import ChallengeSeries from './views/ChallengeSeries';

export default class extends React.Component {
    render() {
        return (
            <div id="App">
                <Route exact={true} path={process.env.PUBLIC_URL + "/"} render={() => <Main />} />
                <Route exact={true} path={process.env.PUBLIC_URL + "/challenge-series"} render={() => <ChallengeSeries />} />
            </div>
        );
    }
}
