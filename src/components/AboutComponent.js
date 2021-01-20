import { render } from '@testing-library/react';
import React from 'react';
import Footer from './FooterComponent';
import Header from './HeaderComponent';

function About(props) {
    return(
        <main>
            <div className="container">
                <section className="row mt-2">
                    <div className="col text-center">
                        <h1>About Us</h1>
                        <p>
                            Majaek’s Heart is a nonprofit organization founded by Genine Suggs, LPN. She<br />
                            began her mission in 2015 with the simple goal of assisting her community.<br />
                            Within a few short weeks, Genine realized that the need in her community was<br />
                            larger than she anticipated. She began working thirty hours a week in overtime to<br />
                            offset the cost of assisting her neighborhood with their growing needs. After 5<br />
                            years of financing, commanding, and volunteering for her organization all by<br />
                            herself, she knew it was time for Majaek’s Heart to grow. In 2020, she shared her<br />
                            mission with her close friends, also nurses, and together they are getting closer<br />
                            to achieving Genine’s ultimate vision of being a household name. Majaek’s Heart<br />
                            is a Pennsylvania registered nonprofit organization.<br />
                            EIN# 85-3850405<br />
                        </p>
                    </div>
                </section>
                <section className="row mt-2">
                    <div className="col text-center">
                        <h1>Our Board Members</h1>
                        <div class="card boardMember">
                            <img src="assets/images/G.jpg" class="card-img-top" />
                            <div class="card-body">
                                <p class="card-text">
                                    Vanessa Texidor Pringle is a Registered
                                    Nurse in a long-term acute care hospital in
                                    northeastern Pennsylvania. She has been in the
                                    healthcare field since 2006...
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="row mt-2">
                    <div className="col text-center">
                        <h1>Our Mission</h1>
                        <p>
                            Majaek’s Heart is a committed non profit organization who is dedicated to<br />
                            helping the no-income and low-income and homeless families in<br />
                            Pennsylvania. We are a committee of all nurses working together with one<br />
                            goal in mind: to assist our community in anyway possible with items<br />
                            necessary for daily living.<br />
                        </p>
                    </div>
                </section>
                <section className="row">
                    <div className="col text-center">
                        <h1>Our Vision</h1>
                        <p>
                            Majaek’s Heart’s vision is to be a publicly recognized resource that assists<br />
                            the no-income and low-income community as well as a proud partner to<br />
                            similar organizations in the Pennsylvania area.<br />
                        </p>
                    </div>
                </section>
                <section className="row">
                    <div className="col text-center">
                        <h1>Contact Us</h1>
                        <p>
                            <strong><em>Location:</em></strong> Majaek’s Heart cannot currently be confined to a physical location. All<br />
                            board member are mobile and prepared to travel to where we are needed. We<br />
                            currently serve Monroe, Luzerne, and Lackawanna Counties.<br />
                            <strong><em>Hours:</em></strong> 24/7, 365<br />
                            <a role="button" className="btn btn-link" href="tel:+15703164357"><i className="fa fa-phone" /> Tel: 570-316-HELP or 570-316-4357</a><br />
                            <a role="button" className="btn btn-link" href="mailto:majaeksheart@yahoo.com"><i className="fa fa-envelope-o" /> Email: majaeksheart@yahoo.com</a>
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default About;