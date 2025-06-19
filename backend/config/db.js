import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://snehay551:uix0q1L3r3aEqaYo@cluster0.hb3xa7a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')).isObjectIdOrHexString(()=>console.log("DB Connected"));
}