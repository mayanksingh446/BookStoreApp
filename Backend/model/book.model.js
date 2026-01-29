import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String,
});

// Schema are creted and then model want to create of that schema
// here book are refer to collection in data base
const Book = mongoose.model("Book",bookSchema);

export default Book;