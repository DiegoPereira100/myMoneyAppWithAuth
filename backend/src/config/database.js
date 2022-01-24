const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const options = {
    useMongoClient: true,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0, //{ useNewUrlParser: true }
  }

module.exports = mongoose.connect('mongodb://localhost/mymoney', options)
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de : '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de : '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo : '{PATH}'."