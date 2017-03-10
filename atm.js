$(document).ready(function(){
var currentAmount;
var oneHundred;
var fiveHundred;
var twoThousand;
$("input[type=text]").focus(function(){

        $(this).css('background-color',' #1adc6f');
    });
$("input").blur(function(){

$(this).css('background-color','white');

});

$(this).on('click','#add',function(){
var one=$('#oneHund').val();
var five=$('#fiveHund').val();
var two=$('#twoThow').val();
if(!isNaN(one) && !isNaN(five) && !isNaN(two) && one%1==0 && two%1==0 && five%1==0 && one>=0 && two>=0 && five>=0){
oneHundred=one;
fiveHundred=five;
twoThousand=two;
$('#twoThow').val(0);
$('#fiveHund').val(0);
$('#oneHund').val(0);
var one=one*100;
var five=five*500;
var two=two*2000;
currentAmount=(one+five+two);
$('#currentAmount').text("Current Amount : "+currentAmount);
if(currentAmount>0){
$("#add").attr('disabled',true);
$("#withDraw").attr('disabled',false);

}
}
});
var flag=1;
//remove table
$(this).on('click','#remove', function(){
$('#errorwithdraw').text("");
  $('#mytable1 tr').remove();
  flag=1;
});

//withdraw

$(this).on('click','#withDraw',function(){
$('#errorwithdraw').text("");
$('#errorwithdraw').css('color','red');
if(flag==1){
  var table=document.getElementById("mytable1");
    var row=table.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    cell1.innerHTML="Amount";
    cell2.innerHTML="2000";
    cell3.innerHTML="500";
    cell4.innerHTML="100";
    cell5.innerHTML="Left";
flag=0;
}
  var amount=$("#withdraw").val();
  var originalamount=amount;
  if(currentAmount>=amount){

         if(amount>0 && amount%100==0)
	         {

                    if(amount>=2000 && twoThousand>0 )
		                {
		                    var twothusandnotes=Math.floor(amount/2000);
                        if(twothusandnotes>=twoThousand)
                               {	amount-=twoThousand*2000;
                                         twoThousand=0;
                                }else{
                          twoThousand-=twothusandnotes;
		                        amount=amount-(twothusandnotes*2000);
                          }
                     }
                 if(amount>=500 && fiveHundred>0)
			                  {
                                  var five=Math.floor(amount/500);
                                    if(five<fiveHundred){

                                        amount-=five*500;

                                          fiveHundred=0;
                                        }else if(){
                                   fiveHundred-=five;
			                                amount=amount-(five*500);
                                    }
                        }

                        console.log(amount);
                      if(amount>=100){
                            if(amount>=100 && oneHundred>0){
                              var onethird=Math.floor(amount/100);
                                if(onethird>oneHundred){
                                    $('#errorwithdraw').text("cash Insufficient");
                                    $('#errorwithdraw').css('color','red');
                                      return;
                                }else if(onethird==oneHundred){
                                amount-=onethird*100;
                                    oneHundred=0;

                                }else{
                                  oneHundred-=one;
                                  amount-=onethird*100;

                                }
                                }
                                else{
                                  $('#errorwithdraw').text("Cash Finish ");
                                  $('#errorwithdraw').css('color','red');
                                  return;
                                }
                              }





                                  if(amount==0){

                                    currentAmount-=originalamount;
                      //alert(currentAmount);
                            if(currentAmount==0)
                            {        oneHundred=0;
                              $("#add").attr('disabled',false);
                              $("#withDraw").attr('disabled',true);
                            }
                                                  }
                      $('#currentAmount').text("Current Amount : "+currentAmount);

                      var table=document.getElementById("mytable1");
                      var count=table.rows.length;
                      var row=table.insertRow(count);
                      var cell1=row.insertCell(0);
                      var cell2=row.insertCell(1);
                      var cell3=row.insertCell(2);
                      var cell4=row.insertCell(3);
                      var cell5=row.insertCell(4);
                      cell1.innerHTML=originalamount;
                      cell2.innerHTML=twoThousand;
                      cell3.innerHTML=fiveHundred;
                      cell4.innerHTML=oneHundred;
                      cell5.innerHTML=currentAmount;

                      $("#withdraw").val('');


              }
              else{
                $("#withdraw").val('');
                $('#errorwithdraw').text("Amount is invalid");
                $('#errorwithdraw').css('color','red');

              }
}
else{$("#withdraw").val('');
$('#errorwithdraw').text("Amount Exceeded");
$('#errorwithdraw').css('color','red');
}
});




});
