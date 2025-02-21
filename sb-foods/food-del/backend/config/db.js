import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://bhuvaneswarik:Bhuna122@cluster0.hctr8.mongodb.net/food-del').then(() => console.log("DB Connected"));

}


