import {v2 as cloudnery } from "cloudinary"
import dotenv from "dotenv"
dotenv.config()
cloudnery.config({
    cloud_name:process.env.CLOUDNERY_NAME,
    api_key:process.env.CLOUDNERY_API_KEY,
    api_secret:process.env.CLOUDNERY_PRIVATE_KEY
})
export async function uploadfile(filePath) {
     const result = await cloudnery.uploader.upload(filePath,{
        resource_type:"video",
        quality:"auto",  //this object used to compress video 
        fetch_format :"mp4"
     })
     return result
}