import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="container site-footer sticky-bottom">
            <div className="row">
                <div className="col-4 col-sm-2 offset-1 pt-4">
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="about">About Us</Link></li>
                        <li><Link to="#">How to Help</Link></li>
                    </ul>
                </div>
                <div className="col pt-2">
                    <Link to="/home"><img src="assets/images/Majaeks-Heart-Logo-25-Black.png" className="img-fluid mx-auto d-block" alt="Majaek's Heart Logo" /></Link>
                </div>
                <div className="col-4 col-sm-3 text-center pt-4">
                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                    <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                </div>
            </div>
        </div>
    );
}

export default Footer;