## DRYwall

Got a bunch of map tiles you need to serve, but maybe they don't always cover your full map?

You could load some other tile set underneath it to fill up the empty areas, but now you're loading extra tiles you don't need.

Don't Repeat YourTiles! You just need some DRYwall underneath!

DRYwall is a simple Node server that will return tiles to map requests, but if the tile is missing, it will redirect the request to another server. It will also flip between TMS and OSM style xyz orderings if needed.

### How it works: 

1) Set your tile folder
2) Set the url definition of another map server (Leaflet style)
3) Fire up the server and you're set

### To Do:

Serve more than one layer, return other local tiles sets instead of redirecting
