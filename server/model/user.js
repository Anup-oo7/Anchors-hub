import mongoose from "mongoose";

const urlShortner_userSchema = mongoose.Schema({
  
    email:{
        type: String,
        trim: true,
        lowercase: true
    },
    

    verified:{
        type:Boolean,
        default:false,
        required: true

    },

    profile: {
    type: Object, 
    default: {}  
    }
})

const user = mongoose.model('signup_user_details',urlShortner_userSchema)

export default user;