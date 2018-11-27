import React from "react";

import Main from "./views/Main";
import ChallengeSeries from "./views/ChallengeSeries";

export default class extends React.Component {
    render() {
        switch (window.location.hash) {
            case "#challenge-series":
                return (
                    <div id="App">
                        <ChallengeSeries />
                    </div>
                );

            default:
                window.location.hash = "";
                return (
                    <div id="App">
                        <Main />
                    </div>
                );
        }
    }
}
