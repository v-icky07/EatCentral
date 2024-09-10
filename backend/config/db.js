import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://vicky07:vikasjs@cluster0.a502eo1.mongodb.net/?retryWrites=true', {
        dbName: "food-del"
    })
        .then(() => console.log("DB Connected"));

}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.