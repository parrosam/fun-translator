var FakeTranslationArray = require('./constants/fakeTranslations');

module.exports = function(app){
    
    app.get('/api/fakeTranslation', function(req, res){
        res.json(FakeTranslationArray);
    });
    
    app.get('/api/fakeTranslation/:id', function(req, res){
        if(!req.params.id || req.params.id > FakeTranslationArray.length){
            res.sendStatus(400);
        }
       res.json(FakeTranslationArray[req.params.id]);
    });
}