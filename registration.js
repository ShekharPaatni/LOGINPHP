$(document).ready(function(){
//Boxes olor change on focus
$('.boxes').focus(function(){
$(this).css('background-color', '#FF5733');
$(this).css('color','white');
});
//Boxes color change on blur
$('.boxes').blur(function(){
  $(this).css('background-color', '#FFFFFF');
  $(this).css('color', 'black');
});

//Registration name check
$('#username').keyup(function(){

  if(!(/^[a-zA-Z]+$/).test($('#username').val())){
  $('#nameerror').css('color','red');
    $('#nameerror').text("Name is must have alphabet without spacce and > 6");
  }else{
    $('#nameerror').text("");
  }

});
//Registration password check
$('#password').keyup(function(){

  if(!(/^[0-9a-zA-Z]+$/).test($('#password').val())){
  $('#passerror').css('color','red');
    $('#passerror').text("Password is must have alpha-numeric without space, special symbol and > 10");
  }else{
    $('#passerror').text("");
  }

});
//Registration Process
$(this).on('click','#registrationClick',function(){
var username=$('#username').val();
var passwrd=$('#password').val();
if(username!="" && (/^[a-zA-Z]+$/).test(username) && (/^[0-9a-zA-Z]+$/).test(passwrd) && passwrd!=""){
if(confirm("Are you sure want to register?")){

var gender=$('input[type=radio]:checked').val();



$.ajax({
  url: 'Registered.php',
  type: 'POST',
  data: {'username':username,'password':passwrd,'gender':gender},
  success: function(result){
    console.log("successfully");
      console.log(result);
      var jso=JSON.parse(result);

      alert(jso['nameerror']+"\n\n"+jso['passerror']+"\n");
  },
  error: function(){
  console.log("error");
  }

});
}
}else{
  $('#nameerror').css('color','red');
    $('#nameerror').text("Name should not be blank");
    $('#passerror').text("Password should not be blank");
    $('#passerror').css("color",'red');
}

});

//Login After Registration
$(this).on('click','#loginClick',function(){
var username=$('#name').val();
var password=$('#pass').val();
$.ajax({
url: 'login.php',
type: 'POST',
data: {'username':username,'password':password},
success: function(data){
  console.log("successfully");
  window.location.href=data.replace(/\"/g,'');
},
error: function(){
  console.log("error");
}

});

});


//Document.readyfunction close
});
