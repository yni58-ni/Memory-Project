import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    creator: String,
    title:String,
    message: String,
    tages:[String],
    selectedFile : String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        dafult: new Date()
    },

});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;