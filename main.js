/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {



// Question #1

$(".changeColor").one("click", function() {
  $("li:nth-child(3)").css("color", "#8A2BE2");
});

// Question #2

$("li:nth-child(4)").one("click",function() {
  $("li:nth-child(4)").append("<li>hello</li>");
});

// Question #3

$("#removeLi").one("click", function() {
  $("li:nth-child(2)").remove();
});

// Question #4

$("li:last").one("click", function() {
  $("li").hide();
  $("li:last").css("font-size", "40px").show();
});

// Question #5

$(".cute").one("click", function() {
  $(".cute").clone().appendTo("#clones");
});

  // Question #6

$(document).one("dblclick", function() {
  $("#makeSquare").css("border-radius", "0px");
});

// Question #7

$(".black").click(function() {
  $("body").addClass("black").removeClass("wood");
});
$(".wood").click(function() {
  $("body").addClass("wood").removeClass("black");
});
$(".restore").click(function() {
  $("body").removeClass("wood black");
});

  // Question #8

$("#hover").hover(
  function() {
    $("#hover").css("background-color", "red");
    $("#hover").click(function() {
      $("#hover").toggleClass("green");
    })
  }, function() {
    $("#hover").css("background-color", "#39B7CD");
  }
);


});
