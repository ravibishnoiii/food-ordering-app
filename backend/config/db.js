import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect(
      "mongodb+srv://ravibishnoiii:ravibishnoiii114@cluster0.2g1vc8g.mongodb.net/fooddelapp").then(()=>console.log("DB Connected"));
}