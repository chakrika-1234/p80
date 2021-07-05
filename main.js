var names_of_people=[];
function submit(){
    var guest_name=document.getElementById("name1").value;
    names_of_people.push(guest_name);
    document.getElementById("display_name").innerHTML=names_of_people.toString();
}

function show(){
    var i=names_of_people.join("<br>");
    document.getElementById("P1").innerHTML=i.toString();
    document.getElementById("sort_button").style.display="block";
}

function sorting(){
    names_of_people.sort();
    var i=names_of_people.join("<br>");
    document.getElementById("sorted").innerHTML=i.toString();
}