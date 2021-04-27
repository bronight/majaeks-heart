import React from 'react';
import { Link } from 'react-router-dom';

function UpcomingEvents() {
    return(
        <div className="events mb-5">
            <div className="row">
                <div className="col">
                    {/* <h1 className="title">Upcoming Events</h1> */}
                    <h1 className="title-style-1">Upcoming Events<strong><span className="title-under"></span></strong></h1>
                    <div className="images">
                        <img src="/assets/images/BookDrive.png" alt="Book Drive" className="rounded mx-auto d-block"></img>
                        <Link to="/#">Majaek's Heart Annual Book Drive</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpcomingEvents;