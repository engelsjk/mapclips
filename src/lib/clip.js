import mapboxgl from 'mapbox-gl';
import * as d3 from "d3";
import rewind from '@mapbox/geojson-rewind';

export default function clip(map, shape) {

    function projectPoint(lon, lat) {
        var point = map.project(new mapboxgl.LngLat(lon, lat));
        this.stream.point(point.x, point.y);
    }
    
    var data = rewind(shape, true); // d3 expects reverse winding from geojson (make sure a hole is clipping)
    
    const mapCanvas = map.getCanvas();
    var width = mapCanvas.offsetWidth;
    var height = mapCanvas.offsetHeight;
   
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;

    var transform = d3.geoTransform({ point: projectPoint });
    // var bounds = d3.geoPath().projection(transform).bounds(data);

    var geoGenerator = d3.geoPath()
        .projection(transform)
        .context(context);

    geoGenerator(data);
    context.clip();
    context.drawImage(mapCanvas, 0, 0);

    var img = canvas.toDataURL("image/png");
    var a = document.createElement("a");
    a.href = img;
    a.download = "image.png";
    a.click();
}

