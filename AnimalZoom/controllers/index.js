exports.index = function(req, res, next) {
  res.render('index', { about: 'Leagues' , sport:
 'American Sports'});
}

exports.zoom = function(req, res, next) {
  res.render('zoom', {about:'Zoom Time'});
}

exports.leagues = function(req, res, next) {
   res.render('leagues', { about: 'Welcome to American Sports.', sport:'Leagues'}); 
}

exports.camel = function(req, res, next) {
   console.log("Clicked on NFL button")
   res.render('camel', { about: 'The NFL is the National Football League.', sport:'Camel'});
}

exports.croc = function(req, res, next) {
   console.log("Clicked on croc button")
   res.render('crocodile', { about: 'Crocodiles are repitles with sharp teeth.  They can run very fast over short distances.' , sport:'Crocodile'}); 
}

exports.cow = function(req, res, next) {
   console.log("Clicked on COW button")
   res.render('cow', { about: 'Cows are ruminants, which are cud chewing mammals. Sheep and camels also are ruminants. A cow chews her cud (regurgitated, partially digested food) for up to 8 hours each day.' , sport:'Cow'}); 
}

exports.monkey = function(req, res, next) {
   res.render('monkey', { about: 'Monkeys live in trees, grasslands, mountains, forests, and on high plains. Each monkey has its own unique fingerprints.' , sport:'Monkey'}); 
}

exports.map = function(req, res, next) {
   res.render('map', { markers: 'Markers will go here.'}); 
}

