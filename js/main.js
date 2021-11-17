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


  // بعد اضافة الطبيب 
  $('.create').click(function(){
    $('.doctorPanel').css({'display':'block'});
    $('.blockPanel').css({'display':'none'});
  });

  // عند الضغط على زر تأكيد الحظر
 
  $('.sureBlock').click(function(){
    $('.doctorPanel').css({'display':'none'});
    $('.blockPanel').css({'display':'block'});
  });
  $('.reverse').click(function(){
    $('.doctorPanel').css({'display':'block'});
    $('.blockPanel').css({'display':'none'});
  });

    // عند الضغط على زر تأكيد الحذف
    $('.sureDelete').click(function(){
      $('.doctorPanel').css({'display':'block'});
      $('.blockPanel').css({'display':'none'});
    });
// بعد الضغط على زر ازالة الحظر
    $('.sureUn').click(function(){
      $('.doctorPanel').css({'display':'block'});
      $('.blockPanel').css({'display':'none'});
    });
    $('.reverseDel').click(function(){
      $('.doctorPanel').css({'display':'none'});
      $('.blockPanel').css({'display':'block'});
    });

    // التعديل على eyeslash
    $('.pass').click(function(){
     $('.password').attr('type','text');
     $('.fa-eye-slash').attr('class','fa fa-eye')
    });

  
});

