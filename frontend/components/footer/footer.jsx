import React from 'react';

class Footer extends React.Component {

  componentDidMount() {
    const mapDOMnode = document.getElementById('maps');
    console.log(mapDOMnode);

    const rugby = { lat: 36.991358, lng: -122.052097 };

    const mapOptions = {
      center: rugby,
      zoom: 15,
      mapTypeId: 'satellite'
    };

    const map = new google.maps.Map(mapDOMnode, mapOptions);

    const marker = new google.maps.Marker({
      position: rugby,
      map: map
    });
  }

  render() {
    return (
      <div className='footer'>
        <div className='footer-maps'>
          <div id='maps'>
            Google Maps
          </div>

          <ul className='footer-address'>
            <li> University of California, Santa Cruz </li>
            <li> 1156 High Street </li>
            <li> Santa Cruz, CA 95060 </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
