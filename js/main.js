$(document).ready(function(){

  if ( $(window).width() >= 992) {    
// &&&& Large Size control
    // control panel start
  $('.doctor').click(function(){
      $('.doctorPanel').css({'display':'block'});
      $('.blockPanel').css({'display':'none'});
  });

  $('.block').on('click',function(){
    $('.doctorPanel').css({'display':'none'});
    $('.blockPanel').css({'display':'block'});
  });
   // control panel end
  }
  //============================================================
  // &&&& small Size control
  else {    
    // control panel start
    $('.smallSize').css({'display':'block'});

  $('.doctorDiv').click(function(){
      $('.addDoc').css({'display':'block'});
      $('.blockDoc').css({'display':'none'});
  });

  $('.blockDiv').click(function(){
    $('.blockDoc').css({'display':'block'});
    $('.addDoc').css({'display':'none'});
});
   // control panel end
  }
});