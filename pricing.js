function displayContainer1() {
    document.getElementById("container1").style.display = "block";
    document.getElementById("container2").style.display = "none";
    document.getElementById("button1").style.backgroundColor="orange";
    document.getElementById("button2").style.backgroundColor="";

}

function displayContainer2() {
    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "block";
    document.getElementById("button2").style.backgroundColor="orange";
    document.getElementById("button1").style.backgroundColor="";
    
}