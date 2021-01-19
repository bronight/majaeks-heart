import { render } from '@testing-library/react';
import React from 'react';
import Footer from './FooterComponent';
import Header from './HeaderComponent';

function About(props) {
    return(
        <main>
            <div className="container">
                <div className="row mt-2">
                    <div className="col text-center">
                        <h1>Our Mission</h1>
                        <p>
                        Majaek’s Heart is a committed non profit organization who is dedicated to
helping the no-income and low-income and homeless families in
Pennsylvania. We are a committee of all nurses working together with one
goal in mind: to assist our community in anyway possible with items
necessary for daily living.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;