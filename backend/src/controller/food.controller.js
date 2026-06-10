import foodItemModel from "../model/foodItem.model.js";
import foodModel from "../model/foodItem.model.js"
import { uploadfile } from "../services/storage.service.js";
export async function createFood(req, res) {
  try {
        const result = await uploadfile(req.file.path);  //  return object from cloudnery 
        const foodItem = await foodModel.create({
          video:result.secure_url,
          name:req.body.name,
          description : req.body.description,
          foodPartner: req.foodPartner._id
        })
        res.json({
            message: "Upload successful",
            food: foodItem
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Upload failed" });
    }  
}