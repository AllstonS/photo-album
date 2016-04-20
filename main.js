$(document).ready(function(){

  $('aside').hide();
  
  $('.activeNav').click(function(event){
    event.preventDefault();
    console.log("HELLO", this);
    window.thing = $(this);

  });
});
