function highlight(id) {
    document.getElementById(id).style.opacity = "0.5";
    document.getElementById(id+"text").style.zIndex = "1";                
}

function unhighlight(id) {
    document.getElementById(id).style.opacity = "1";
    document.getElementById(id+"text").style.zIndex = "-1";        
}
