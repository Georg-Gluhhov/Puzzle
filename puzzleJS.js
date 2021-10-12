
var shapes="img/blank.png";
var lopp=false;
function klik(img1){
    img1.src=shapes;
    CheckWin();
    /*if(shapes=="img/X.png"){
        shapes="img/0.png";
    }
    else {
        shapes="img/X.png";
    }
    if(CheckRows()){
        lopp=true;
        alert("Mang on labi!")

    }*/
}
function klikValik(img1){
    shapes=img1.src;
    document.getElementById("pilt19").src=shapes;
}
// Проверяет все картинки и возвращает false если найдет пустую картинку
function  CheckRows(){
    img1=document.images;
    for(var i=0; i<img1.length; i++){
        if(img1[i].src.split("/").pop()=="blank.png"){
            return false;
        }
    }
    return  true


// определяем имя файла
/*function CheckWin() {
    var i;
    var score = 0;
    for (i = 1; i < 10; i++) {
        var piltX = document.getElementById("pilt" + i).src
        if (document.getElementById("pilt1" + i).src == piltX) {
            document.getElementById("pilt" + i).removeAttribute("onclick");
            document.getElementById("pilt1" + i).removeAttribute("onclick");
            score++;
            document.getElementById("pilt1" + i).style.visibility = 'hidden';

        } else {

        }

        if (score >= 9) {
            alert("tubli");
        }
    }*/
}
function CheckWin(){

    if (document.getElementById("pilt1").src == document.getElementById("pilt10").src
        && document.getElementById("pilt2").src == document.getElementById("pilt11").src
        && document.getElementById("pilt3").src == document.getElementById("pilt12").src
        && document.getElementById("pilt4").src == document.getElementById("pilt13").src
        && document.getElementById("pilt5").src == document.getElementById("pilt14").src
        && document.getElementById("pilt6").src == document.getElementById("pilt15").src
        && document.getElementById("pilt7").src == document.getElementById("pilt16").src
        && document.getElementById("pilt8").src == document.getElementById("pilt17").src
        && document.getElementById("pilt9").src == document.getElementById("pilt18").src
        ) {
        showhide(document.getElementById("sec1"));
        show(document.getElementById("pilt21"));
        return true;
        alert("tubli");
    }
    return false;
}
var tf = false
function showhide(el){
    if (tf == false){
        $(el).css("animation", "myAnim 1s ease 0s 1 normal forwards");
        $(el).hide(1000)
        tf = true
    }
    else{
        $(el).show(800)
        tf= false
    }
}
function show(el){
    el.style="display: inline;"

}