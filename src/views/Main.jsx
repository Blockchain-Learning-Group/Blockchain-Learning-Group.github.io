import React from "react";

import AboutUs from "../components/AboutUs";
import Advisors from "../components/Advisors";
import Clients from "../components/Clients";
import ContactUs from "../components/ContactUs";
import Courses from "../components/Courses";
import News from "../components/News";
import Diversity from "../components/Diversity";
import Home from "../components/Home";
import ProductDevelopmentServices from "../components/ProductDevelopmentServices";
import Team from "../components/Team";

export default class extends React.Component {
    showMenuList() {
        this.menu_list.className = "show";
    }

    hideMenuList(e) {
        if (e.target.hasAttribute("href")) {
            this.menu_list.className = "";
        }
    }

    scrollTo(e) {
        if (e.target.hasAttribute("href")) {
            let id = e.target.getAttribute("href").replace("#", "");
            let el = document.getElementById(id);
            document
                .getElementsByClassName("blg--main-wrapper")[0]
                .scroll(0, el.offsetTop);
            e.preventDefault();
        }
    }

    render() {
        return (
            <div id="App">
                <header className="mdc-elevation--z8">
                    <div className="--blg-wrapper">
                        <div className="logo" />

                        <div className="menu">
                            <i
                                className="material-icons mdc-toolbar__menu-icon"
                                onClick={this.showMenuList.bind(this)}
                            >
                                menu
                            </i>
                        </div>

                        <ul
                            ref={el => (this.menu_list = el)}
                            onClick={this.hideMenuList.bind(this)}
                        >
                            <li>
                                <a
                                    href="#Home"
                                    onClick={this.scrollTo.bind(this)}
                                >
                                    Home
                                </a>
                            </li>
                            {/* <li>
                                <a
                                    href="#AboutUs"
                                    onClick={this.scrollTo.bind(this)}
                                >
                                    About Us
                                </a>
                            </li> */}
                            <li>
                                <a
                                    href="#Courses"
                                    onClick={this.scrollTo.bind(this)}
                                >
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#Team"
                                    onClick={this.scrollTo.bind(this)}
                                >
                                    Team
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#Advisors"
                                    onClick={this.scrollTo.bind(this)}
                                >
                                    Advisors
                                </a>
                            </li>
                            {/* <li>
                                <a
                                    href="#Clients"
                                    onClick={this.scrollTo.bind(this)}
                                >
                                    Clients
                                </a>
                            </li> */}
                            <li>
                                <a
                                    href="#ContactUs"
                                    onClick={this.scrollTo.bind(this)}
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <u>
                                    <a
                                        href="#challenge-series"
                                        onClick={() => {
                                            window.location.hash =
                                                "challenge-series";
                                        }}
                                    >
                                        Challenge Series
                                    </a>
                                </u>
                            </li>
                            <li>
                                <u>
                                    <a
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1m8xVqV2RMTWrKbECKf3RZsdcy44eM21S/view"
                                    >
                                        Digital ID Paper
                                    </a>
                                </u>
                            </li>
                        </ul>
                    </div>
                </header>

                <main>
                    <div className="blg--main-wrapper">
                        <Home />
                        <AboutUs />
                        <News />
                        <Courses />
                        <Clients />
                        <Diversity />
                        <ProductDevelopmentServices />
                        <Team />
                        <Advisors />
                        <ContactUs />
                    </div>
                </main>
            </div>
        );
    }
}
