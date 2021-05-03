import React from 'react';
import HomeCarousel from '../components/HomeCarouselComponent';
import HomeDonations from '../components/HomeDonationsComponent';
import UpcomingEvents from '../components/HomeEventsComponent';

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