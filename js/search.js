﻿  function filter(){
    let value, name, item, i;
    value = document.getElementById("value").value.toUpperCase();
    item = document.getElementsByClassName("item");

    for(i=0;i<item.length;i++){
        name = item[i].getElementsByClassName("name");
        if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){    //참이면 flex 찾고 -1이면 아무것도 못찾음
            item[i].style.display = "flex";
        }else{
            item[i].style.display = "none"
        }
    }
}
