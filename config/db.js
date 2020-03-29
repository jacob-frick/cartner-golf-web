module.exports = require('mongoose').connect(process.env.MONGODB_URI || process.env.LOCAL_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })