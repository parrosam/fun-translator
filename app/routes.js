var FakeTranslationArray = require('./constants/fakeTranslations');
var translator = require('./translator');

module.exports = function(app){
    
    app.get('/api/fakeTranslation', function(req, res){
        res.json(FakeTranslationArray);
    });
    
    app.get('/api/fakeTranslation/:id', function(req, res){
        if(!req.params.id || req.params.id > FakeTranslationArray.length){
            res.sendStatus(400);
            return;
        }
       res.json(FakeTranslationArray[req.params.id]);
    });

    app.get('/api/translate', function(req, res){
        if(!req.query.text){
            res.sendStatus(400);
            return;
        }

        translator.trans('fr', 'en', req.query.text)
            .then(function (resp){
                res.json(resp);
            });
        });
}