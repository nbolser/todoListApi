'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: "Your task needs a name"
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'done'],
    }],
    default: ['pending']
  }
})

module.exports = mongoose.model('Tasks', TaskSchema);
