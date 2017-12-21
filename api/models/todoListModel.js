'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "Your task needs a name"]
  },
  created_date: {
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
