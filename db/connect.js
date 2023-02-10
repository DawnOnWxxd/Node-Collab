const mongoose = require('mongoose')

const connectDB = (URI) => {
    return mongoose
    .set('strictQuery',true)
    .connect(URI)
}

module.exports = {connectDB};