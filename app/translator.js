var rp = require('request-promise-native');
var xmlParse = require('xml2js').parseString;

var translator = function(){

    let OcpApimHeader = "Ocp-Apim-Subscription-Key";
    let key = process.env.TRANSLATOR_KEY;

    let TranslatorBaseUrl = "https://api.microsofttranslator.com/V2/Http.svc/Translate";

    var x = function(to, from, text){        
        var url = TranslatorBaseUrl + "?text=" + text + "&from=" + from + "&to=" + to + "&appid=";
        
        var headers = {};
        headers[OcpApimHeader] = key;
        var options = {
            url: url,
            headers: headers
        };
        
        return rp(options)
            .then(function(resp){
                return resp;
            })
            .then(function(xml){                
                return new Promise(function(resolve, reject){                    
                    xmlParse(xml, function(err, result){
                        if(err){
                            reject(err);
                        }   
                        else{
                            resolve(result);
                        }
                    });
                });
            })
            .then(function(result){                
                return result.string._;
            })
            .catch(function (err){
                return err;
            });
    };

    return {
        trans: x
    };
}();

module.exports = translator;