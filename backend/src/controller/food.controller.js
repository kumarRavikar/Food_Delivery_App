import foodModel from "../model/foodItem.model.js"
import { fileUpload } from "../services/storage.service.js";

export async function createFood(req, res) {
    console.log(req.foodPartner);
    console.log(req.body)
    const uploadfile = await fileUpload(req.file.buffer)
    console.log(req.file)
    res.send("item created")
    
}