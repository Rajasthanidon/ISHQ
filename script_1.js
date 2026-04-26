let size = 25;
let size1 = 25;
function font_size(){
    size = size + 4;
    size1 = size1 -4; 
    document.getElementById("ha").style.fontSize = size + "px";
    document.getElementById("cute_emoji").style.height = size + "px";
    
    if(size1>=4){
    document.getElementById("nahi").style.fontSize = size1 + "px";
    }
    else{
        document.getElementById("nahi").disabled = true;
    }

}
function myfunc_1(){
    window.alert("JI Bilkul Aap Hi Hai");
}