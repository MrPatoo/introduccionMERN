import blogModel from "../models/Blog.js"
import {v2 as cloudinary} from "cloudinary"
import { config } from "../config.js"

//1. configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
});

const blogController = {};

//select
blogController.getAllBlog = async(req, res)=>{
    const blogs = await blogModel.find()
    res.json(blogs)
}

//guardar
blogController.createBlog = async (req, res)=>{
    try {
        const{title, content} = req.body;
        let imageUrl = ""

        if(req.file){
            const result = await cloudinary.uploader.upload(
                req.file.path,
                {
                    folder: "public",
                    allowed_formats: ["jpg", "png", "jpeg"]
                }
            )
            imageUrl= result.secure_url
        }

        const newBlog = new blogModel({title, content, image: imageUrl});
        newBlog.save();

        res.json({message: "blog saved"});

    } catch (error) {
        console.log("error"+ error);
    }
}

export default blogController;