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

function updateTranslation(httpRequest){
    document.getElementById("translated-textarea").value = httpRequest.responseText;
}

function httpGetAsync(url, callback){
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState != 4) 
            return;
		if (httpRequest.status != 200 && httpRequest.status != 304) {
			console.error('HTTP error ' + httpRequest.status);
			return;
        }

        callback(httpRequest);
        
    }
    httpRequest.open('GET', url);
    httpRequest.send();
}
