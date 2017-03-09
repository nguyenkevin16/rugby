import React from 'react';

class Splash extends React.Component {
  render() {
    return (
      <div className='splash'>
        <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1488944669/slugby_ralhup.jpg'
          alt='Drone Overhead of the UCSC Rugby Pitch and Monterey Bay'/>

        <div className='splash-news'>
          <a className="twitter-timeline"
            data-width="600"
            data-height="650"
            data-theme="light"
            data-link-color="#FAB81E"
            href="https://twitter.com/MensSlugRugby">Tweets by MensSlugRugby
          </a>
        </div>
      </div>
    );
  }
}

export default Splash;
