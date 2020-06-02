$(document).ready(function() {
  $(".clickable1").click(function(){
    $("#toggle").toggle();
  });

  $(".clickable2").click(function(){
    $("#fade").fadeToggle(1000);
  });

  $(".clickable3").click(function(){
    $("#slideup").slideToggle(1000);
  });

});
