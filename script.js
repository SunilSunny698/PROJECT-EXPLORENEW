// alert("connected");

var $rows = $('#table tr');
$('#search').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

    $rows.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
});

var imgCount=1;
var arr=["s1.jpg","s2.jpg","s3.jpg","s4.jpg"]
function slideshow(){
	document.getElementById("c"+imgCount).style.backgroundColor="gray";
	imgCount++;
	if(imgCount==5){
		imgCount=1;
	}
	document.getElementById("slide").src="img/"+arr[imgCount-1];
	document.getElementById("c"+imgCount).style.backgroundColor="black";
	setTimeout(slideshow,2000);

}
slideshow();

var Myphoto=document.getElementById("Myphoto");
Myphoto.addEventListener("mouseover",showLabel);
Myphoto.addEventListener("mouseout",hideLabel);

function showVertical(){
	v=document.getElementById("vert").style;
	h=document.getElementById("horiz").style;
	if(window.innerHeight < window.innerWidth){
		
		if(v.display=="" || v.display=="none"){
			v.setProperty("display","block");
			h.setProperty("display","none");
		}
	}
	else{
		v.setProperty("display",'block')
	}
}
function hideVertical() {
	v=document.getElementById("vert").style;
	h=document.getElementById("horiz").style;
	if(window.innerHeight < window.innerWidth){
		if(v.display=="block"){
			v.setProperty("display","none");
			h.setProperty("display","block");
		}
	}
	else{
		v.setProperty("display","none");
	}
}

// function showVertical(){
// 	document.getElementById("vert").style.display="block";
// }
// function hideVertical(){
// 	document.getElementById("vert").style.display="none";
// }
// function showHorizontal(){
// 	document.getElementById("horiz").style.display="block";
// }
// function hideHorizontal(){
// 	document.getElementById("horiz").style.display="none";
// }
function showLabel(e){
	document.getElementById("Myphoto").style.display="none"
	temp2=document.getElementById("Mylabel").style.display="block"
}
function hideLabel(e){
	document.getElementById("Myphoto").style.display="block"
	temp2=document.getElementById("Mylabel").style.display="none"
}



var nextslide=document.getElementById("next");
nextslide.addEventListener("click",nextslideFunc,false);
var prevslide=document.getElementById("prev");
prevslide.addEventListener("click",prevslideFunc,false);
function nextslideFunc(e){

	document.getElementById("c"+imgCount).style.backgroundColor="gray";
	imgCount++;
	if(imgCount>4){
		imgCount=1;
	}
	document.getElementById("c"+imgCount).style.backgroundColor="black";
	document.getElementById("slide").src="img/s"+imgCount+".jpg";
}
function prevslideFunc(e){
	document.getElementById("c"+imgCount).style.backgroundColor="gray";
	imgCount--;
	if(imgCount<1){
		imgCount=4;
	}
	document.getElementById("c"+imgCount).style.backgroundColor="black";
	document.getElementById("slide").src="img/s"+imgCount+".jpg";
}
function slidechange(i){
	document.getElementById("c"+imgCount).style.backgroundColor="gray";
	imgCount=i;
	document.getElementById("c"+imgCount).style.backgroundColor="black";
	document.getElementById("slide").src="img/s"+imgCount+".jpg";
}

// Login loading
var login=document.getElementById("login");
login.addEventListener("click",loadLogin);
var hlogin=document.getElementById("hlogin");
hlogin.addEventListener("click",loadLogin);

function loadLogin(e){
	document.getElementById("ilogin").style.display="block";
	document.getElementById("iregister").style.display="none";
	document.getElementById("ifaculty").style.display="none";
	document.getElementById("istudent").style.display="none";
	document.getElementById("main").style.display="none";
	document.getElementById("imap").style.display="none";
	document.getElementById("iabout").style.display="none";
}

//Register loading
var reg=document.getElementById("register");
reg.addEventListener("click",loadReg);
var hreg=document.getElementById("hregister");
hreg.addEventListener("click",loadReg);
function loadReg(e){
	document.getElementById("ilogin").style.display="none";
	document.getElementById("iregister").style.display="block";
	document.getElementById("ifaculty").style.display="none";
	document.getElementById("istudent").style.display="none";
	document.getElementById("main").style.display="none";
	document.getElementById("imap").style.display="none";
	document.getElementById("iabout").style.display="none";
}


//studentLogin loading
var stud=document.getElementById("student");
stud.addEventListener("click",loadStud);
var hstud=document.getElementById("hstudent");
hstud.addEventListener("click",loadStud);
function loadStud(e){
	document.getElementById("ilogin").style.display="none";
	document.getElementById("iregister").style.display="none";
	document.getElementById("ifaculty").style.display="none";
	document.getElementById("istudent").style.display="block";
	document.getElementById("main").style.display="none";
	document.getElementById("imap").style.display="none";
	document.getElementById("iabout").style.display="none";
}

//facultyLogin loading
var faculty=document.getElementById("faculty");
faculty.addEventListener("click",loadFac);
var hfaculty=document.getElementById("hfaculty");
hfaculty.addEventListener("click",loadFac);
function loadFac(e){
	document.getElementById("ilogin").style.display="none";
	document.getElementById("iregister").style.display="none";
	document.getElementById("ifaculty").style.display="block";
	document.getElementById("istudent").style.display="none";
	document.getElementById("main").style.display="none";
	document.getElementById("imap").style.display="none";
	document.getElementById("iabout").style.display="none";
}

//Home loading
var home=document.getElementById("home");
home.addEventListener("click",loadHome);
var hhome=document.getElementById("hhome");
hhome.addEventListener("click",loadHome);
function loadHome(e){
	document.getElementById("ilogin").style.display="none";
	document.getElementById("iregister").style.display="none";
	document.getElementById("ifaculty").style.display="none";
	document.getElementById("istudent").style.display="none";
	document.getElementById("main").style.display="flex";
	document.getElementById("imap").style.display="none";
	document.getElementById("iabout").style.display="none";
}

//map loading
var map=document.getElementById("contact");
map.addEventListener("click",loadMap);
var hmap=document.getElementById("hcontact");
hmap.addEventListener("click",loadMap);
function loadMap(e){
	document.getElementById("ilogin").style.display="none";
	document.getElementById("iregister").style.display="none";
	document.getElementById("ifaculty").style.display="none";
	document.getElementById("istudent").style.display="none";
	document.getElementById("main").style.display="none";
	document.getElementById("imap").style.display="block";
	document.getElementById("iabout").style.display="none";
}
var about=document.getElementById("about");
about.addEventListener("click",loadAbout);
var habout=document.getElementById("habout");
habout.addEventListener("click",loadAbout);
function loadAbout(e){
	document.getElementById("ilogin").style.display="none";
	document.getElementById("iregister").style.display="none";
	document.getElementById("ifaculty").style.display="none";
	document.getElementById("istudent").style.display="none";
	document.getElementById("main").style.display="none";
	document.getElementById("imap").style.display="none";
	document.getElementById("iabout").style.display="block";
}
