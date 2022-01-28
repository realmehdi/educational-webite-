function myFunc(){
    var x = document.getElementById("navigation");
        if(x.className === "nav"){
            x.className += " responsive";
        }else{
            x.className = "nav";
        }
}