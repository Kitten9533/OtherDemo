var mongoose = require('mongoose')
var TestSchema = require('../schemas/TestSchema')
var Test = mongoose.model('Test',TestSchema)

module.exports = Test