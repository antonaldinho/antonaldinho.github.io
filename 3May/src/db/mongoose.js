
const mongoose = require('mongoose')

const connectionURL = 'mongodb+srv://antonio:lmao@cluster0-buyml.azure.mongodb.net/clase?retryWrites=true'

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
