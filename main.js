var btn=document.querySelector('#btn');
var modalBox=document.querySelector('.modal-box');
var closeBtn=document.querySelector('.closebtn');
var savebtn=document.querySelector('.savebtn');
var x=document.querySelector('.x');


//console.log(modalBox);
btn.addEventListener('click', function(){

	modalBox.style.display="inline-block";

//closeBtn
		x.addEventListener('click',function(){
			modalBox.style.display="none";
		});


//closeButton	
		closeBtn.addEventListener('click', function(){
			modalBox.style.display="none";
		
		});
			

//save change
		savebtn.addEventListener('click', function(){
			modalBox.style.display="none";			
			
			});
	
});