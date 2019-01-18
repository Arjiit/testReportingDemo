// Wrap all the methods in an object
var Tests = require('../../models/tests');

var test = {
  read: function(req, res, next){
    res.json({type: "Read", id: req.params.id});
  },
  create: function(req, res, next){
    res.send(req.body);
  },
  update: function(req, res, next){
    res.json({type: "Update", id: req.params.id, body: req.body });
  },
  delete: function(req, res, next){
    res.json({type: "Delete", id: req.params.id});
  },
  getAll: function(req, res, next){
    Tests.find(function(err, data) {
      if(err) console.error();
      res.json(data);
    })
  } 
}

// Return the object
module.exports = test;
