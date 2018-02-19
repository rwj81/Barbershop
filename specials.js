//JQ for specials web page alert prompting users to complete sign up survey

$(document).ready(function(){
$("header").one("mouseleave", function(){
  swal('Be sure to complete our new member sign up to enroll in the Cut Club today!');
});
});

//JQ for submit button

const name = document.getElementById('name');

$(document).ready(function(){
$("button").click(function(){
  swal('Thank you ' + name.value + ' for signing up.  Be on the lookout for an introductory email soon!');
  });
  });

//Sweetalert (swal) can be replaced with "alert" for browser-stryled boxes.


//button audio functions     https://youtu.be/VlwSz2dXK_8
// https://stackoverflow.com/questions/21463752/javascript-audio-object-vs-html5-audio-tag

var clipsfinal = new Audio();
clipsfinal.src = "sounds/clipsfinal.mp3";

var attach = document.getElementById("audioLink");
attach.addEventListener("mouseover", function( event ){
  event = clipsfinal.play();
});
