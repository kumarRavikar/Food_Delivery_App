import mongoose from "mongoose";
 

const foodItemSchema = new mongoose.Schema({

})


const foodItemModel = mongoose.model("foodItem",foodItemSchema)
export default foodItemModel;