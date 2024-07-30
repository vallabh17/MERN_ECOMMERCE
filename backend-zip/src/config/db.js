const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://vallabhgudsoorkar17:VnRNQgP2aVtlxROL@cluster0.pwdajcu.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0'
//'mongodb+srv://codewithzosh:lognBCBmtWNPjrKC@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}