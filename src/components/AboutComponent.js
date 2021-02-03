import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {
    return(
        <main className="bg-light">
            <div className="container">
                <section className="row mb-4">
                    <div className="col text-center">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>About Us</BreadcrumbItem>
                        </Breadcrumb>
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
                <section className="row mt-4">
                    <div className="mission">
                        <img src="/assets/images/wanderer2.jpg" alt="Homeless Man Image" className="img-fluid" styles="background-size: 'cover'" />
                        <div className="centered">
                            <h1>Our Mission</h1>
                                <p>
                                    Majaek’s Heart is a committed non profit organization who is dedicated to<br />
                                    helping the no-income and low-income and homeless families in<br />
                                    Pennsylvania. We are a committee of all nurses working together with one<br />
                                    goal in mind: to assist our community in anyway possible with items<br />
                                    necessary for daily living.<br />
                            </p>
                        </div>
                    </div>
                </section>
                <section className="row mt-4 mb-4">
                    <div className="mission">
                        <img src="/assets/images/food_bank3.jpg" alt="Food Bank Image" className="img-fluid" styles="background-size: 'cover'" />
                        <div className="centered">
                            <h1>Our Vision</h1>
                                <p>
                                Majaek’s Heart’s vision is to be a publicly recognized resource that assists<br />
                                the no-income and low-income community as well as a proud partner to<br />
                                similar organizations in the Pennsylvania area.<br />
                            </p>
                        </div>
                    </div>
                </section>
                <div className="text-center"><h1>Our Board Members</h1></div>
                <section className="row my-2">
                    <div className="col-2"></div>
                    <div className="col-3 mt-2">
                        <div className="card shadow p-3 mb-5 my-4 bg-white rounded boardMember">
                            <img src="assets/images/woman.jpg" class="card-img-top" alt="woman" />
                            <div class="card-body">
                                <p class="card-text">
                                    I, Genine Suggs, am the President and Founder of Majaek's Heart Association. Majaek's Heart received its name from my six children, five which I birthed...<br /> 
                                    <Link to="/about/genine-suggs" className="pt-0 pl-0 ml-0">Learn more...</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-3 mt-2">
                        <div className="card shadow p-3 mb-5 my-4 bg-white rounded boardMember">
                            <img src="assets/images/woman.jpg" class="card-img-top" alt="woman2" />
                            <div class="card-body">
                                <p class="card-text">
                                    Vanessa Texidor Pringle is a Registered Nurse in a long-term acute care hospital in
                                    northeastern Pennsylvania. She has been in the healthcare field since 2006.<br /> 
                                    <Link to="/about/vanessa-texidor-pringle" className="pt-0 pl-0 ml-0">Learn more...</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="row">
                    <div className="col-2"></div>
                    <div className="col-3">
                        <div className="card shadow p-3 mb-5 my-4 bg-white rounded boardMember">
                            <img src="assets/images/woman.jpg" class="card-img-top" alt="woman2" />
                            <div class="card-body">
                                <p class="card-text">
                                    Roseann Blake is a Registered Nurse in Northeast Pennsylvania. Roseann’s mother was a battered wife with little education and 2 young children.<br />  
                                    <Link to="/about/roseann-blake" className="pt-0 pl-0 ml-0">Learn more...</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-3">
                        <div className="card shadow p-3 mb-5 my-4 bg-white rounded boardMember">
                            <img src="assets/images/woman.jpg" class="card-img-top" alt="woman2" />
                            <div class="card-body">
                                <p class="card-text">
                                    Vanessa Texidor Pringle is a Registered Nurse in a long-term acute care hospital in
                                    northeastern Pennsylvania. She has been in the healthcare field since 2006. 
                                    <button className="btn btn-link pt-0 pl-0 ml-0" role="link" value="4">Learn more...</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="row mt-4 mb-5">
                    <div className="mission">
                        <img src="/assets/images/mother.jpg" alt="Image of a mother" className="img-fluid" styles="background-size: 'cover'" />
                        <div className="centeredInformed">
                            <h1>Stay Informed</h1>
                                <p>
                                <label for="updates"><i class="bi bi-envelope"></i></label>
                                <input type="email" id="updates" placeholder="Sign up for updates" />
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default About;