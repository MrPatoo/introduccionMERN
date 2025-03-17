const reviewController = {};
import reviewModel from "../models/Reviews.js"

//SELECT
reviewController.getReviews = async(req, res) =>{
    const reviews = await reviewModel.find().populate("idCliente") //así se hace un inner join
    res.json(reviews)
}

//INSERT
reviewController.postReviews = async(req, res) =>{
    const{comment, rating, idCliente } = req.body;
    const newReview = new reviewModel({comment, rating, idCliente})
    await newReview.save();

    res.json({message:"review saved"})
}

//DELETE
reviewController.deleteReviews = async(req, res) =>{
    await reviewModel.findByIdAndDelete(req.params.id)

    res.json({message:"review deleted"})
}

//UPDATE
reviewController.putReviews = async(req, res) =>{
    const{comment, rating, idCliente} = req.body;
    await reviewModel.findByIdAndUpdate(req.params.id, {comment, rating, idCliente}, {new:true})
    
    res.json({message:"review updated"})
}

export default reviewController;
