//AJAX function to track barber availability

    //AJAX Request triggered by button click
 function sendAJAX() {

    var xhr = new XMLHttpRequest();
  	xhr.onreadystatechange = function () {
   	if(xhr.readyState === 4) {
        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for (var i=0; i<employees.length; i += 1) {
          if (employees[i].available === true) {
            statusHTML += '<li class="available">';
          } else {
            statusHTML += '<li class="unavailable">';
          }
          statusHTML += employees[i].name;
          statusHTML += '</li>';
          }
          statusHTML += '</ul>';
          document.getElementById('staffAvailability').innerHTML = statusHTML;
        }
    	};

    	xhr.open('GET', 'staffstatus.json');
    	xhr.send();

    }

//can I set up my own local server? I keep getting: 'xml parsing error: syntax error'
//resume at page 213 and video 'Processing JSON data'

//remember to check JSON data with online evaluator: https://jsonlint.com/














//api functionality for google maps location service
