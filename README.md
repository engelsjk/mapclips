# mapclips

An experimental proof-of-concept for clipping Mapbox imagery using arbitrary shapes. Intended for size comparisons of various geospatial features at scale (e.g. the *Ever Given*).

## run

First, build the site.

```bash
make bundle
```

Then run a simple static server for the index.html file. I've been using [m3ng9i/ran](https://github.com/m3ng9i/ran) lately.
```
ran -p 8080
```

## inspiration

Originally inspired by [Ever Given Ever YWhere](https://evergiven-everywhere.glitch.me/) from [@en_dash](https://twitter.com/en_dash). An initial demo can be found at [engelsjk/evergiven-and-other-things](https://github.com/engelsjk/evergiven-and-other-things). Then this tweet by [@mappingmashups](https://twitter.com/mappingmashups) added further inspiration:

![https://twitter.com/mappingmashups/status/1379913649469284355](images/tweet.png)

So this demo is an experiment with that idea in mind.
