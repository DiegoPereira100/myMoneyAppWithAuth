const mongoose = require('mongoose')
// mongoose.Promise = global.Promise
// module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })
// //module.exports = mongoose.connect("mongodb://localhost:27017/mymoney", { useNewUrlParser: true })
// const options = {
//     useMongoClient: true,
//     autoIndex: false,
//     reconnectTries: Number.MAX_VALUE,
//     reconnectInterval: 500,
//     poolSize: 10,
//     bufferMaxEntries: 0,
//   }
module.exports = mongoose.connect('mongodb://localhost/mymoney', {useNewUrlParser:true})
mongoose.Error.messages.general.required = "O atributo '{PATH}' eh obrigatorio." 
mongoose.Error.messages.Number.min = "O '{VALUE}' eh menor que o valor minimo : '{MIN}'." 
mongoose.Error.messages.Number.max = "O '{VALUE}' excende o valor maximo : '{MAX}'." 
mongoose.Error.messages.String.enum = "O '{VALUE}' não eh valido para o atributo : '{PATH}'." 