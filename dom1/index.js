let items = document.getElementsByClassName("list-group-item");

items[1].style.backgroundColor= "green";
items[2].style.visibility= "hidden";

let elements = document.querySelectorAll(".list-group-item");
items[1].style.color= "green";

for(let i=0;i <items.length;i++){
    if(i%2 != 0){
        items[i].style.backgroundColor= "green";
    }
}