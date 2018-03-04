//AJAX function to track barber availability

    //AJAX Request triggered by button click
 function sendAJAX() {

var checkAvailability = new XMLHttpRequest();
checkAvailability.onreadystatechange = function () {
  if(checkAvailability.readyState === 4) {
    var employees = JSON.parse(checkAvailability.responseText);

//function findDate() {         ///alternative attempt to select date as number value then convert to name to then parse.
//var d = new Date();
//var weekday = new Array(7);
//weekday[0] = "sunday";
//weekday[1] = "monday";
//weekday[2] = "tuesday";
//weekday[3] = "wednesday";
//weekday[4] = "thursday";
//weekday[5] = "friday";
//weekday[6] = "saturday";

//var n = weekday[d.getDay()];}

// function getToday()
    var day = new Date();
    var today = day.getDay()




        var statusHTML = '<ul class="bulleted">';
        for (var i=0;  i<employees.length; i += 1) {
            if (employees[i].available[today] === true) {
            statusHTML += '<li class="available">';
          } else {
            statusHTML += '<li class="unavailable">';
          }
          statusHTML += employees[i].name;
          statusHTML += '</li>';
          statusHTML += '<br>';
          }
          statusHTML += '</ul>';
          document.getElementById('staffAvailability').innerHTML = statusHTML;
        }
    	};

    	checkAvailability.open('GET', 'staffstatus.json');
    	checkAvailability.send();

    }


// change the value "available" in line 32 with any other day and it will pull the values from the json for that day.  Need to find a function to get the day and set that automatically.

    //I have to run this on a local host "MAMP" for the JSON to parse, otherwise I get a: 'xml parsing error: syntax error'
    //Alternatively, the page hosted bu a server, like on github will also function properly

    //successfully checked JSON data with online evaluator: https://jsonlint.com/


//Google Maps API Function to show Location API key is  AIzaSyBuAHtb7O6YTvA6ef-GC_gnFApU5aMSn0E

function initMap() {
        var uluru = {lat: 38.251078, lng: -85.639735};
        var map = new google.maps.Map(document.getElementById('location'), {
          zoom: 13,
          center: uluru

        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
        map.setMapTypeId('terrain');
      }

//button audio functions

var clipsfinal = new Audio();
clipsfinal.src = "sounds/clipsfinal.mp3";

var attach = document.getElementById("audioLink");
attach.addEventListener("mouseover", function( event ){
  event = clipsfinal.play();
});

//

var buzzfinal = new Audio();
buzzfinal.src = "sounds/buzzfinal.mp3";

var attach = document.getElementById("audioLinkTwo");
attach.addEventListener("mouseover", function( event ){
  event = buzzfinal.play();
});

//

var shavingcreamfinal = new Audio();
shavingcreamfinal.src = "sounds/shavingcreamfinal.mp3";

var attach = document.getElementById("banner");
attach.addEventListener("mouseover", function( event ){
  event = shavingcreamfinal.play();
});
