import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import bbox from '@turf/bbox';

export function init() {

    mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [-77.05020904541016, 38.88939607092349],
        zoom: 12,
        preserveDrawingBuffer: true
    });

    return map;
}

export function zoom(map, shape) {
    var bounds = bbox(shape);
    map.fitBounds(bounds, { padding: 0 });
}
