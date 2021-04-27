import React from 'react';
import HomeCarousel from './HomeCarouselComponent';
import HomeDonations from './HomeDonationsComponent';
import UpcomingEvents from './HomeEventsComponent';

function Home(props) {
    return(
        <div className="container">
            <div className="row">
                <div className='col'>
                    <HomeCarousel />
                    <HomeDonations />
                    <UpcomingEvents />
                </div>
                {/* <div className="col">
                    <h1>Home Page</h1>
                </div> */}
            </div>
        </div>
    );
}

export default Home;