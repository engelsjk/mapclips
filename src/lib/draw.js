export default function draw(map, shape) {
    map.addSource('shape', {
        'type': 'geojson',
        'data': shape
    });
    map.addLayer({
        'id': 'shape',
        'type': 'line',
        'source': 'shape',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#a832a6',
            'line-width': 8
        }
    });
}