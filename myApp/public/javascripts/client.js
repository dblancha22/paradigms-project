console.log('Client-side code running');
// LOCAL USE:
//const myURL = "http://localhost:3000";

// STUDENT 04 use:
// This is Prof. Huang's port.  Use your own please!!
const myURL = "http://student04.cse.nd.edu:52006";

const zoomButton = document.getElementById('zoomButton');
zoomButton.addEventListener('click', function(e) {
  console.log('Zoom button was clicked');
  location.href = myURL.concat("/zoom")
});

const mapButton = document.getElementById('mapButton');
mapButton.addEventListener('click', function(e) {
  console.log('Map button was clicked');
  location.href = myURL.concat("/map");
});

const zooButton = document.getElementById('zooButton');
zooButton.addEventListener('click', function(e) {
  console.log('leagues button was clicked');
  location.href = myURL.concat("/");
});

const nflButton = document.getElementById('nflButton');
nflButton.addEventListener('click', function(e) {
  console.log('nfl button was clicked');
  location.href = myURL.concat("/nfl")
  //document.getElementById("AnimalImage").src ="images/camel.jpg"
  //document.getElementById("p2").innerHTML = "Camels are mammals with long legs, a big-lipped snout and a humped back.!";
  //document.getElementById("p1").innerHTML = "Cherry Camel"; 
});

const nhlButton = document.getElementById('nhlButton');
nhlButton.addEventListener('click', function(e) {
  console.log('nhl button was clicked');
  location.href = myURL.concat("/nhl")
  //document.getElementById("AnimalImage").src ="images/monkey.jpg";
  //document.getElementById("p2").innerHTML = "Monkeys live in trees, grasslands, mountains, forests, and on high plains. Each monkey has its own unique fingerprints.";
  //document.getElementById("p1").innerHTML = "Mindy Monkey"; 
});

const nbaButton = document.getElementById('nbaButton');
nbaButton.addEventListener('click', function(e) {
  console.log('nba button was clicked');
  location.href = myURL.concat("/nba") ;
  //document.getElementById("AnimalImage").src ="images/crocodile.jpg";
  //document.getElementById("p2").innerHTML = "Crocodiles are repitles with sharp teeth.  They can run very fast over short distances.";
  //document.getElementById("p1").innerHTML = "Craig Crocodile"; 
});

const mlbButton = document.getElementById('mlbButton');
mlbButton.addEventListener('click', function(e) {
  console.log('mlb button was clicked');
  location.href = myURL.concat("/mlb");
  //document.getElementById("AnimalImage").src ="images/cow.jpg"
  //document.getElementById("p2").innerHTML = "Cows are ruminants, which are cud chewing mammals. Sheep and camels also are ruminants. A cow chews her cud (regurgitated, partially digested food) for up to 8 hours each day.";
  //document.getElementById("p1").innerHTML = "Chloe Cow";  
});

const likeButton = document.getElementById('likeButton');
if(likeButton) {
  likeButton.addEventListener('click', function(e) {
    console.log('like button was clicked');
    const { value } = e.target;
    console.log("val: " + value);

    fetch('http://student04.cse.nd.edu:52006/mlb', 
      { method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likeKey: value })
    })
  });
}



