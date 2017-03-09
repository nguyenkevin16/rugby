import React from 'react';

class Splash extends React.Component {
  render() {
    return (
      <div className='splash'>
        <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1488944669/slugby_ralhup.jpg'
          alt='Drone Overhead of the UCSC Rugby Pitch and Monterey Bay'/>

        <div className='splash-news'>
          <div className='splash-welcome'>
            <h1> Welcome to the homepage of the UCSC Rugby Football Club </h1>
            <p> This is the oldest club on campus, fielding the inaugural team in 1967.
              They were also the first team at UCSC to call themselves the “Slugs”. </p>

            <iframe width="560"
              height="315"
              src="https://www.youtube.com/embed/70EzH11X8cA"
              frameborder="0"
              allowfullscreen>
            </iframe>
          </div>

          <a className="twitter-timeline"
            data-width="600"
            data-height="600"
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
