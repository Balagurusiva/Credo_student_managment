import mongoose from "mongoose";

const feesSchema = mongoose.Schema(
    {
        student_name: {
            type: String,
            required: true
        },

    }
)