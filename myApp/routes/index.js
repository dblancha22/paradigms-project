var express = require('express');
var router = express.Router();

let index = require('../controllers/index')

/* GET home page. */
router.get('/',index.index );
router.get('/zoom',index.zoom);
router.get('/zoo',index.zoo);
router.get('/nfl',index.nfl);
router.get('/nhl',index.nhl);
router.get('/mlb',index.mlb);
router.get('/nba',index.nba);
router.get('/map',index.map);
router.get('/like',index.like);

module.exports = router;
