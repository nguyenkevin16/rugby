import React from 'react';

class Splash extends React.Component {
  render() {
    return (
      <div className='splash'>
        <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1488944669/slugby_ralhup.jpg'
          alt='Drone Overhead of the UCSC Rugby Pitch and Monterey Bay'/>

        <div className='splash-news'>
          <div className='splash-welcome'>
            <h1> Welcome to the home of Slug Rugby </h1>

            <p> Established in 1967, the team is the oldest organized sports
              club on campus and the first to call themselves the "Slugs".
            </p>

            <p>
              The team currently competes in the Pacific Western Rugby Conference.
              The Conference is a Division 1 AA conference and competes
              for the USA Rugby National Rugby Competition. Teams include:
              Stanford, UC Davis, San Jose State, Fresno State, Chico State,
              SF State, and UN Reno.
            </p>

            <iframe width="560"
              height="315"
              src="https://www.youtube.com/embed/70EzH11X8cA">
            </iframe>
          </div>

          <a className="twitter-timeline"
            data-width="600"
            data-height="900"
            data-theme="light"
            data-chrome="noheader nofooter"
            data-link-color="#FAB81E"
            href="https://twitter.com/nguyenkevin16/lists/slug-rugby">
          </a>
        </div>
      </div>
    );
  }
}

export default Splash;
