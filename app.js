//AJAX function to track barber availability

    //AJAX Request triggered by button click
 function sendAJAX() {

    var checkAvailability = new XMLHttpRequest();
  	checkAvailability.onreadystatechange = function () {
   	if(checkAvailability.readyState === 4) {
        var employees = JSON.parse(checkAvailability.responseText);
        var statusHTML = '<ul class="bulleted">';
        for (var i=0; i<employees.length; i += 1) {
          if (employees[i].available === true) {
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

    //can I set up my own local server? I keep getting: 'xml parsing error: syntax error' //

    //remember to check JSON data with online evaluator: https://jsonlint.com/ //


//Google Maps API Function to show Location

    // API key is  AIzaSyBuAHtb7O6YTvA6ef-GC_gnFApU5aMSn0E

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












//api functionality for google maps location service
