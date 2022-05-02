exports.index = function(req, res, next) {
  res.render('index', { about: 'Leagues' , sport:
 'American Sports'});
}

exports.zoom = function(req, res, next) {
  res.render('zoom', {about:'Zoom Time'});
}

exports.zoo = function(req, res, next) {
   console.log("Clicked on leagues button")
   res.render('leagues', { about: 'Welcome to American Sports.', sport:'Leagues'}); 
}

exports.nfl = function(req, res, next) {
   console.log("Clicked on nfl button")
   res.render('nfl', { about: 'The NFL is the National Football League.', sport:'NFL'});
}

exports.nba = function(req, res, next) {
   console.log("Clicked on nba button")
   res.render('nba', { about: 'The NBA is the National Basketball Association.' , sport:'NBA'}); 
}

exports.mlb = function(req, res, next) {
   console.log("Clicked on mlb button")
   res.render('mlb', { about: 'The MLB is Major League Baseball.' , sport:'MLB'}); 
}

exports.nhl = function(req, res, next) {
   console.log("Clicked on nhl button")
   res.render('nhl', { about: 'The NHL is the National Hockey League.' , sport:'NHL'}); 
}

exports.map = function(req, res, next) {
   res.render('map', { markers: 'Markers will go here.'}); 
}

exports.like = function(req, res, next) {
   console.log("Clicked on like button")
   res.render('like', { about: 'The NHL is the National Hockey League.' , sport:'MLB'}); 
}

