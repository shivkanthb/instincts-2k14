/*selection field of register forms on page load*/
function selectionField()
{
		$("#Member1").show();
		$("#Member1No").show();
		$("#Member2").hide();
		$("#Member2No").hide();
		$("#Member3").hide();
		$("#Member3No").hide();
}

/* Contact Form Validation */
function validateForm() {
	var x=document.contact.email.value;
	var nameWrong =document.getElementById("errormsg");
	nameWrong.style.visibility="hidden";
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");	
	
	if(document.contact.name.value=="" || document.contact.name.value=="Name")
	{
		var nameWrong =document.getElementById("errormsg");
		nameWrong.innerHTML="&#9650;&nbsp;Please enter your name";
		nameWrong.style.visibility="visible";
		return false;
	}
	
	else if(x=="" || x=="E-mail")
	{
		var emailWrong =document.getElementById("errormsg");
		emailWrong.innerHTML="Thats not a valid email";
		emailWrong.style.visibility="visible";
		return false;
	}	
	else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
	{
		var emailWrong =document.getElementById("errormsg");
		emailWrong.innerHTML="Thats not a valid email";
		emailWrong.style.visibility="visible";		  
		return false;
	}	
	else if(document.getElementById("phne").value=="" || document.getElementById("phne").value=="Telephone")
	{
		var numEmpty =document.getElementById("errormsg");
		numEmpty.innerHTML="You forgot your number";
		numEmpty.style.visibility="visible";			
		return false;
	}	
	else if(document.contact.message.value=="" || document.contact.message.value=="Query")
	{
		var msgEmpty =document.getElementById("errormsg");
		msgEmpty.innerHTML="you can't leave this blank";
		msgEmpty.style.visibility="visible";			
		return false;
	}
	else
	{
		return true;
	}
}

/* opening register form in color box */
$(document).ready(function(){
	//Examples of how to assign the Colorbox event to elements
	if($(window).width()>=760)
	{
		$(".inline").colorbox({inline:true, width:"50%"});	
	}
	else
	{
		$(".inline").colorbox({inline:true, width:"90%"});	
	}
	//Example of preserving a JavaScript event for inline calls.
	$("#click").click(function(){ 
		$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
		return false;
	});
});

/* selection field in register form*/
function selection(select){
	 var selectedOption = select.options[select.selectedIndex];	 
	if(selectedOption.value == 1){
		 $("#Member1").show();
		  $("#Member1No").show();
		  $("#Member2").hide();
		$("#Member2No").hide();
		 $("#Member3").hide();
		$("#Member3No").hide();
	}
	if(selectedOption.value == 2){
		 $("#Member1").show();
		  $("#Member1No").show();
		  $("#Member2").show();
		$("#Member2No").show();
		 $("#Member3").hide();
		$("#Member3No").hide();
	}
	if(selectedOption.value == 3){
		 $("#Member1").show();
		  $("#Member1No").show();
		  $("#Member2").show();
		$("#Member2No").show();
		 $("#Member3").show();
		$("#Member3No").show();
	}
}

/* registeration from */
function registerForm() {
	var x=document.register.FormLeaderEmail.value;
	var nameWrong =document.getElementById("regerrormsg");
	nameWrong.style.visibility="hidden";
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");	
	if(document.register.FormInstituteName.value=="" || document.register.FormInstituteName.value=="Institute Name")
	{
		var nameWrong =document.getElementById("regerrormsg");
		nameWrong.innerHTML="&#9650;&nbsp;Please enter Institute Name";
		nameWrong.style.visibility="visible";
		return false;
	}	
	else if(document.register.FormTeamLeader.value=="" || document.register.FormTeamLeader.value=="Name Surname")
	{
		var nameWrong =document.getElementById("regerrormsg");
		nameWrong.innerHTML="&#9650;&nbsp;Please enter Team Leader name";
		nameWrong.style.visibility="visible";
		return false;
	}
	else if(x=="" || x=="E-mail")
	{
		var emailWrong =document.getElementById("regerrormsg");
		emailWrong.innerHTML="&#9650;&nbsp;Please enter your Email address";
		emailWrong.style.visibility="visible";
		return false;
	}	
	else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
	{
		var emailWrong =document.getElementById("regerrormsg");
		emailWrong.innerHTML="&#9650;&nbsp;Thats not a valid email";
		emailWrong.style.visibility="visible";		  
		return false;
	}	
	else if(document.register.FormLeaderMobile.value=="" || document.register.FormLeaderMobile.value=="Mobile No")
	{
		var nameWrong =document.getElementById("regerrormsg");
		nameWrong.innerHTML="&#9650;&nbsp;Please enter Team Leader Mobile No";
		nameWrong.style.visibility="visible";
		return false;
	}
	else if(document.register.About.value=="")
	{
		var nameWrong =document.getElementById("regerrormsg");
		nameWrong.innerHTML="&#9650;&nbsp;Please Tell us about your Team";
		nameWrong.style.visibility="visible";
		return false;
	}
	else if(document.register.Idea.value=="")
	{
		var nameWrong =document.getElementById("regerrormsg");
		nameWrong.innerHTML="&#9650;&nbsp;Whats the Idea behind your Fonts";
		nameWrong.style.visibility="visible";
		return false;
	}
	else if(document.register.Why.value=="")
	{
		var nameWrong =document.getElementById("regerrormsg");
		nameWrong.innerHTML="&#9650;&nbsp;Please Tell us Why are you participating ";
		nameWrong.style.visibility="visible";
		return false;
	}
	else{
		return true;

	}
}

/* Feedback */
$('.feedBackLink').click(function (e) {
    e.preventDefault();
    $('.feedbackBox').animate({
        right: 0
    })
    return false;
});
$('.feedbackBoxClose').click(function (e) {
    e.preventDefault();
    $('.feedbackBox').animate({
        right: '-300px'
    });
    return false;
});



/*feedback form validation*/
function validateSub() {
	var x=document.submission.subemail.value;
	var nameWrong =document.getElementById("suberrormsg");
	nameWrong.style.visibility="hidden";
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	
	if(document.submission.subname.value=="" || document.submission.subname.value=="Name Surname")
	{
		var nameWrong =document.getElementById("suberrormsg");
		nameWrong.innerHTML="&#9650;&nbsp;Please enter your name";
		nameWrong.style.visibility="visible";
		return false;
	}
	
	else if(x=="" || x=="Email")
	{
		var emailWrong =document.getElementById("suberrormsg");
		emailWrong.innerHTML="&#9650;&nbsp;Thats not a valid email";
		emailWrong.style.visibility="visible";
		return false;
	}	
	else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
	{
		var emailWrong =document.getElementById("suberrormsg");
		emailWrong.innerHTML="&#9650;&nbsp;Thats not a valid email";
		emailWrong.style.visibility="visible";		  
		return false;
	}		
	else if(document.submission.submessage.value=="" || document.submission.submessage.value=="Message")
	{
		var msgEmpty =document.getElementById("suberrormsg");
		msgEmpty.innerHTML="&#9650;&nbsp;You can't leave this blank";
		msgEmpty.style.visibility="visible";			
		return false;
	}
	else if(document.submission.attachment.value=="")
	{
		var msgEmpty =document.getElementById("suberrormsg");
		msgEmpty.innerHTML="&#9650;&nbsp;Please upload your font";
		msgEmpty.style.visibility="visible";			
		return false;
	}
	else
	{
		var wbox =document.getElementById("wbox");
		wbox.style.visibility="visible";		
		return true;	
	}
}
$(function(){          
	function wboxVisible(){
		$('.wbox').show();
	}  
});

/*Home Page Tip Close and Glow effect*/
function cellClosing(){
	var cell=document.getElementById("cell");
	document.getElementById('nav').classList.remove('box');
	cell.style.visibility = "hidden";	
}
$(document).ready(function(){
	var glow = $('.box');
	setInterval(function(){
		glow.hasClass('glow') ? glow.removeClass('glow') : glow.addClass('glow');
	}, 1000);
});

/*Thank u Close*/
$("#closeMe").click(function(event){
  window.location.href = "index.html";
});
