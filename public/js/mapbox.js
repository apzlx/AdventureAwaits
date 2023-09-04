/* eslint-disable */
const locations = JSON.parse(document.getElementById('map'), dataset.locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiYXByaWx6aG91OTgiLCJhIjoiY2xtNTRkNmM5MHR6MzNtcXJ0dDVyZWxoZyJ9.byzLvAI0swgOylzvXixQxw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/aprilzhou98/clm54ohnc028w01ns10uu6f6k',
});

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};