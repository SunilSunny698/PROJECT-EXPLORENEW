DataBase={user1:'Sunil@123',
		  user2:'Linue@333',
		  user3:'Rgukt@123',
		  user4:'IIit@698',
		  user5:'Sunny@333'
		 }
function validate(){
	alert("Are you sure to you want to submit!!!");
	var c=0;
	var fval=document.getElementById("first").value;
	var lval=document.getElementById("last").value;
	var mval=document.getElementById("middle").value;
	var country=document.getElementById('count').value;
	var ph=document.getElementById('num').value;
	var mail=document.getElementById("mail").value;
	var pass=document.getElementById("pswd").value;
	var f=document.getElementById("f").files[0];
	var user=document.getElementById("user").value;
	pat=/[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	indPat=/^[6-9]\d{8}\d$/;
	usaPat=/\d{3}-\d{3}-\d{4}/;
	mailPat=/^[a-z][a-z0-9]+@[a-z]+\.([a-z]+\.)?[a-z]+$/i;
	if(fval.length<3 || pat.test(fval)){
		
		c=c+1;
		document.getElementById("errorFN").style.visibility="visible";
	}
	if(lval.length<3 || pat.test(lval)){
		c=c+1;
		document.getElementById("errorLN").style.visibility="visible";
	}
	if(mval.length>0){
		if(mval.length<3 || pat.test(mval)){
			c=c+1;
			document.getElementById("errorMN").style.visibility="visible";
		}
	}
	if(user.length==0){
		alert("hi")
		c=c+1;
		document.getElementById("errorUSER").style.visibility="visible";
	}
	if(country=='(+10)USA'){
		if(usaPat.test(ph)==false){
			c=c+1;
			document.getElementById("errorPH").style.visibility="visible";
		}
	}
	if(country=='(+91)Ind'){
		if(indPat.test(ph)==false){
			c=c+1;
			document.getElementById("errorPH").style.visibility="visible";
		}
	}
	if(pass.length<6 || !(/[a-z]/.test(pass)) || !(/[A-Z]/.test(pass)) || !(/\d/.test(pass)) || !(/\W/.test(pass))){
		c=c+1;
		document.getElementById("errorPASS").style.visibility="visible";
	}
	if(mailPat.test(mail)==false){
		c=c+1;
		document.getElementById("errorMAIL").style.visibility="visible";
	}
	// var arr=["c1","c2","c3","c4"];
	// var checkCount=0;
	// for(let i=0;i<4;i++){
	// 	if(document.getElementById(arr[i]).checked){
	// 		checkCount++;
	// 	}
	// }

	// if(checkCount<2){
	// 	c=c+1;
	// }
	if(f!=undefined && f.size>50480){
		c=c+1;
		document.getElementById("errorFILE").style.visibility="visible";
	}
	setTimeout(errorFREE,3000);

	if(c==0){
		
		return true;
	}
	else{
		
		return false;
	}

	
}

function errorFREE(){
	// document.getElementsByClass("warn").style.visibility="hidden";

	document.getElementById("errorFN").style.visibility="hidden";
	document.getElementById("errorLN").style.visibility="hidden";
	document.getElementById("errorMN").style.visibility="hidden";
	document.getElementById("errorPH").style.visibility="hidden";
	document.getElementById("errorPASS").style.visibility="hidden";
	document.getElementById("errorMAIL").style.visibility="hidden";
	document.getElementById("errorFILE").style.visibility="hidden";
	document.getElementById("errorUSER").style.visibility="hidden";
}
function fullname(){
	var fval=document.getElementById("first").value;
	var lval=document.getElementById("last").value;
	var mval=document.getElementById("middle").value;
	document.getElementById("full").value=(fval+" "+mval+" "+lval);
}
function getAge() {
	var present=new Date();
	var actual=new Date(document.getElementById("dob").value);
	var s=present.getFullYear()-actual.getFullYear();
	document.getElementById("age").value=s;

}
function changepass(){
	var temp=document.getElementById("pswd");
	if(temp.type=='password'){
		temp.type="text";
		document.getElementById("passimage").src="hide.jpg"
	}
	else{
		temp.type="password";
		document.getElementById("passimage").src="show.jpg"
	}
}
function go() {
	var j=document.getElementById("maincheck").checked;
	if(j){
		document.getElementById("sub").disabled=false;
		document.getElementById("sub").style.opacity="1"
	}
	else{
		document.getElementById("sub").style.opacity="0.5"
		document.getElementById("sub").disabled=true;	
	}
}
function resetConfirm(){
	alert("Do you want to reset . . . Sure about that!!!");
}
function omitDigit(){
	var val=document.getElementById("adrs").value;
	var num=val.replace(/[0-9]/g,'');
	document.getElementById('adrs').value=num;

}
function filesize(){
	alert("file")
	var f=document.getElementById("f").files[0];
	if(f!=undefined && f.size>20480){
		alert("file size is too big");
	}
}