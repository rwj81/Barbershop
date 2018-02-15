

//JS for specials web page alert prompting users to complete sign up survey

alert('Be sure to complete our new member sign up to enroll in the Cut Club today!');


//JQ for submit button

const name = document.getElementById('name');


$(document).ready(function(){
$("button").click(function(){
  alert('Thank you ' + name.value + ' for signing up.  Be on the lookout for an introductory email soon!');
});
});

//Next need a way to stop first alert function so it doesn't post after submit button clears.  try a loop that runs only once? 1/28/18



// original JQ for submit button below:

// $(document).ready(function(){
// $("button").click(function(){
//  alert('Thank you for signing up.  Be on the lookout for an introductory email soon!');
// });
// });
