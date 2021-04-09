include .env

bundle:
	browserify src/index.js -t [ envify --MAPBOX_ACCESS_TOKEN $(MAPBOX_ACCESS_TOKEN)] -p esmify > dist/bundle.js