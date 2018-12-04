import React from "react";

import Main from "./views/Main";
import ChallengeSeries from "./views/ChallengeSeries";
import Challenge1 from "./views/Challenge1";

export default class extends React.Component {
    render() {
        switch (window.location.hash) {
            case "#challenge-series":
                return (
                    <div id="App">
                        <ChallengeSeries />
                    </div>
                );
            
            case "#challenge-series/1":
                return (
                    <div id="App">
                        <Challenge1 />
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
