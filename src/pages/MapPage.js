import React, { Component } from 'react';
import mapboxjl from 'mapbox-gl';

class MapPage extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount = () => {
    mapboxjl.accessToken =
      'pk.eyJ1IjoiYWxleG5lc3Rlcm92IiwiYSI6ImNrZmVjcjAxbzAwbGIycnBxbDE5eDJva2gifQ.DwlIalULa6PTdpdLqe9QXA';

    this.map = new mapboxjl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [30.3056504, 59.9429126], // LED
      zoom: 10,
    });
  };

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <main className="MapPage">
        <div className="Map-wrapper">
          <div data-testid="map" className="Map" ref={this.mapContainer}></div>
        </div>
      </main>
    );
  }
}

export default MapPage;
