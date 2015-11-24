var express = require('express');
var router = express.Router();

var mongoose = require( 'mongoose' );
var Item = require(__dirname+'/../models/Item')

/* GET all items */
router.get('/', function(req, res, next) {
  Item.find(function(err, items) {
            if (err)
                res.send(err);

            res.json(items);
        });
});

/* GET item by id */
router.get('/:id', function(req, res, next) {
  Item.findById({ "_id" : req.params.id }, function(err, item) {
            if (err)
                res.send(err);

            res.json(item);
        });
});


module.exports = router;
