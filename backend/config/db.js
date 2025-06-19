import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://snehay551:33858627@cluster0.hxgjinu.mongodb.net/food-del')).isObjectIdOrHexString(()=>console.log("DB Connected"));
}