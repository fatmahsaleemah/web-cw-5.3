
var i = 0;

function incNumber() {
    if (i < 100) {
        i++;
    } else if (i = 100) {
        i = 0;
    }
    document.getElementById("display").innerHTML = i;
}

var myArray= [ "لا إله الا الله" ,"سبحان الله " , "الحمدالله " , "الله اكبر"];





function myFunction() {
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  document.getElementById("thker").innerHTML =randomItem;
}









