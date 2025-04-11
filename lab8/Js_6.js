function findTotal(){
    x=parseInt(document.getElementById("adult").value);
    y=parseInt(document.getElementById("child").value);
    t=(x*10)+(y*5);
    document.getElementById("result").value=t;
}