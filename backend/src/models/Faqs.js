/*fields:
    question, answer, level, isActive
*/
import { Schema, model } from "mongoose";

const faqsSchema = new Schema(
    {
        question: {
            type: String,
            required: true,
            minLength: 4,
        },

        answer: { 
            type: String,
            required: true,
            minLength: 4,
            trim: true //es para eliminar los espacion al final
        },

        level: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
            trim: true
        },

        isActive: {
            type: Boolean,
            required: true,
            default: true,
        }
        
    },{
        timestamps: true,
        strict: false
    }
)
export default model("Faqs", faqsSchema);
