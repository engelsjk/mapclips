import MapboxDraw from '@mapbox/mapbox-gl-draw';
import CameraMode from '../lib/camera_mode';
import clip from '../lib/clip';
import shape from '../data/shape';

export default function camera(map) {

    var Draw = new MapboxDraw({
        defaultMode: 'camera',
        modes: Object.assign({
            camera: CameraMode,
        }, MapboxDraw.modes),
    });

    map.addControl(Draw);

    createControlButton('camera', {
        container: document.getElementsByClassName("mapboxgl-ctrl-group")[0],
        className: 'mapbox-gl-draw_camera',
        title: `Camera tool '(c)'`,
        onActivate: () => clip(map, shape()) // console.log('click') //Draw.changeMode('camera'),
    });
}

function createControlButton(id, options = {}) {
    const button = document.createElement('button');
    button.className = `mapbox-gl-draw_ctrl-draw-btn ${options.className}`;
    button.setAttribute('title', options.title);
    options.container.appendChild(button);

    button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        options.onActivate();
    }, true);

    return button;
}


