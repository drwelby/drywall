var express = require('express'),
    app     = express(),
    port    = parseInt(process.env.PORT, 10) || 4567;

function flipTMSy(y,z) {
    ymax = 1 << z;
    return ymax - y - 1;

}

var our_server = {
    tiles : "./tiles",
    tms: true
}

//Leaflet style
var other_server =  {
    url: "http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg",
    tms: false,
    subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
}

//serve the local files
app.use(express.static(our_server.tiles));

// otherwise try this one
app.get('/:z/:x/:y.*', function(req, res) {
    subdomain = other_server.subdomains[Math.floor(Math.random()*other_server.subdomains.length)];
    z = req.params.z;
    x = req.params.x;
    y = req.params.y;
    url = other_server.url.replace('{s}', subdomain);
    url = url.replace('{z}', z);
    url = url.replace('{x}', x);
    if (our_server.tms != other_server.tms) {
        url = url.replace('{y}',flipTMSy(y,z));
    } else {
        url = url.replace('{y}', y);
    }
    res.redirect(url);
});

app.listen(port);
