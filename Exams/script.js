// add=document.getElementById("add");
// add.addEventListener("submit",additem,false);
// function additem(e){
// 	e.preventDefault();
// 	alert("add item called");
// }
var myform=document.getElementById("myform");
alert("hi");
myform.addEventListener("submit",additem,false);
var list=document.getElementById("list");
list.addEventListener("click",removeitem,false);
function additem(e) {
	e.preventDefault();
	var f=document.getElementById("first").value;
	var l=document.createElement("li");
	var text=document.createTextNode(f);
	l.appendChild(text)

	//button
	var dbtn=document.createElement("button");
	dbtn.setAttribute("class","delete");
	var dtext=document.createTextNode("X");
	dbtn.appendChild(dtext);

	l.appendChild(dbtn);
	
	list.appendChild(l);

}
function removeitem(e){
	if(e.target.classList.contains("delete")){
		if(confirm("Are you sure you want to delete")){
			var li=e.target.parentElement;
			list.removeChild(li);
		}
	}
}