//JQ for specials web page alert prompting users to complete sign up survey

$(document).ready(function(){
$("header").one("mouseleave", function(){
  alert('Be sure to complete our new member sign up to enroll in the Cut Club today!');
});
});

//JQ for submit button

const name = document.getElementById('name');

$(document).ready(function(){
$("button").click(function(){
  alert('Thank you ' + name.value + ' for signing up.  Be on the lookout for an introductory email soon!');
});
});

//Next need a way to stop first alert function so it doesn't post after submit button clears.  .one has some benefit but isn't perfect
