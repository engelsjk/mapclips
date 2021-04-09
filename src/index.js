import { init, zoom } from './ui/map';
import camera from './ui/camera';
import draw from './lib/draw';

import shape from './data/shape';
import dotenv from "dotenv"

dotenv.config({ path: '.env' });
console.log(process.env)

var map = init();

map.on("load", function () {
    camera(map);
    draw(map, shape());
    zoom(map, shape());
})

