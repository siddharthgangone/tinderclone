
import mongoose from "mongoose";

const cardschema = mongoose.Schema({

    name : String,
    imgurl: String


})

export default mongoose.model('cards',cardschema)