const { Schema, model } = require('mongoose')

const exampleSchema = new Schema({
    test: { type: String, required: true, default: 'Success!' }
})

module.exports = model('example', exampleSchema) 