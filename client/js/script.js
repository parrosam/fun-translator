window.addEventListener("DOMContentLoaded", function(){
    document.getElementById("translate-button").addEventListener("click", getTranslation);
    document.getElementById("translate-button-mobile").addEventListener("click", getTranslation);
});

function getTranslation(){
    let url = "api/translate";

    let textToTranslate = document.getElementById("input-textarea").value;
    if(textToTranslate && textToTranslate.length > 0){
        url += "?text=" + textToTranslate;
        httpGetAsync(url, updateTranslation);    
    }
}

function updateTranslation(){
    document.getElementById("translated-textarea").value = this.responseText;
}


function httpGetAsync(url, fn){
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = fn;
    httpRequest.open('GET', url);
    httpRequest.send();
}
