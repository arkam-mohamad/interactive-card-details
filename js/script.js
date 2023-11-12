//set inner text
let cardNumber = $('#cardNumber');
let cardHolder = $('#cardHolder');
let expiryDate = $('#expiryDate');
let showCVC = $('#showCVC');

//input fields
let username = $('#username');
let number = $('#number');
let month = $('#month');
let year = $('#year');
let cvc = $('#cvc');

let val;

//show card holder on typing
$(username).keyup(function (e) { 
  val = $(username).val().toUpperCase();
  $(cardHolder).text(val);
});

//show card number on typing
$(number).keyup(function (e) { 
  val = $(number).val();
  $(cardNumber).text(val);
});

//show year on typing
$(year).keyup(function (e) { 
  if($(month).val() != ''){
    val = $(month).val() + '/' + $(year).val();
    $(expiryDate).text(val);
  }
});

//show cvc on typing
$(cvc).keyup(function (e) { 
  val = $(cvc).val();
  $(showCVC).text(val);
});

//check for blank
$('button').click(function (e) { 
  e.preventDefault();
  if($('input').val() == ''){
    $('input').next('small').removeClass('hidden');
  } else{
    $('input').next('small').addClass('hidden');
    $('.content').addClass('hidden');
    $('.completed').removeClass('hidden');
  }
});

