import FaqsModel from "../models/Faqs.js";

const faqsController= {};

//SELECT*********************************************************************************************
faqsController.getFaqs = async(req, res) =>{
    try {
        const faqs = await FaqsModel.find();
        res.status(200).json(faqs)
    } catch (error) {
        console.log("error" + error)
        res.status(500).json({message: "Error finding faqs"})
    }
}

//INSERT********************************************************************************************
faqsController.postFaqs = async(req, res) =>{
    const { question, answer, level, isActive} = req.body;

    try {
        //esto es para validar que se pongan todos los datos
        if(!question || !answer || !level || !isActive){
            return res.status(400).json({message: "Ingrese datos validos"})
        }

        //esto es para validar que el nivel tenga los valores correctos
        if(level > 5 || level < 1){
            return res.status(400).json({message: "Ingrese un nivel válido"})
        }

        //GUARDAMOS EN LA BASE DE DATOS
        const newFaqs = FaqsModel({
            question, answer, level, isActive
        })
        newFaqs.save();
        res.status(200).json({message: "faq saved"})
    } catch (error) {
        console.log("error: "+ error);
        res.status(500).json({message: "Error saving"});
    }
}

//UPDATE*********************************************************************************************
faqsController.putFaqs = async(req, res) =>{
    try {
        //traemos los datos
        const{question, answer, level, isActive} = req.body;

                //esto es para validar que el nivel tenga los valores correctos al momento de actualizar
                if(level > 5 || level < 1){
                    return res.status(400).json({message: "Ingrese un nivel válido"})
                }
                //no es necesario validar que todos los campos esten llenos ya que npo tengo necesidad que cambiarlos todos

            //guardamos los datos nuevos
            const updatedFaqs = await FaqsModel.findByIdAndUpdate(
                req.params.id, {question, answer, level, isActive}, {new: true}
            )

            //si no se puede actualizar tira este aviso
            if(!updatedFaqs){
                return res.status(400).json({message: "Faqs not found"})
            }//en caso de que si pueda actualizar tira este otro
            res.status(200).json({message: "Faq updated successfully"})
    } catch (error) {
        console.log("Error: " + error)
        res.status(400).json({message: "Error updating faqs"})
    }
}

//DELETE********************************************************************************************
faqsController.deleteFaqs = async(req, res) =>{
    try {
        const deletedFaqs = await FaqsModel.findByIdAndUpdate(req.params.id)

        if(!deletedFaqs){
            return res.status(400).json({message: "faqs not found"})
        }
        res.status(200).json({message: "Faq deleted successfully"})
    } catch (error) {
        console.log("Error: " + error)
        res.status(400).json({message: "Error deleting faqs"})
    }
}

export default faqsController;