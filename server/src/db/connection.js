
const mongoose = require("mongoose")

const DB = process.env.DATABASE
// const DB = 'mongodb+srv://new_user:jk1BBWwmxQpZ31zO@cluster0.pxvwsjp.mongodb.net/myblog'

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log("DataBase Connected"))
    .catch((err) => { console.log(err) })